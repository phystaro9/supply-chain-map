#!/usr/bin/env node
/*
  準備用スクリプト：データの点検と索引（xref.js）づくり
  ------------------------------------------------------------
  使い方:  node tools/build.js
  ・データに間違いがあればエラーを並べて止まる（xref.js は書き換えない）
  ・問題がなければ xref.js を作り直す
  ・データを変えたら、コミットの前に必ず実行する
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);

const sandbox = { window: {} };
vm.createContext(sandbox);
function run(rel){
  const file = path.join(ROOT, rel);
  if(!fs.existsSync(file)){ err(`ファイルがありません: ${rel}`); return false; }
  try { vm.runInContext(fs.readFileSync(file, "utf8"), sandbox, { filename: rel }); return true; }
  catch(e){ err(`${rel} を読めません（書き方の誤り）: ${e.message}`); return false; }
}

/* ---------- 読み込み ---------- */
run("industries.js");
run("companies.js");
const W = sandbox.window;
const INDEX = W.SCM_INDEX || [];
const CM = W.SCM_COMPANIES || {};
if(!INDEX.length) err("industries.js に業界がありません");

const seenInd = new Set();
for(const e of INDEX){
  if(!e.id || !e.name || !e.file){ err(`industries.js: id・name・file のどれかが空です: ${JSON.stringify(e)}`); continue; }
  if(!/^[a-z0-9]+$/.test(e.id)) err(`industries.js: 業界ID "${e.id}" は英小文字と数字だけにしてください（URLに使うため）`);
  if(seenInd.has(e.id)) err(`industries.js: 業界ID "${e.id}" が重複しています`);
  seenInd.add(e.id);
  if(e.id === "co" || e.id === "home") err(`industries.js: 業界ID "${e.id}" は予約語なので使えません`);
  const before = (W.SCM_IND || []).length;
  if(run(e.file)){
    const added = (W.SCM_IND || []).slice(before);
    if(!added.some(x => x.id === e.id)) err(`${e.file}: 中の id が "${e.id}" になっていません`);
  }
}
const INDS = W.SCM_IND || [];

/* ---------- 会社の共通情報 ---------- */
for(const [id, c] of Object.entries(CM)){
  if(!/^[a-z0-9-]+$/.test(id)) err(`companies.js: 会社ID "${id}" は英小文字・数字・ハイフンだけにしてください`);
  if(!c.name) err(`companies.js: ${id} に name がありません`);
  if(c.listed !== undefined && c.listed !== false) warn(`companies.js: ${id} の listed は false のときだけ書きます（上場なら省略）`);
  for(const k of ["cap", "rev"]) if(c[k] != null && typeof c[k] !== "number") err(`companies.js: ${id} の ${k} は数値（億円）にしてください`);
  if(c.capDate && c.cap == null) warn(`companies.js: ${id} に capDate がありますが cap がありません`);
  if(c.url && !/^https?:\/\//.test(c.url)) err(`companies.js: ${id} の url が http で始まっていません`);
  for(const o of c.otherSectors || []){
    if(!o.name) err(`companies.js: ${id} の otherSectors に name のないものがあります`);
    if(o.href && o.href.startsWith("#")) warn(`companies.js: ${id} の otherSectors "${o.name}" はページ内リンクです。業界ファイルに会社を足せば自動でリンクが付くので、ここからは消せます`);
  }
}

/* ---------- 業界ごと ---------- */
const xrefCompanies = {}, xrefStages = {}, counts = {};
for(const ind of INDS){
  const where = `data/${ind.id}`;
  if(!Array.isArray(ind.stages) || !ind.stages.length){ err(`${where}: stages がありません`); continue; }
  const stageIds = new Set();
  for(const s of ind.stages){
    if(!s.id || !s.name) err(`${where}: id か name のない段があります`);
    if(stageIds.has(s.id)) err(`${where}: 段ID "${s.id}" が重複しています`);
    if(s.id && s.id.startsWith("co-")) err(`${where}: 段ID "${s.id}" は co- で始められません`);
    stageIds.add(s.id);
  }
  xrefStages[ind.id] = Object.fromEntries(ind.stages.map(s => [s.id, s.name]));
  const seenCo = new Set();
  for(const e of ind.companies || []){
    const at = `${where} の ${e.id}`;
    if(!CM[e.id]) err(`${at}: companies.js にこの会社IDがありません`);
    if(seenCo.has(e.id)) err(`${at}: 同じ業界に2回出てきます`);
    seenCo.add(e.id);
    if(e.type !== "u" && e.type !== "s") err(`${at}: type は "u" か "s" にしてください`);
    const keys = Object.keys(e.stages || {});
    if(!keys.length) err(`${at}: stages が空です`);
    for(const k of keys){
      if(!stageIds.has(k)) err(`${at}: 段ID "${k}" はこの業界にありません`);
      if(!String(e.stages[k] || "").trim()) warn(`${at}: 段 "${k}" の説明が空です`);
    }
    if(!stageIds.has(e.home)) err(`${at}: home "${e.home}" はこの業界の段にありません`);
    else if(!keys.includes(e.home)) err(`${at}: home "${e.home}" が stages の中にありません`);
    (xrefCompanies[e.id] = xrefCompanies[e.id] || []).push({
      ind: ind.id, home: e.home,
      stages: keys.filter(k => stageIds.has(k)).sort((a, b) => ind.stages.findIndex(s => s.id === a) - ind.stages.findIndex(s => s.id === b))
    });
  }
  for(const s of ind.stages) if(!(ind.companies || []).some(e => e.home === s.id)) warn(`${where}: 段 "${s.id}" を主な段にしている会社がありません`);
  counts[ind.id] = { stages: ind.stages.length, companies: (ind.companies || []).length };
}
for(const id of Object.keys(CM)) if(!xrefCompanies[id]) warn(`companies.js: ${id} はどの業界にも出てきません`);

/* ---------- 企業ページ ---------- */
const pageDir = path.join(ROOT, "pages");
const pageFiles = fs.existsSync(pageDir) ? fs.readdirSync(pageDir).filter(f => f.endsWith(".js")) : [];
for(const f of pageFiles){
  const id = f.replace(/\.js$/, "");
  if(!CM[id]){ err(`pages/${f}: companies.js にこの会社IDがありません`); continue; }
  if(!CM[id].page) err(`pages/${f} がありますが、companies.js の ${id} に page: true がありません`);
  if(!run(`pages/${f}`)) continue;
  const P = (W.SCM_PAGES || {})[id];
  if(!P){ err(`pages/${f}: 中の会社IDが "${id}" になっていません`); continue; }
  if(P.graph){
    const ids = new Set();
    for(const n of P.graph.nodes || []){
      if(ids.has(n.id)) err(`pages/${f}: グラフの node "${n.id}" が重複しています`);
      ids.add(n.id);
      if(typeof n.x !== "number" || typeof n.y !== "number") err(`pages/${f}: node "${n.id}" に x・y の数値がありません`);
      if(n.link && !CM[n.link]) err(`pages/${f}: node "${n.id}" の link "${n.link}" が companies.js にありません`);
    }
    for(const e of P.graph.edges || []){
      if(!ids.has(e.from)) err(`pages/${f}: 矢印の from "${e.from}" が node にありません`);
      if(!ids.has(e.to)) err(`pages/${f}: 矢印の to "${e.to}" が node にありません`);
      if(!e.pct) warn(`pages/${f}: ${e.from}→${e.to} に pct（比率）がありません`);
    }
  }
  if(P.capital) for(const g of P.capital.groups || []) for(const it of g.items || [])
    if(typeof it.v !== "number") err(`pages/${f}: 資本構成 "${it.name}" の v（簿価）が数値ではありません`);
}
for(const [id, c] of Object.entries(CM)) if(c.page && !pageFiles.includes(`${id}.js`)) err(`companies.js: ${id} は page: true ですが pages/${id}.js がありません`);

/* ---------- 結果 ---------- */
for(const w of warnings) console.log("注意: " + w);
if(errors.length){
  for(const e of errors) console.log("エラー: " + e);
  console.log(`\nエラー ${errors.length} 件。xref.js は書き換えていません。`);
  process.exit(1);
}
const out = `/* 自動生成ファイル（node tools/build.js が作る）。手で書き換えない */
window.SCM_XREF = ${JSON.stringify({ stages: xrefStages, companies: xrefCompanies, counts }, null, 1)};
`;
fs.writeFileSync(path.join(ROOT, "xref.js"), out);
console.log(`OK: 業界 ${INDS.length}・会社 ${Object.keys(CM).length}・企業ページ ${pageFiles.length}。xref.js を作り直しました（注意 ${warnings.length} 件）。`);

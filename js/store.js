/* データの置き場：業界一覧・会社の共通情報・索引（xref）と、業界データ・企業ページの読み込み */
SCM.store = (function(){
  const INDEX = window.SCM_INDEX || [];
  const CM = window.SCM_COMPANIES || {};
  const X = window.SCM_XREF || { stages: {}, companies: {}, counts: {} };
  window.SCM_IND = window.SCM_IND || [];
  window.SCM_PAGES = window.SCM_PAGES || {};

  const AREAS = window.SCM_AREAS || [];
  const areaMeta = id => AREAS.find(x => x.id === id);
  const indMeta = id => INDEX.find(x => x.id === id);
  const areaOfInd = id => areaMeta((indMeta(id) || {}).area);
  const indOrder = id => INDEX.findIndex(x => x.id === id);
  const loaded = id => window.SCM_IND.find(x => x.id === id);

  async function loadInd(id){
    if(loaded(id)) return loaded(id);
    const e = indMeta(id);
    if(!e) throw new Error(`業界 ${id} は industries.js にありません`);
    await SCM.u.loadScript(e.file);
    if(!loaded(id)) throw new Error(`${e.file} に業界 ${id} がありません`);
    return loaded(id);
  }
  async function loadPage(id){
    if(window.SCM_PAGES[id]) return window.SCM_PAGES[id];
    if(!(CM[id] && CM[id].page)) return null;
    try { await SCM.u.loadScript(`pages/${id}.js`); } catch(e){}
    return window.SCM_PAGES[id] || null;
  }

  /* その会社が出てくる業界（業界一覧の並び順） */
  const appearances = id => (X.companies[id] || []).slice().sort((a, b) => indOrder(a.ind) - indOrder(b.ind));
  const stageName = (ind, st) => (X.stages[ind] || {})[st] || st;
  const indName = id => (indMeta(id) || {}).name || id;

  /* 業界どうしのつながり（存在しない業界を指すものは除く）。ind だけ → その業界に関わるもの、stage まで → その段に関わるもの */
  const DEPS = (window.SCM_DEPS || []).filter(d => indMeta(d.from.ind) && indMeta(d.to.ind));
  const depsFor = (ind, stage) => ({
    out: DEPS.filter(d => d.from.ind === ind && (!stage || d.from.stage === stage)),
    inn: DEPS.filter(d => d.to.ind === ind && (!stage || d.to.stage === stage))
  });

  return { INDEX, AREAS, CM, X, DEPS, depsFor, areaMeta, areaOfInd, indMeta, loadInd, loadPage, appearances, stageName, indName };
})();

/* リンクの組み立て（どの画面からも使う） */
SCM.links = (function(){
  const { esc } = SCM.u;
  const S = SCM.store;
  const company = id => `#co-${id}`;
  const stage = (ind, st) => `#${ind}-${st}`;
  const industry = ind => `#${ind}`;

  /* 他の業界へのリンク（xref から自動）＋まだページのない業種（準備中） */
  function others(c, curInd){
    const auto = S.appearances(c.id).filter(a => a.ind !== curInd)
      .map(a => `<a class="pill-on" href="${stage(a.ind, a.home)}">${esc(S.indName(a.ind))}（${esc(S.stageName(a.ind, a.home))}）→</a>`);
    const manual = (c.otherSectors || []).map(o => o.href
      ? `<a class="pill-on" href="${esc(o.href)}">${esc(o.name)} →</a>`
      : `<span class="pill" title="業種ページは準備中です" aria-disabled="true">${esc(o.name)}（準備中）</span>`);
    return auto.concat(manual).join("");
  }
  /* 行の下に並べるリンク一式 */
  function row(c, curInd, opts = {}){
    const parts = [];
    if(!opts.noCompany) parts.push(`<a href="${company(c.id)}">企業ページ →</a>`);
    if(c.url) parts.push(`<a href="${esc(c.url)}" target="_blank" rel="noopener">公式サイト ↗</a>`);
    const op = opts.noOthers ? "" : others(c, curInd);
    return (parts.length || op) ? `<div class="links">${parts.join("")}${op}</div>` : "";
  }
  /* 業界どうしのつながり1本。どちらの業界・段も xref から名前を引くので、業界データは読まない */
  function dep(d){
    const end = e => `<a href="${stage(e.ind, e.stage)}">${esc(S.indName(e.ind))}・${esc(S.stageName(e.ind, e.stage))}</a>`;
    return `<div class="dep"><div class="flow">${end(d.from)}<i>→</i>${end(d.to)}</div><p>${esc(d.what)}</p></div>`;
  }
  return { company, stage, industry, others, row, dep };
})();

#!/usr/bin/env node
/*
  表示の点検：スマホ幅（360・400・430px）で、主なページを開いて確認する
  ------------------------------------------------------------
  使い方:  node tools/check-view.js
  ・横にはみ出すページがないか
  ・文字が小さすぎないか（図の中の文字は、縮み率をかけた実際の大きさで測る。下限は12.5px）
  ・スクリプトのエラーが出ていないか
  どれかに当てはまると、内容を並べて終了コード1で止まる。
  必要なもの: playwright（node から require できること）
*/
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const URL = "file://" + path.join(ROOT, "index.html");
const MIN_FONT = 12.5;

(async () => {
  const browser = await chromium.launch();
  const problems = [];
  const probe = await browser.newPage({ viewport: { width: 400, height: 900 } });
  await probe.goto(URL + "#home");
  await probe.waitForTimeout(400);
  /* 調べるページ：トップ・つながり図・各業界（全体と最初の段）・各業界の最初の会社 */
  const hashes = await probe.evaluate(() => {
    const S = SCM.store, out = ["#home", "#map"];
    for (const e of S.INDEX) {
      out.push("#" + e.id);
      const first = Object.keys(S.X.stages[e.id] || {})[0];
      if (first) out.push(`#${e.id}-${first}`);
    }
    const seen = new Set();
    for (const [id, apps] of Object.entries(S.X.companies)) {
      const ind = apps[0] && apps[0].ind;
      if (ind && !seen.has(ind)) { seen.add(ind); out.push("#co-" + id); }
    }
    for (const id of Object.keys(S.CM)) if (S.CM[id].page) out.push("#co-" + id);
    return [...new Set(out)];
  });
  await probe.close();

  for (const width of [360, 400, 430]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    for (const h of hashes) {
      await page.goto(URL + h);
      await page.waitForTimeout(350);
      const r = await page.evaluate(() => {
        let min = 99, minTxt = "";
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          const t = n.textContent.trim();
          const el = n.parentElement;
          if (!t || !el || el.closest("script,style,[hidden]")) continue;
          const cs = getComputedStyle(el);
          if (cs.display === "none" || cs.visibility === "hidden") continue;
          let fs = parseFloat(cs.fontSize);
          const svg = el.closest("svg");
          if (svg && svg.getScreenCTM()) fs *= svg.getScreenCTM().a;
          if (fs < min) { min = fs; minTxt = t.slice(0, 16); }
        }
        return { over: document.documentElement.scrollWidth > innerWidth, min: +min.toFixed(1), minTxt, empty: document.getElementById("view").innerText.trim().length < 20 };
      });
      if (r.over) problems.push(`${width}px ${h}: 横にはみ出しています`);
      if (r.min < MIN_FONT) problems.push(`${width}px ${h}: 文字が小さすぎます（${r.min}px「${r.minTxt}」）`);
      if (r.empty) problems.push(`${width}px ${h}: 中身が表示されていません`);
    }
    for (const e of [...new Set(errors)]) problems.push(`${width}px: スクリプトのエラー: ${e}`);
    await page.close();
  }
  await browser.close();

  if (problems.length) {
    for (const p of problems) console.log("問題: " + p);
    console.log(`\n問題 ${problems.length} 件（${hashes.length}ページ × 3幅）`);
    process.exit(1);
  }
  console.log(`OK: ${hashes.length}ページ × 3幅。はみ出し・小さすぎる文字・エラーなし。`);
})();

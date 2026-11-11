/* 起動・URLの振り分け・会社検索
   URLの形:
     #home（または空）       … 業界一覧
     #power                  … 電力の全体
     #power-equipment        … 電力の「発電設備」の段
     #co-mhi                 … 三菱重工の企業ページ
   古い形（#fuel、#co-jera、#power-co-jera）も受け付ける */
(function(){
  const { esc, norm } = SCM.u;
  const S = SCM.store, V = SCM.views;
  const view = document.getElementById("view");

  if(!S.INDEX.length){
    view.innerHTML = '<p class="note">industries.js を読み込めませんでした。このページと同じ場所にあるか確認してください。</p>';
    return;
  }

  function parse(){
    const h = decodeURIComponent(location.hash.slice(1));
    if(!h || h === "home") return { type: "home" };
    if(h.startsWith("co-")) return { type: "company", id: h.slice(3) };
    const e = S.INDEX.find(x => h === x.id || h.startsWith(x.id + "-"));
    if(e){
      const v = h === e.id ? "overview" : h.slice(e.id.length + 1);
      if(v.startsWith("co-")) return { type: "company", id: v.slice(3) };
      return { type: "industry", ind: e.id, v };
    }
    /* 業界の付いていない古いリンクは、最初の業界の段として扱う */
    const first = S.INDEX[0].id;
    if((S.X.stages[first] || {})[h]) return { type: "industry", ind: first, v: h };
    return { type: "home" };
  }

  let seq = 0, lastKey = "";
  async function route(){
    const my = ++seq;
    const r = parse();
    const key = JSON.stringify(r);
    try {
      if(r.type === "industry"){
        const ind = await S.loadInd(r.ind);
        if(my !== seq) return;
        const x = SCM.ctx(ind);
        const st = x.stageById[r.v];
        V.industry.head(x, st ? r.v : "overview");
        st ? V.industry.sector(x, st) : V.industry.overview(x);
      } else if(r.type === "company" && S.CM[r.id]){
        const draw = await V.company.render(r.id);
        if(my !== seq) return;
        draw();
      } else {
        V.home.render();
      }
    } catch(e){
      view.innerHTML = `<p class="note">読み込みに失敗しました（${esc(e.message)}）。ファイルの置き場所を確認してください。</p>`;
    }
    if(key !== lastKey && lastKey) window.scrollTo({ top: 0 });
    lastKey = key;
  }
  addEventListener("hashchange", route);
  route();

  /* ---------- 会社検索 ---------- */
  const q = document.getElementById("q"), box = document.getElementById("qres");
  const entries = Object.entries(S.CM).map(([id, c]) => ({ id, c, key: norm([c.name, c.short, id].join(" ")) }));
  let hits = [], sel = 0;
  function show(){
    const t = norm(q.value);
    if(!t){ box.hidden = true; return; }
    hits = entries.filter(e => e.key.includes(t)).slice(0, 12);
    sel = 0;
    box.innerHTML = hits.length
      ? hits.map((e, i) => `<a href="#co-${e.id}" class="${i === sel ? "sel" : ""}">${esc(e.c.name)}<small>${S.appearances(e.id).map(a => esc(S.indName(a.ind)) + "・" + esc(S.stageName(a.ind, a.home))).join("／") || "業界未登録"}</small></a>`).join("")
      : `<p>「${esc(q.value)}」に当てはまる会社はありません</p>`;
    box.hidden = false;
  }
  function close(){ box.hidden = true; q.value = ""; q.blur(); }
  q.addEventListener("input", show);
  q.addEventListener("keydown", ev => {
    if(ev.key === "Escape"){ close(); return; }
    if(!hits.length || box.hidden) return;
    if(ev.key === "ArrowDown" || ev.key === "ArrowUp"){
      ev.preventDefault();
      sel = (sel + (ev.key === "ArrowDown" ? 1 : hits.length - 1)) % hits.length;
      [...box.querySelectorAll("a")].forEach((a, i) => a.classList.toggle("sel", i === sel));
    }
    if(ev.key === "Enter"){ ev.preventDefault(); location.hash = "co-" + hits[sel].id; close(); }
  });
  box.addEventListener("click", ev => { if(ev.target.closest("a")) setTimeout(close, 0); });
  document.addEventListener("click", ev => { if(!ev.target.closest(".search")) box.hidden = true; });
})();

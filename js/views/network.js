/* つながり図：領域のかたまり（クラスター）の中に業界を置き、業界どうしのつながりを線で結ぶ
   ・かたまり = 領域。つながりの多い領域は近くに寄る（計算は毎回同じ結果になる）
   ・点 = 業界（押すと、その業界に関わる線だけを強調）。線 = deps.js の線を業界の組ごとにまとめたもの（押すとその組の中身を表示）
   URL: #map */
SCM.views = SCM.views || {};
SCM.views.network = (function(){
  const { esc } = SCM.u;
  const S = SCM.store, links = SCM.links;
  const W = 680, C = 340, R = 215, PH = 32;

  const pillW = name => name.length * 15 + 26;

  function layout(){
    const n = S.AREAS.length || 1;
    const areas = S.AREAS.map((a, i) => {
      const inds = S.INDEX.filter(e => e.area === a.id);
      const k = inds.length, maxW = Math.max(0, ...inds.map(e => pillW(e.name)));
      const r = k === 0 ? 40 : Math.max(52, maxW / 2 + 14, k > 1 ? k * 19 + 26 : 0);
      const ang = -Math.PI / 2 + i * 2 * Math.PI / n;
      return { a, inds, r, x: C + R * Math.cos(ang), y: C + R * Math.sin(ang) };
    });
    const aIdx = Object.fromEntries(areas.map((o, i) => [o.a.id, i]));
    const ar = id => aIdx[(S.indMeta(id) || {}).area];

    /* 領域どうしのつながりの数 */
    const pairs = {};
    for(const d of S.DEPS){
      const i = ar(d.from.ind), j = ar(d.to.ind);
      if(i == null || j == null || i === j) continue;
      const key = Math.min(i, j) + "-" + Math.max(i, j);
      pairs[key] = (pairs[key] || 0) + 1;
    }
    /* 重ならないように離しつつ、つながりのある領域は近くへ寄せる */
    for(let it = 0; it < 300; it++){
      for(let i = 0; i < areas.length; i++) for(let j = i + 1; j < areas.length; j++){
        const A = areas[i], B = areas[j];
        let dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy) || 0.01;
        const minD = A.r + B.r + 18, w = pairs[i + "-" + j] || 0;
        let move = 0;
        if(d < minD) move = (d - minD) / 2;
        else if(w && d > minD + 40) move = Math.min(2, 0.03 * (d - minD - 40) * Math.min(w, 3));
        if(move){ dx /= d; dy /= d; A.x += dx * move; A.y += dy * move; B.x -= dx * move; B.y -= dy * move; }
      }
      for(const A of areas){
        A.x = Math.min(W - A.r - 8, Math.max(A.r + 8, A.x));
        A.y = Math.min(W - A.r - 8, Math.max(A.r + 26, A.y));
      }
    }
    /* 業界を領域の中に置く */
    const nodes = {};
    for(const A of areas) A.inds.forEach((e, idx) => {
      nodes[e.id] = { e, x: A.x, y: A.y + (idx - (A.inds.length - 1) / 2) * 38, w: pillW(e.name) };
    });
    /* 描く範囲は中身に合わせて詰める（スマホでも文字が読める大きさになる） */
    const half = A => Math.max(A.r, (A.a.name.length + (A.inds.length ? 0 : 5)) * 14 / 2);   /* 領域名の幅も範囲に入れる */
    const x0 = Math.min(...areas.map(A => A.x - half(A))) - 8, x1 = Math.max(...areas.map(A => A.x + half(A))) + 8;
    const y0 = Math.min(...areas.map(A => A.y - A.r - 26)) - 8, y1 = Math.max(...areas.map(A => A.y + A.r)) + 8;
    return { areas, nodes, vb: [x0, y0, x1 - x0, y1 - y0].map(v => v.toFixed(0)).join(" ") };
  }

  /* 業界の組ごとにまとめる（供給する側 → 受け取る側） */
  function groups(){
    const g = {};
    for(const d of S.DEPS){
      const key = d.from.ind + ">" + d.to.ind;
      (g[key] = g[key] || { from: d.from.ind, to: d.to.ind, deps: [] }).deps.push(d);
    }
    return Object.values(g);
  }

  function edgeGeom(a, b){
    let dx = b.x - a.x, dy = b.y - a.y;
    const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
    const cut = n => Math.min((n.w / 2 + 3) / (Math.abs(dx) || 1e-6), (PH / 2 + 3) / (Math.abs(dy) || 1e-6));
    const x1 = a.x + dx * cut(a), y1 = a.y + dy * cut(a);
    const x2 = b.x - dx * (cut(b) + 4), y2 = b.y - dy * (cut(b) + 4);
    const off = 26, cx = (x1 + x2) / 2 - dy * off, cy = (y1 + y2) / 2 + dx * off;
    /* 本数の丸は、受け取る側の領域名と重ならないよう、供給する側寄り（線の38%の位置）に置く */
    const t = 0.38, u = 1 - t;
    return { x1, y1, x2, y2, cx, cy, mx: u * u * x1 + 2 * u * t * cx + t * t * x2, my: u * u * y1 + 2 * u * t * cy + t * t * y2 };
  }

  function render(){
    document.title = "つながり図｜サプライチェーン地図";
    document.getElementById("head").innerHTML = `
      <div class="crumbs"><a href="#home">業界一覧</a><span>›</span><span>つながり図</span></div>
      <h1>業界どうしのつながり</h1>
      <p class="lede">大きな丸は領域、中の点は業界です。線は、モノやサービスが流れる向き（供給する側 → 受け取る側）で、数字は線の本数。点や線を押すと、中身を表示します。</p>`;
    document.getElementById("legend").innerHTML = "";
    document.getElementById("foot").textContent = "つながりの本数は、deps.js に書いた線の数です。業界構造の理解用で、投資判断の材料ではありません。";

    const { areas, nodes, vb } = layout();
    const gs = groups();
    const view = document.getElementById("view");

    const areaSvg = areas.map(A => `<circle class="n-area${A.inds.length ? "" : " empty"}" cx="${A.x.toFixed(1)}" cy="${A.y.toFixed(1)}" r="${A.r}"/>`).join("");
    /* 領域の名前は線より手前に描く（線と重なっても読める） */
    const labelSvg = areas.map(A => `<text class="n-alabel${A.inds.length ? "" : " empty"}" x="${A.x.toFixed(1)}" y="${(A.y - A.r - 7).toFixed(1)}" text-anchor="middle">${esc(A.a.name)}${A.inds.length ? "" : "（準備中）"}</text>`).join("");

    /* 線と、本数の丸は別の層に描く（丸が領域名に隠れないように、丸は名前より手前） */
    const edgeData = (g, i) => `data-i="${i}" data-a="${g.from}" data-b="${g.to}" tabindex="0" role="button" aria-label="${esc(S.indName(g.from))}から${esc(S.indName(g.to))}へ ${g.deps.length}本"`;
    const geoms = gs.map(g => nodes[g.from] && nodes[g.to] ? edgeGeom(nodes[g.from], nodes[g.to]) : null);
    const edgeSvg = gs.map((g, i) => {
      const p = geoms[i]; if(!p) return "";
      const d = `M${p.x1.toFixed(1)} ${p.y1.toFixed(1)}Q${p.cx.toFixed(1)} ${p.cy.toFixed(1)} ${p.x2.toFixed(1)} ${p.y2.toFixed(1)}`;
      return `<g class="n-edge" ${edgeData(g, i)}><path class="hit" d="${d}"/><path class="line" style="stroke-width:${Math.min(1.5 + g.deps.length * 0.7, 5)}" d="${d}" marker-end="url(#nh)"/></g>`;
    }).join("");
    const badgeSvg = gs.map((g, i) => {
      const p = geoms[i]; if(!p) return "";
      return `<g class="n-edge" ${edgeData(g, i)}><circle class="cnt" cx="${p.mx.toFixed(1)}" cy="${p.my.toFixed(1)}" r="11"/><text x="${p.mx.toFixed(1)}" y="${(p.my + 4.5).toFixed(1)}" text-anchor="middle">${g.deps.length}</text></g>`;
    }).join("");

    const nodeSvg = Object.values(nodes).map(n => `<g class="n-node" data-id="${n.e.id}" tabindex="0" role="button">
      <rect x="${(n.x - n.w / 2).toFixed(1)}" y="${(n.y - PH / 2).toFixed(1)}" width="${n.w}" height="${PH}" rx="16"/>
      <text x="${n.x.toFixed(1)}" y="${(n.y + 5).toFixed(1)}" text-anchor="middle">${esc(n.e.name)}</text></g>`).join("");

    view.innerHTML = `<section>
      <div class="net-scroll"><svg class="net" viewBox="${vb}" role="img" aria-label="領域のかたまりと、業界どうしのつながり">
        <defs><marker id="nh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="g-head" d="M1 1L9 5L1 9z"/></marker></defs>
        ${areaSvg}${edgeSvg}${labelSvg}${badgeSvg}${nodeSvg}</svg></div>
      <div id="netInfo"></div>
    </section>`;

    const svg = view.querySelector("svg"), info = view.querySelector("#netInfo");
    let sel = null;
    function show(){
      let shown = S.DEPS, title = `すべてのつながり（${S.DEPS.length}本）`, open = null;
      svg.classList.toggle("has-sel", !!sel);
      svg.querySelectorAll(".n-edge").forEach(el => {
        const on = !sel || (sel.type === "ind" ? (el.dataset.a === sel.id || el.dataset.b === sel.id) : (el.dataset.i === String(sel.i)));
        el.classList.toggle("on", !!sel && on);
      });
      svg.querySelectorAll(".n-node").forEach(el => el.classList.toggle("sel", !!sel && sel.type === "ind" && el.dataset.id === sel.id));
      if(sel && sel.type === "ind"){
        shown = S.DEPS.filter(d => d.from.ind === sel.id || d.to.ind === sel.id);
        title = `${S.indName(sel.id)}に関わるつながり（${shown.length}本）`;
        open = sel.id;
      } else if(sel){
        const g = gs[sel.i];
        shown = g.deps;
        title = `${S.indName(g.from)} → ${S.indName(g.to)}（${shown.length}本）`;
      }
      info.innerHTML = `<div class="sec-head" style="margin-top:14px"><h3>${esc(title)}</h3>${sel ? `<p><a href="#map" data-clear>選択を外す</a>${open ? `　<a href="${links.industry(open)}">${esc(S.indName(open))}のページへ →</a>` : ""}</p>` : ""}</div>
        ${shown.length ? `<div class="deps">${shown.map(links.dep).join("")}</div>` : `<p class="note">この業界に関わるつながりは、まだありません。</p>`}`;
    }
    function pick(next){
      const same = sel && next && sel.type === next.type && (next.type === "ind" ? sel.id === next.id : sel.i === next.i);
      sel = same ? null : next;
      show();
    }
    svg.addEventListener("click", ev => {
      const n = ev.target.closest(".n-node"), e = ev.target.closest(".n-edge");
      if(n) pick({ type: "ind", id: n.dataset.id });
      else if(e) pick({ type: "edge", i: +e.dataset.i });
      else if(sel){ sel = null; show(); }
    });
    svg.addEventListener("keydown", ev => {
      if(ev.key !== "Enter" && ev.key !== " ") return;
      const n = ev.target.closest(".n-node"), e = ev.target.closest(".n-edge");
      if(n || e){ ev.preventDefault(); pick(n ? { type: "ind", id: n.dataset.id } : { type: "edge", i: +e.dataset.i }); }
    });
    info.addEventListener("click", ev => { if(ev.target.closest("[data-clear]")){ ev.preventDefault(); sel = null; show(); } });
    show();
  }
  return { render };
})();

/* 企業ページ：全社に自動で用意。pages/<id>.js がある会社は、概要・業績・資本関係・資本構成を上乗せ */
SCM.views = SCM.views || {};
SCM.views.company = (function(){
  const { esc, fmt, fmtOku } = SCM.u;
  const S = SCM.store, links = SCM.links;

  /* 資本関係の有向グラフ（矢印は出資する側 → 出資される側） */
  function graphSVG(g){
    const W = 180, H = 52, nodes = Object.fromEntries(g.nodes.map(n => [n.id, n]));
    const edges = g.edges.map(e => {
      const a = nodes[e.from], b = nodes[e.to];
      const x1 = a.x, y1 = a.y + H / 2, x2 = b.x, y2 = b.y - H / 2 - 4;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const amt = e.amount == null ? "出資額 未確認" : "出資額 " + fmtOku(e.amount);
      return `<line class="g-edge" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#ah)"/>
        <g class="g-lbl" transform="translate(${mx},${my})"><rect x="-58" y="-19" width="116" height="38" rx="6"/>
        ${e.noAmount
          ? `<text class="g-sub" text-anchor="middle" y="4">${esc(e.pct)}</text>`
          : `<text class="g-pct" text-anchor="middle" y="-3">${esc(e.pct)}</text>
        <text class="${e.amount == null ? "g-warn" : "g-sub"}" text-anchor="middle" y="12">${esc(amt)}</text>`}</g>`;
    }).join("");
    const ns = g.nodes.map(n => {
      const href = n.href || (n.link && S.CM[n.link] ? links.company(n.link) : null);
      const box = `<rect class="g-node${n.focus ? " focus" : ""}${/未上場/.test(n.sub || "") ? " unl" : ""}" x="${n.x - W / 2}" y="${n.y - H / 2}" width="${W}" height="${H}" rx="8"/>
        <text class="g-name" x="${n.x}" y="${n.y - 3}" text-anchor="middle">${esc(n.label)}</text>
        <text class="g-sub" x="${n.x}" y="${n.y + 15}" text-anchor="middle">${esc(n.sub || "")}${href ? " →" : ""}</text>`;
      return href ? `<a class="g-link" href="${esc(href)}">${box}</a>` : `<g>${box}</g>`;
    }).join("");
    const maxY = Math.max(...g.nodes.map(n => n.y)) + H / 2 + 12;
    return `<svg class="graph" viewBox="0 0 680 ${maxY}" role="img" aria-label="資本関係の有向グラフ">
      <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="g-head" d="M1 1L9 5L1 9z"/></marker></defs>
      ${edges}${ns}</svg>`;
  }

  /* 資本構成（簿価と時価を併記） */
  function capitalBlock(cap){
    const colors = { debt: "var(--debt)", hybrid: "var(--hyb)", equity: "var(--eq)" };
    const fvVal = it => typeof it.fv === "number" ? it.fv : (it.fv === "approx" ? it.v : null);
    const sums = cap.groups.map(g => {
      const fvs = g.items.map(fvVal);
      return { ...g, sum: g.items.reduce((a, b) => a + b.v, 0), fvSum: fvs.every(v => v != null) ? fvs.reduce((a, b) => a + b, 0) : null };
    });
    const total = sums.reduce((a, g) => a + g.sum, 0);
    const fvTotal = sums.every(g => g.fvSum != null) ? sums.reduce((a, g) => a + g.fvSum, 0) : null;
    const stack = sums.map(g => { const p = g.sum / total * 100; return `<div style="width:${p}%;background:${colors[g.id] || "var(--muted)"}" title="${esc(g.name)} ${fmtOku(g.sum)}">${p >= 8 ? Math.round(p) + "%" : ""}</div>`; }).join("");
    const fvCell = it => typeof it.fv === "number" ? fmtOku(it.fv)
      : it.fv === "approx" ? `<span class="na">≈簿価</span>`
      : `<span class="na">—${it.fvNote ? `<small>${esc(it.fvNote)}</small>` : ""}</span>`;
    const lists = sums.map(g => `<div><h4><i style="background:${colors[g.id] || "var(--muted)"}"></i>${esc(g.name)}<span class="metric" style="margin-left:auto">${(g.sum / total * 100).toFixed(1)}%</span></h4>
      <table><thead><tr><th></th><th>簿価</th><th>時価</th></tr></thead><tbody>
      ${g.items.map(it => `<tr><td>${esc(it.name)}${it.note ? `<small>${esc(it.note)}</small>` : ""}</td><td class="n">${fmtOku(it.v)}</td><td class="n">${fvCell(it)}</td></tr>`).join("")}
      <tr class="sum"><td>小計</td><td class="n">${fmtOku(g.sum)}</td><td class="n">${g.fvSum != null ? fmtOku(g.fvSum) : '<span class="na">—</span>'}</td></tr>
      </tbody></table></div>`).join("");
    return `<section><div class="card"><div class="sec-head" style="margin:0"><h3>資本構成</h3><p>${esc(cap.asOf || "")}</p></div>
      <div class="totals"><div><span class="k">簿価の合計</span><span class="v">${fmtOku(total)}</span></div><div><span class="k">時価の合計</span><span class="v">${fvTotal != null ? fmtOku(fvTotal) : '<span class="na">算出不可</span>'}</span></div></div>
      <p class="sub-h" style="margin:12px 0 0">構成比（簿価）</p>
      <div class="stack" role="img" aria-label="資本構成の簿価の比率">${stack}</div>
      <div class="cap-list">${lists}</div>
      ${cap.basisNote ? `<p class="note" style="margin:10px 0 0">${esc(cap.basisNote)}</p>` : ""}</div></section>`;
  }

  /* 直近の業績と要因 */
  function recentBlock(r){
    const list = items => `<ul class="plain">${(items || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;
    return `<section><div class="card">
      <div class="sec-head" style="margin:0"><h3>${esc(r.title || "直近の業績と要因")}</h3><p>${esc(r.period || "")}</p></div>
      ${r.kpis ? `<div class="facts" style="margin:10px 0 4px">${r.kpis.map(k => `<div class="fact"><span class="k">${esc(k.k)}</span><span class="v">${esc(k.v)}</span>${k.d ? `<span class="d">${esc(k.d)}</span>` : ""}</div>`).join("")}</div>` : ""}
      <div class="two">
        <div><p class="sub-h">${esc(r.driversTitle || "稼いだ理由")}</p>${list(r.drivers)}</div>
        <div><p class="sub-h">${esc(r.downstreamTitle || "その裏で")}</p>${list(r.downstream)}</div>
      </div>
      ${r.groupNote ? `<p class="callout">${esc(r.groupNote)}</p>` : ""}
      ${r.sources ? `<p class="src">出典：${r.sources.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.t)}</a>`).join("／")}</p>` : ""}
    </div></section>`;
  }

  async function render(id){
    const base = S.CM[id];
    const apps = S.appearances(id);
    const [P, inds] = await Promise.all([
      S.loadPage(id),
      Promise.all(apps.map(a => S.loadInd(a.ind).catch(() => null)))
    ]);
    return () => draw(id, base, apps, inds, P);
  }

  function draw(id, base, apps, inds, P){
    const c = { id, ...base };
    const listed = c.listed !== false;
    document.title = c.name + "｜サプライチェーン地図";

    /* 出てくる業界ごとの役割 */
    let showNum = false;
    const sections = apps.map((a, i) => {
      const ind = inds[i];
      if(!ind) return "";
      const x = SCM.ctx(ind);
      const me = x.coById[id];
      if(!me) return "";
      if(x.hasNum(me)) showNum = true;
      const cards = x.stagesOf(me).map(sid => `<a href="${x.L(sid)}"><b>${esc(x.stageById[sid].name)} →</b><span>${esc(me.stages[sid])}</span></a>`).join("");
      return `<div class="ind-role">
        <div class="ind-role-head"><a href="${links.industry(ind.id)}">${esc(ind.name)}</a>${x.mini(me)}<span class="tag ${me.type}">${esc(x.typeLabel(me))}</span></div>
        <div class="stage-links">${cards}</div>
      </div>`;
    }).join("");

    const facts = [];
    if(showNum && c.cap != null) facts.push({ k: "時価総額", v: fmt(c.cap) + (c.capDate ? `（${c.capDate}時点）` : "") });
    if(showNum && c.cap == null && c.rev != null) facts.push({ k: "売上高", v: fmt(c.rev) });
    for(const f of (P && P.facts) || []) facts.push(f);

    document.getElementById("head").innerHTML = `
      <div class="crumbs"><a href="#home">業界一覧</a><span>›</span>${apps.map(a => `<a href="${links.stage(a.ind, a.home)}">${esc(S.indName(a.ind))}・${esc(S.stageName(a.ind, a.home))}</a>`).join("<span>／</span>")}</div>
      <div class="row-top"><h1>${esc(c.name)}</h1><span class="tag ${listed ? "x" : "x unl-tag"}">${listed ? "上場" : "未上場"}</span></div>`;
    document.getElementById("legend").innerHTML = "";
    document.getElementById("foot").textContent = showNum ? "数値は各業界ページの注記と同じ基準の概算です。業界構造の理解用で、投資判断の材料ではありません。" : "";

    const view = document.getElementById("view");
    view.innerHTML = `<section>
      ${P && P.summary ? `<p class="role">${esc(P.summary)}</p>` : ""}
      ${c.note ? `<p class="note" style="margin:0 0 12px">${esc(c.note)}</p>` : ""}
      ${links.row(c, null, { noCompany: true, noOthers: true })}
      ${facts.length ? `<div class="facts">${facts.map(f => `<div class="fact"><span class="k">${esc(f.k)}</span><span class="v">${esc(f.v)}</span></div>`).join("")}</div>` : ""}
      <p class="sub-h">${apps.length > 1 ? `${apps.length}つの業界に出てきます` : "関わる段"}</p>
      <div class="ind-roles">${sections || `<p class="note">どの業界にも登録されていません。</p>`}</div>
      ${(c.otherSectors || []).length ? `<p class="sub-h">ほかの事業</p><div class="links">${links.others({ ...c, id: "__none" }, null)}</div>` : ""}
      ${!P ? `<p class="note" style="margin-top:16px">この会社の概要・資本関係は、まだ作っていません。</p>` : ""}
    </section>
    ${P && P.recent ? recentBlock(P.recent) : ""}
    ${P && P.graph ? `<section><div class="card">
      <div class="sec-head" style="margin:0"><h3>資本関係</h3><p>矢印は出資する側から出資される側へ。数字は持ち株比率。</p></div>
      <div class="graph-scroll">${graphSVG(P.graph)}</div>
      ${P.graph.note ? `<p class="note" style="margin:6px 0 0">${esc(P.graph.note)}</p>` : ""}
    </div></section>` : ""}
    ${P && P.capital ? capitalBlock(P.capital) : ""}`;
    const gs = view.querySelector(".graph-scroll");
    if(gs && gs.scrollWidth > gs.clientWidth) gs.scrollLeft = (gs.scrollWidth - gs.clientWidth) / 2;
  }

  return { render };
})();

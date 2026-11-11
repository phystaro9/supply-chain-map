/* トップ：領域ごとに業界を並べる（まだ作っていない業界は「準備中」） */
SCM.views = SCM.views || {};
SCM.views.home = (function(){
  const { esc } = SCM.u;
  const S = SCM.store;

  function card(e){
    const st = Object.values(S.X.stages[e.id] || {});
    const n = (S.X.counts[e.id] || {}).companies || 0;
    return `<a class="ind-card" href="#${e.id}">
      <b>${esc(e.name)}</b>
      ${e.desc ? `<p>${esc(e.desc)}</p>` : ""}
      <span class="chain">${st.map(s => `<span>${esc(s)}</span>`).join("")}</span>
      <span class="cnt">${st.length}段・${n}社</span>
    </a>`;
  }

  function render(){
    document.title = "サプライチェーン地図";
    document.getElementById("head").innerHTML = `
      <h1>サプライチェーン地図</h1>
      <p class="lede">領域ごとに、業界の上流から下流までの流れと代表企業、段をまたぐ会社、資本関係をまとめています。業界を選ぶか、上の欄から会社を探してください。</p>`;
    const total = Object.keys(S.CM).length;

    /* 領域に入っていない業界があっても落とさず、最後にまとめて出す */
    const known = new Set(S.AREAS.map(a => a.id));
    const stray = S.INDEX.filter(e => !known.has(e.area));
    const areas = S.AREAS.concat(stray.length ? [{ id: "_", name: "その他", planned: [] }] : []);

    document.getElementById("view").innerHTML = areas.map(a => {
      const inds = a.id === "_" ? stray : S.INDEX.filter(e => e.area === a.id);
      const planned = (a.planned || []).filter(p => !inds.some(e => e.name === p));
      return `<section class="area${inds.length ? "" : " empty"}">
        <div class="sec-head"><h3>${esc(a.name)}</h3><p>${inds.length ? `${inds.length}業界` : "準備中"}</p></div>
        ${a.desc ? `<p class="note" style="margin:0 0 8px">${esc(a.desc)}</p>` : ""}
        ${inds.length ? `<div class="ind-grid">${inds.map(card).join("")}</div>` : ""}
        ${planned.length ? `<div class="planned"><span class="k">${inds.length ? "このあと" : "予定"}</span>${planned.map(p => `<span class="pill" aria-disabled="true">${esc(p)}</span>`).join("")}</div>` : ""}
      </section>`;
    }).join("");

    document.getElementById("legend").innerHTML = "";
    document.getElementById("foot").textContent = `収録：${S.INDEX.length}業界・${total}社（${S.AREAS.length}領域）。業界構造の理解用で、投資判断の材料ではありません。`;
  }
  return { render };
})();

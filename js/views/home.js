/* トップ：業界の一覧 */
SCM.views = SCM.views || {};
SCM.views.home = (function(){
  const { esc } = SCM.u;
  const S = SCM.store;

  function render(){
    document.title = "サプライチェーン地図";
    document.getElementById("head").innerHTML = `
      <h1>サプライチェーン地図</h1>
      <p class="lede">業界ごとに、上流から下流までの流れと代表企業、段をまたぐ会社、資本関係をまとめています。業界を選ぶか、上の欄から会社を探してください。</p>`;
    const total = Object.keys(S.CM).length;
    document.getElementById("view").innerHTML = `
      <section>
        <div class="ind-grid">${S.INDEX.map(e => {
          const st = Object.values(S.X.stages[e.id] || {});
          const n = (S.X.counts[e.id] || {}).companies || 0;
          return `<a class="ind-card" href="#${e.id}">
            <b>${esc(e.name)}</b>
            ${e.desc ? `<p>${esc(e.desc)}</p>` : ""}
            <span class="chain">${st.map(s => `<span>${esc(s)}</span>`).join("")}</span>
            <span class="cnt">${st.length}段・${n}社</span>
          </a>`;
        }).join("")}</div>
      </section>`;
    document.getElementById("legend").innerHTML = "";
    document.getElementById("foot").textContent = `収録：${S.INDEX.length}業界・${total}社。業界構造の理解用で、投資判断の材料ではありません。`;
  }
  return { render };
})();

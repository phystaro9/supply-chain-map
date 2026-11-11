/* 業界の画面：見出し・段のタブ、全体図（縦の線＋段をまたぐ会社の帯＋周辺の会社）、段の詳細 */
SCM.views = SCM.views || {};

/* 業界ごとの道具箱。会社の共通情報と業界での役割を合体させて使う */
SCM.ctx = function(ind){
  const { esc, fmt } = SCM.u;
  const CM = SCM.store.CM;
  const ST = ind.stages;
  const CO = (ind.companies || []).map(e => ({ ...(CM[e.id] || { name: e.id }), ...e }));
  const stageIdx = Object.fromEntries(ST.map((s, i) => [s.id, i]));
  const stageById = Object.fromEntries(ST.map(s => [s.id, s]));
  const coById = Object.fromEntries(CO.map(c => [c.id, c]));
  const L = v => v === "overview" ? `#${ind.id}` : `#${ind.id}-${v}`;
  const hasNum = c => !!ind.showNumbers && (c.cap != null || c.rev != null);
  const size = c => !ind.showNumbers ? 0 : (c.cap != null ? c.cap : (c.rev || 0));
  const isUnl = c => c.listed === false;
  const bySize = (a, b) => size(b) - size(a);
  const stagesOf = c => Object.keys(c.stages || {}).filter(id => id in stageIdx).sort((a, b) => stageIdx[a] - stageIdx[b]);
  const multi = c => stagesOf(c).length >= 2;
  const labels = ind.labels || { u: "中核企業", s: "関連企業" };
  const typeLabel = c => isUnl(c) ? "未上場" : String(labels[c.type] || (c.type === "u" ? "中核企業" : "関連企業")).replace(/（.*?）/, "");
  function metric(c){
    if(!hasNum(c)) return "";
    if(c.cap != null) return `<span class="metric"><span class="k">時価総額</span>${fmt(c.cap)}${c.capDate ? `<span class="flag">${esc(c.capDate)}時点</span>` : ""}</span>`;
    return `<span class="metric"><span class="k">売上高</span>${fmt(c.rev)}</span>`;
  }
  function mini(c){
    const s = c.stages || {};
    return `<span class="mini" aria-label="関わる段：${esc(stagesOf(c).map(id => stageById[id].name).join("、"))}">${ST.map(st => `<i class="${s[st.id] ? "on" : ""}" title="${esc(st.name)}"></i>`).join("")}</span>`;
  }
  return { ind, ST, CO, stageIdx, stageById, coById, labels, L, hasNum, size, isUnl, bySize, stagesOf, multi, typeLabel, metric, mini };
};

SCM.views.industry = (function(){
  const { esc } = SCM.u;
  const links = SCM.links;

  /* 見出し・段のタブ・凡例・注記 */
  function head(x, cur){
    const I = x.ind;
    document.title = (I.title || I.name) + "地図";
    const items = [["overview", "全体"], ...x.ST.map(s => [s.id, s.name])];
    document.getElementById("head").innerHTML = `
      <div class="crumbs"><a href="#home">業界一覧</a><span>›</span>${SCM.store.areaOfInd(I.id) ? `<span>${esc(SCM.store.areaOfInd(I.id).name)}</span><span>›</span>` : ""}<span>${esc(I.name)}</span></div>
      <h1>${esc(I.title || I.name)}地図</h1>
      <p class="lede">${esc(I.lede || "")}段や会社を選ぶと詳細を表示します。</p>
      <nav aria-label="段">${items.map(([id, n]) => `<a href="${x.L(id)}"${id === cur ? ' aria-current="page"' : ""}>${esc(n)}</a>`).join("")}</nav>`;
    const anyNum = x.CO.some(x.hasNum), anyFlag = I.showNumbers && x.CO.some(c => c.capDate);
    document.getElementById("legend").innerHTML = `
      <span><i class="sw" style="background:var(--util-bg);border:1px solid var(--util)"></i>${esc(x.labels.u)}</span>
      <span><i class="sw" style="background:var(--sup-bg);border:1px solid var(--sup)"></i>${esc(x.labels.s)}</span>
      <span><i class="sw" style="border:1.5px dashed var(--muted)"></i>未上場${anyNum ? "（売上高で表示）" : ""}</span>
      ${anyFlag ? `<span><span class="flag" style="margin:0">時点違い</span>月末の値が取れなかった会社</span>` : ""}`;
    const m = I.meta || {};
    document.getElementById("foot").textContent = m.capAsOf
      ? `時価総額は${m.capAsOf}×発行済株式数で算出した概算です（「時点違い」の付いた会社は、その日付の値）。未上場企業は${m.revAsOf}の売上高です。売上高と時価総額は別の指標なので、同じ並びで比べるのは目安としてください。業界構造の理解用で、投資判断の材料ではありません。データ更新：${m.updated}`
      : `${m.note || ""}${m.updated ? " データ更新：" + m.updated : ""}`;
  }

  /* ほかの業界とのつながり（業界全体、または1つの段について） */
  function depsBlock(ind, stage){
    const d = SCM.store.depsFor(ind, stage);
    if(!d.inn.length && !d.out.length) return "";
    const list = (title, arr) => arr.length ? `<p class="dep-h">${title}</p><div class="deps">${arr.map(links.dep).join("")}</div>` : "";
    return `<section>
      <div class="sec-head"><h3>ほかの業界とのつながり</h3><p>矢印は、供給する側から受け取る側へ</p></div>
      ${list(stage ? "この段に入ってくるもの" : "この業界に入ってくるもの", d.inn)}${list(stage ? "この段から出ていくもの" : "この業界から出ていくもの", d.out)}
    </section>`;
  }

  /* 段をまたぐ会社の帯：会社ごとの縦の列 */
  function band(x, cols){
    const { ST, stageIdx } = x;
    let h = `<div class="band" style="grid-template-columns:112px repeat(${cols.length},70px);grid-template-rows:auto repeat(${ST.length},56px)">`;
    h += `<div class="rl" style="border-top:0"></div>` + cols.map(c => `<div class="ch"><a href="${links.company(c.id)}" title="${esc(c.name)}">${esc(c.short || c.name)}</a></div>`).join("");
    ST.forEach(st => {
      h += `<div class="rl"><a href="${x.L(st.id)}">${esc(st.name)}</a></div>`;
      cols.forEach(c => {
        const ids = x.stagesOf(c), i = stageIdx[st.id], first = stageIdx[ids[0]], last = stageIdx[ids[ids.length - 1]];
        const role = c.stages[st.id];
        let cls = "cell";
        if(role){
          cls += ` on ${c.type}${x.isUnl(c) ? " unl" : ""}`;
          const prevOn = i > 0 && c.stages[ST[i - 1].id], nextOn = i < ST.length - 1 && c.stages[ST[i + 1].id];
          if(!prevOn) cls += " top";
          if(!nextOn) cls += " bot";
        } else if(i > first && i < last) cls += " gap";
        h += `<div class="${cls}"${role ? ` title="${esc(c.name)}｜${esc(st.name)}：${esc(role)}"` : ""}></div>`;
      });
    });
    return h + `</div>`;
  }

  function overview(x){
    const I = x.ind;
    const stations = x.ST.map(st => {
      const home = x.CO.filter(c => c.home === st.id).sort(x.bySize);
      const shown = home.slice(0, 7), rest = home.length - shown.length;
      const cross = x.CO.filter(c => c.home !== st.id && c.stages && c.stages[st.id]);
      const chip = c => `<a class="co ${c.type}${x.isUnl(c) ? " unl" : ""}" href="${links.company(c.id)}"><b>${esc(c.name)}${x.isUnl(c) && x.hasNum(c) ? "（未上場）" : ""}</b>${x.hasNum(c) ? x.metric(c) : `<span class="lst">${x.isUnl(c) ? "未上場" : "上場"}</span>`}</a>`;
      return `<div class="station">
        <div class="st-head"><a class="st-name" href="${x.L(st.id)}">${esc(st.name)}</a><span class="st-sub">${esc(st.sub || "")}</span><a class="st-more" href="${x.L(st.id)}">詳細 →</a></div>
        <div class="chips">${shown.map(chip).join("")}${rest > 0 ? `<a class="co ${home[0].type}" href="${x.L(st.id)}"><b>ほか${rest}社</b><span class="lst">詳細で表示</span></a>` : ""}</div>
        ${cross.length ? `<p class="cross">ほかの段から関わる会社：${cross.map(c => `<a href="${links.company(c.id)}">${esc(c.name)}</a>`).join("・")}</p>` : ""}
      </div>`;
    }).join("");
    const ep = I.endpoint || { name: "需要家", sub: "" };
    const cols = x.CO.filter(x.multi).sort((a, b) => x.stageIdx[x.stagesOf(a)[0]] - x.stageIdx[x.stagesOf(b)[0]] || x.bySize(a, b));
    const view = document.getElementById("view");
    view.innerHTML = `
    <section>
      <div class="spine">${stations}<div class="station demand"><div class="st-head"><span class="st-name">${esc(ep.name)}</span><span class="st-sub">${esc(ep.sub || "")}</span></div></div></div>
    </section>
    ${depsBlock(I.id, null)}
    ${cols.length ? `<section>
      <div class="sec-head"><h3>段をまたぐ会社</h3><p>会社ごとの縦の列。色の付いた段を自社か子会社で手がけています。</p></div>
      <p class="scroll-hint" id="bandHint" hidden>横にスクロールすると全社を見られます →</p>
      <div class="band-scroll" id="bandScroll">${band(x, cols)}</div>
      <div class="band-legend">
        <span><i class="sw" style="background:var(--util)"></i>${esc(x.labels.u)}</span>
        <span><i class="sw" style="background:var(--sup)"></i>${esc(x.labels.s)}</span>
        <span><i class="sw" style="border:2px dashed var(--muted)"></i>未上場</span>
        <span><i style="display:inline-block;height:14px;border-left:2px dotted var(--muted)"></i>間の段は手がけていない</span>
      </div>
    </section>` : ""}
    ${I.support && I.support.length ? `<section>
      <div class="sec-head"><h3>周辺で支える会社</h3><p>流れの外から、保険・検査・資金などで業界を支える会社</p></div>
      <div class="support">${I.support.map(s => `<div><b>${esc(s.name)}</b><p>${esc(s.role)}</p>${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">公式サイト ↗</a>` : ""}</div>`).join("")}</div>
    </section>` : ""}`;
    const bs = document.getElementById("bandScroll");
    if(bs) document.getElementById("bandHint").hidden = !(bs.scrollWidth > bs.clientWidth + 2);
  }

  function sector(x, st){
    const I = x.ind;
    const i = x.stageIdx[st.id], prev = x.ST[i - 1], next = x.ST[i + 1];
    const home = x.CO.filter(c => c.home === st.id).sort(x.bySize);
    const cross = x.CO.filter(c => c.home !== st.id && c.stages && c.stages[st.id]).sort(x.bySize);
    const max = Math.max(...home.map(x.size), 1);
    const ep = I.endpoint || { name: "需要家" };
    const row = (c, isCross) => {
      const col = c.type === "u" ? "var(--util)" : "var(--sup)";
      const role = c.stages[st.id] + (c.note && !isCross ? " " + c.note : "");
      return `<div class="row${x.isUnl(c) ? " unl" : ""}">
        <div class="row-top"><a class="row-name" href="${links.company(c.id)}">${esc(c.name)}</a><span class="tag ${c.type}">${esc(x.typeLabel(c))}</span>${isCross ? `<span class="tag x">主な段：${esc(x.stageById[c.home].name)}</span>` : ""}${x.multi(c) ? x.mini(c) : ""}${x.metric(c)}</div>
        ${!isCross && x.hasNum(c) ? `<div class="bar"><i class="${c.cap == null ? "rev" : ""}" style="width:${Math.max(2, x.size(c) / max * 100)}%;background-color:${col}"></i></div>` : ""}
        <div class="note">${esc(role)}</div>
        ${links.row(c, I.id)}
      </div>`;
    };
    document.getElementById("view").innerHTML = `<section>
      <div class="flowbar">${prev ? `<a href="${x.L(prev.id)}">← ${esc(prev.name)}</a>` : "<span>起点</span>"}<span>／</span><strong>${esc(st.name)}</strong><span>／</span>${next ? `<a href="${x.L(next.id)}">${esc(next.name)} →</a>` : `<span>${esc(ep.name)}へ</span>`}</div>
      <h2>${esc(st.name)}</h2><p class="role">${esc(st.role || "")}</p>
      <div class="rows">${home.map(c => row(c, false)).join("")}</div>
      ${I.stageNotes && I.stageNotes[st.id] ? `<p class="note" style="margin-top:12px">${esc(I.stageNotes[st.id])}</p>` : ""}
      ${cross.length ? `<p class="sub-h">ほかの段から関わる会社</p><div class="rows">${cross.map(c => row(c, true)).join("")}</div>` : ""}
    </section>
    ${depsBlock(I.id, st.id)}`;
  }

  return { head, overview, sector };
})();

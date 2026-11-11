/* 共通の小道具：文字のエスケープ、金額の表示、スクリプトの読み込み、検索用の文字そろえ */
window.SCM = window.SCM || {};
SCM.u = (function(){
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[ch]));

  /* 億円 → 「X.XX兆円」か「X,XXX億円」 */
  function fmt(v){
    if(v >= 10000){ const t = v / 10000; return (t >= 10 ? t.toFixed(1) : t.toFixed(2)).replace(/\.?0+$/, "") + "兆円"; }
    return Math.round(v).toLocaleString("ja-JP") + "億円";
  }
  const fmtOku = v => Math.round(v).toLocaleString("ja-JP") + "億円";

  /* 同じファイルは一度だけ読み込む */
  const loading = {};
  function loadScript(src){
    if(!loading[src]) loading[src] = new Promise((ok, ng) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => ok();
      s.onerror = () => { delete loading[src]; ng(new Error(src)); };
      document.head.appendChild(s);
    });
    return loading[src];
  }

  /* 全角・半角、大文字・小文字、記号の違いを吸収して比べる */
  const norm = s => String(s || "").normalize("NFKC").toLowerCase().replace(/[\s・()（）&＆.,、。-]/g, "");

  return { esc, fmt, fmtOku, loadScript, norm };
})();

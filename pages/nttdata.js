/*
  企業ページ：NTTデータグループ
  ・graph の矢印は「出資する側 → 出資される側」。amount が null なら「出資額 未確認」と表示
  ・noAmount: true の矢印は pct の文字だけ表示
*/
(window.SCM_PAGES = window.SCM_PAGES || {})["nttdata"] = {
  "summary": "NTTグループのITサービス会社で、NTTのデータ通信事業を引き継ぐため1988年に設立されました。2025年、親会社のNTTがTOB（1株4,000円）と株式併合で残りの株を買い取り、2025年9月26日に上場廃止しました。国内事業は株式会社NTTデータ、海外事業はNTT DATA, Inc.が担い、データセンター事業はNTT DATA, Inc.の事業の一つとして運営されています。",
  "facts": [
    { "k": "設立", "v": "1988年5月" },
    { "k": "本社", "v": "東京都江東区豊洲" },
    { "k": "社長", "v": "中山和彦（2026年6月から）" },
    { "k": "資本金", "v": "1,425億円（2025年3月末）" },
    { "k": "従業員", "v": "197,777人（連結、2025年3月末）" },
    { "k": "上場廃止", "v": "2025年9月26日" }
  ],
  "recent": {
    "title": "上場最後の通期の業績",
    "period": "2025年3月期・連結（IFRS）",
    "kpis": [
      { "k": "売上高", "v": "4兆6,387億円", "d": "前期比 +6.2%" },
      { "k": "営業利益", "v": "3,239億円", "d": "前期比 +4.6%" },
      { "k": "純利益", "v": "1,425億円", "d": "当社株主に帰属。前期比 +6.4%" }
    ],
    "driversTitle": "非上場化後：NTTのセグメントで見ると",
    "drivers": [
      "2026年3月期、NTTのセグメント「グローバル・ソリューション事業」は営業収益5兆46億円（+7.9%）・営業利益4,882億円（+50.7%）",
      "営業利益には、データセンターをNTT DC REITに譲渡した利益1,294億円が入っている",
      "このセグメントは「NTTデータグループ等」で、NTTデータグループの決算と同じではない"
    ],
    "downstreamTitle": "確認できていないこと",
    "downstream": [
      "2026年3月期の、NTTデータグループ自体の連結の売上高・純利益",
      "上場廃止後に、NTT DATA, Inc.とNTT GDCを完全子会社にする再編が行われたか",
      "買収の総額の公式な数字（約2.3兆円規模と報じられた）"
    ],
    "sources": [
      { "t": "NTTデータグループ 2025年3月期 決算短信", "url": "https://www2.jpx.co.jp/disc/96130/140120250425524717.pdf" },
      { "t": "NTT 2026年3月期 決算資料", "url": "https://group.ntt/en/ir/library/timely_disclosure/2026/pdf/004.pdf" }
    ]
  },
  "graph": {
    "nodes": [
      { "id": "ntt", "label": "NTT", "sub": "上場（日本電信電話）", "x": 590, "y": 40 },
      { "id": "nttdata", "label": "NTTデータグループ", "sub": "未上場（2025年9月〜）", "x": 340, "y": 170, "focus": true },
      { "id": "nttdata-jp", "label": "NTTデータ", "sub": "国内事業", "x": 90, "y": 300 },
      { "id": "nttdata-inc", "label": "NTT DATA, Inc.", "sub": "海外事業・データセンター", "x": 590, "y": 300 }
    ],
    "edges": [
      { "from": "ntt", "to": "nttdata", "pct": "100%", "amount": null },
      { "from": "ntt", "to": "nttdata-inc", "pct": "44.47%", "noAmount": true },
      { "from": "nttdata", "to": "nttdata-jp", "pct": "100%", "noAmount": true },
      { "from": "nttdata", "to": "nttdata-inc", "pct": "55.53%", "noAmount": true }
    ],
    "note": "NTTはTOB前に57.73%を持ち、TOBで81.75%に、株式併合（2025年9月30日に効力発生の予定と開示）で100%にした。TOBの買付予定数に価格をかけると約2兆3,712億円（計算値。公式な総額は未確認）。NTT DATA, Inc.の55.53%・44.47%は会社の公式ページの値で、TOBの開示には完全子会社にすることを検討すると書かれていた（その後は未確認）。データセンターの投資会社NTT GDCの親会社と比率は未確認。2025年7月14日には、NTTグループのデータセンター6物件を持つNTT DC REITがシンガポール取引所に上場した（スポンサーの出資比率は未確認）。"
  },
  "research": [
    {
      "kind": "TOBの開示（親会社のプレスリリース）",
      "what": "TOBの価格・期間・買付予定数・TOB前の持株比率、上場廃止後に子会社を再編する意向。",
      "src": { "t": "NTT ニュースリリース（2025年5月8日）", "url": "https://group.ntt/jp/newsrelease/2025/05/08/pdf/250508bb.pdf" }
    },
    {
      "kind": "TOBの結果",
      "what": "応募株数と、TOB後の持株比率（81.75%）。",
      "src": { "t": "NTT TOBの結果（2025年6月20日）", "url": "https://group.ntt/en/newsrelease/2025/06/20/pdf/250620aa.pdf" }
    },
    {
      "kind": "株式併合の開示と上場廃止",
      "what": "残りの株を買い取る株式併合の日程と、上場廃止日（2025年9月26日）。",
      "src": { "t": "日本取引所グループ", "url": "https://www.jpx.co.jp/news/1023/20250829-12.html" }
    },
    {
      "kind": "上場最後の有価証券報告書と決算短信",
      "what": "子会社の比率（NTTデータ100%など）、従業員数、上場最後の通期の業績。",
      "src": { "t": "NTTデータグループ 有価証券報告書（2025年3月期）", "url": "https://www.nttdata.com/global/ja/-/media/nttdataglobal-ja/files/investors/library/asr/2025/yuho2025_all.pdf?rev=fdcd8d6dec834f61b5141b58f76c0f81" }
    },
    {
      "kind": "親会社のセグメント",
      "what": "非上場化後は、NTTの決算の「グローバル・ソリューション事業」で業績の大きさを見る（NTTデータグループと範囲は同じではない）。",
      "src": { "t": "NTT 2026年3月期 決算資料", "url": "https://group.ntt/en/ir/library/timely_disclosure/2026/pdf/004.pdf" }
    },
    {
      "kind": "会社の公式サイト",
      "what": "会社概要（本社・設立・資本金）、社長交代の発表、NTT DATA, Inc.の出資比率、NTT GDCの位置づけ。",
      "src": { "t": "NTTデータグループ 会社概要", "url": "https://www.nttdata.com/global/ja/about-us/profile/" }
    },
    {
      "kind": "報道",
      "what": "NTT DC REITの上場（2025年7月14日、IPOは約7.73億米ドル、データセンター6物件）。",
      "src": { "t": "Mingtiandi（2025年7月）", "url": "https://www.mingtiandi.com/real-estate/data-centres/ntt-dc-reit-closes-flat-in-singapore-trading-debut-after-773m-ipo" }
    }
  ]
};

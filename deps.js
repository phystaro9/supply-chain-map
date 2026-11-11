/*
  業界どうしのつながり（領域をまたぐ線）
  ------------------------------------------------------------
  モノやサービスの流れを、「供給する側 → 受け取る側」で1本ずつ書く。
    from / to = { ind: 業界ID, stage: 段ID }
    what      = 何が流れるか（1〜2文。出典のある事実だけ書く）
  会社が重なっていなくても書ける。同じ会社が両方に出る場合は、会社のページから自動でリンクされる。
  業界IDと段IDが存在しないと、node tools/build.js が止める。
*/
window.SCM_DEPS = [
  {
    "from": { "ind": "shipping", "stage": "operator" },
    "to":   { "ind": "power",    "stage": "fuel" },
    "what": "LNG船・石炭船・タンカーが、発電所で使う燃料を海外から運ぶ。日本はLNGと石炭の大半を輸入に頼っている"
  },
  {
    "from": { "ind": "power",      "stage": "grid" },
    "to":   { "ind": "datacenter", "stage": "power" },
    "what": "データセンターは送配電網につながって初めて電気を受けられる。千葉県印西市では新規の受電開始まで最大10年待ちの事例が報じられている"
  },
  {
    "from": { "ind": "power",      "stage": "generation" },
    "to":   { "ind": "datacenter", "stage": "power" },
    "what": "発電会社が、データセンター向けに用地と電力容量を提供する例がある。JERAは千葉火力発電所の隣接地で、400MW級の計画に電力容量を供給する予定"
  },
  {
    "from": { "ind": "power",      "stage": "equipment" },
    "to":   { "ind": "datacenter", "stage": "equip" },
    "what": "重電メーカーの受変電設備・電源設備が、データセンターの電源にも使われる"
  },
  {
    "from": { "ind": "power",      "stage": "cables" },
    "to":   { "ind": "datacenter", "stage": "equip" },
    "what": "電線メーカーの光ファイバ・光配線が、データセンターの内外の通信をつなぐ"
  },
  {
    "from": { "ind": "power",      "stage": "construction" },
    "to":   { "ind": "datacenter", "stage": "build" },
    "what": "電気工事会社が、データセンターの受変電・配線工事も手がける"
  }
];

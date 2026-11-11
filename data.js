/*
  電力サプライチェーン地図 — データファイル
  ------------------------------------------------------------
  数値の更新や会社の追加は、このファイルだけを書き換えれば反映されます。
  ・金額の単位はすべて「億円」（1兆円 = 10000）
  ・cap   = 時価総額（上場企業）
  ・rev   = 売上高（未上場企業）
  ・capDate を書いた会社は「時点違い」として表示されます（月末の値が取れなかった場合）
  ・stages の中身は「その段で何をしているか」。2つ以上あると帯（またがり図）に出ます
  ・home  = 全体図でカードを置く段
  ・otherSectors の href が null の間は「準備中」として押せない表示になります
*/
window.SCM_DATA = {
  meta: {
    capAsOf: "2026年10月30日（10月末）終値",
    revAsOf: "2026年3月期",
    updated: "2026-11-11"
  },

  stages: [
    { id: "fuel", name: "燃料・資源", sub: "LNG・石油・石炭・ウラン",
      role: "発電所で燃やす燃料を調達・開発する段階。日本はLNGと石炭の大半を輸入に頼り、上流権益を持つ開発会社や大手電力系の調達会社が担います。燃料価格は燃料費調整制度を通じて電気料金に反映されます。" },
    { id: "equipment", name: "発電設備", sub: "タービン・原子炉・変電機器",
      role: "発電所や変電所の大型機器をつくる重電メーカー。ガスタービン、原子炉、発電機、変圧器などを供給し、データセンター向けの電力需要増で受注が伸びています。" },
    { id: "generation", name: "発電・小売", sub: "大手電力・火力・再エネ",
      role: "電気をつくり、家庭や企業に売る段階。大手電力は地域ごとに発電と小売を担い、火力の大部分は東京電力と中部電力の合弁JERAに集約されています。原発の再稼働状況が各社の収益力を大きく左右します。" },
    { id: "grid", name: "送配電網", sub: "一般送配電事業者",
      role: "発電所から需要家まで電気を届ける送電線・配電線を運用する段階。発送電分離により大手電力の子会社として独立し、託送料金で収益を得る規制事業です。各社とも未上場の子会社です。" },
    { id: "cables", name: "送配電資材", sub: "電線・ケーブル",
      role: "送電線、地中・海底ケーブル、光ファイバーをつくる電線メーカー。送電網の更新や洋上風力、データセンター向けの需要で2025〜26年に株価が大きく上昇し、11月初旬に急落しました。" },
    { id: "construction", name: "電気工事", sub: "設備・配電工事",
      role: "送配電線の工事や、ビル・工場・データセンターの電気設備工事を担う会社。大手電力の系列が多く、旺盛な建設投資で最高益が続いています。" }
  ],

  companies: [
    /* ---------- 燃料・資源 ---------- */
    { id: "inpex", name: "INPEX", short: "INPEX", type: "s", cap: 51183, home: "fuel",
      stages: { fuel: "国内最大の石油・天然ガス開発。豪イクシスLNGなど上流権益", generation: "再エネ・ガス火力などの電力事業" },
      url: "https://www.inpex.com/",
      otherSectors: [{ name: "鉱業（石油・ガス開発）", href: null }] },

    /* ---------- 発電設備 ---------- */
    { id: "hitachi", name: "日立製作所", short: "日立", type: "s", cap: 235496, home: "equipment",
      stages: { equipment: "日立エナジーの送配電機器、原子力" },
      url: "https://www.hitachi.co.jp/",
      otherSectors: [{ name: "IT・デジタル", href: null }, { name: "鉄道", href: null }] },
    { id: "mhi", name: "三菱重工業", short: "三菱重工", type: "s", cap: 115143, home: "equipment",
      stages: { equipment: "大型ガスタービン（GTCC）と原子力プラントの国内最大手" },
      url: "https://www.mhi.com/jp/",
      otherSectors: [{ name: "防衛・宇宙", href: null }, { name: "航空機", href: null }] },
    { id: "melco", name: "三菱電機", short: "三菱電機", type: "s", cap: 98053, home: "equipment",
      stages: { equipment: "発電機、変電・受配電機器、パワー半導体" },
      url: "https://www.mitsubishielectric.co.jp/",
      otherSectors: [{ name: "FA・産業機器", href: null }, { name: "家電・空調", href: null }] },
    { id: "toshiba", name: "東芝", short: "東芝", type: "s", rev: 37091, home: "equipment",
      stages: { equipment: "原子力、火力・水力発電機器、送変電・配電機器", construction: "子会社の東芝プラントシステムが発電設備工事" },
      note: "2023年に上場廃止。",
      url: "https://www.global.toshiba/jp/",
      otherSectors: [{ name: "HDD・電子デバイス", href: null }] },

    /* ---------- 発電・小売 ---------- */
    { id: "jera", name: "JERA", short: "JERA", type: "u", rev: 30500, home: "generation", page: true,
      stages: { fuel: "LNG調達は世界最大級。燃料の調達・トレーディング", generation: "国内火力発電の約3割。電力の卸売" },
      note: "東京電力と中部電力が50%ずつ出資。家庭向け小売と送配電網は持たない。",
      url: "https://www.jera.co.jp/",
      otherSectors: [{ name: "海外発電・再エネ投資", href: null }] },
    { id: "kepco", name: "関西電力", short: "関西電", type: "u", cap: 29150, home: "generation",
      stages: { generation: "原子力比率が高く、大手電力で収益力トップ", grid: "子会社の関西電力送配電" },
      url: "https://www.kepco.co.jp/",
      otherSectors: [{ name: "不動産", href: null }, { name: "通信", href: null }] },
    { id: "chuden", name: "中部電力", short: "中部電", type: "u", cap: 18965, home: "generation",
      stages: { generation: "小売。発電はJERAの持分法利益が業績に寄与", grid: "子会社の中部電力パワーグリッド", construction: "子会社のトーエネックが電気工事" },
      url: "https://www.chuden.co.jp/",
      otherSectors: [] },
    { id: "kyuden", name: "キューデンHD", short: "九電HD", type: "u", cap: 9347, home: "generation",
      stages: { generation: "九州電力の持株会社。原発稼働が安定", grid: "子会社の九州電力送配電" },
      note: "10月末の値は月次データの終値。",
      url: "https://www.kyuden.co.jp/",
      otherSectors: [] },
    { id: "tepco", name: "東京電力HD", short: "東電HD", type: "u", cap: 7402, home: "generation",
      stages: { generation: "国内最大の小売。福島第一の廃炉費用が重荷", grid: "子会社の東京電力パワーグリッド" },
      url: "https://www.tepco.co.jp/",
      otherSectors: [] },
    { id: "jpower", name: "Jパワー（電源開発）", short: "Jパワー", type: "u", cap: 7186, home: "generation",
      stages: { generation: "石炭火力と水力が中心の卸電力会社", grid: "子会社のJパワー送変電が基幹送電線を保有" },
      url: "https://www.jpower.co.jp/",
      otherSectors: [] },
    { id: "tohoku", name: "東北電力", short: "東北電", type: "u", cap: 6480, home: "generation",
      stages: { generation: "東北7県と新潟に供給", grid: "子会社の東北電力ネットワーク" },
      url: "https://www.tohoku-epco.co.jp/",
      otherSectors: [] },
    { id: "yonden", name: "四国電力", short: "四国電", type: "u", cap: 4481, capDate: "10/9", home: "generation",
      stages: { generation: "伊方原発を保有", grid: "子会社の四国電力送配電" },
      url: "https://www.yonden.co.jp/",
      otherSectors: [] },
    { id: "energia", name: "中国電力", short: "中国電", type: "u", cap: 3849, home: "generation",
      stages: { generation: "石炭火力の比率が高い", grid: "子会社の中国電力ネットワーク" },
      url: "https://www.energia.co.jp/",
      otherSectors: [] },
    { id: "hepco", name: "北海道電力", short: "北海電", type: "u", cap: 2323, home: "generation",
      stages: { generation: "半導体工場の進出で需要増に期待", grid: "子会社の北海道電力ネットワーク" },
      url: "https://www.hepco.co.jp/",
      otherSectors: [] },
    { id: "rikuden", name: "北陸電力", short: "北陸電", type: "u", cap: 2270, home: "generation",
      stages: { generation: "水力の比率が高い", grid: "子会社の北陸電力送配電" },
      url: "https://www.rikuden.co.jp/",
      otherSectors: [] },
    { id: "renova", name: "レノバ", short: "レノバ", type: "u", cap: 658, home: "generation",
      stages: { generation: "再生可能エネルギー専業の発電事業者" },
      url: "https://www.renovainc.com/",
      otherSectors: [] },

    /* ---------- 送配電網 ---------- */
    { id: "tepcopg", name: "東京電力パワーグリッド", short: "東電PG", type: "u", rev: 22944, home: "grid",
      stages: { grid: "首都圏の送配電網を運用。国内最大の送配電会社" },
      note: "東京電力HDの100%子会社。",
      url: "https://www.tepco.co.jp/pg/",
      otherSectors: [] },

    /* ---------- 送配電資材 ---------- */
    { id: "fujikura", name: "フジクラ", short: "フジクラ", type: "s", cap: 69552, home: "cables",
      stages: { cables: "データセンター向け光ファイバー・コネクタで急成長" },
      url: "https://www.fujikura.co.jp/",
      otherSectors: [{ name: "電子部品", href: null }] },
    { id: "sei", name: "住友電気工業", short: "住友電工", type: "s", cap: 56211, home: "cables",
      stages: { cables: "電線最大手。超高圧・海底ケーブルに強い", construction: "子会社の住友電設が電気工事" },
      url: "https://sei.co.jp/",
      otherSectors: [{ name: "自動車部品（ワイヤーハーネス）", href: null }] },
    { id: "furukawa", name: "古河電気工業", short: "古河電工", type: "s", cap: 15147, capDate: "11/5", home: "cables",
      stages: { cables: "光ファイバーで世界大手。電力ケーブルも" },
      url: "https://www.furukawa.co.jp/",
      otherSectors: [{ name: "自動車部品", href: null }] },

    /* ---------- 電気工事 ---------- */
    { id: "kinden", name: "きんでん", short: "きんでん", type: "s", cap: 9811, home: "construction",
      stages: { construction: "関西電力系。筆頭株主は関西電力（約29%）" },
      url: "https://www.kinden.co.jp/",
      otherSectors: [] },
    { id: "kandenko", name: "関電工", short: "関電工", type: "s", cap: 9439, home: "construction",
      stages: { construction: "東京電力系の電気工事大手。東電向けが約3割", generation: "太陽光・水力の発電事業" },
      url: "https://www.kandenko.co.jp/",
      otherSectors: [] }
  ],

  /* 補足：送配電網の段の注記 */
  stageNotes: {
    grid: "関西電力送配電、中部電力パワーグリッドなど他の送配電会社も、それぞれ大手電力の完全子会社です（帯の図で親会社側に表示）。"
  },

  /* ---------- 企業ページ（現在はJERAのみ） ---------- */
  pages: {
    jera: {
      summary: "東京電力と中部電力が2019年までに火力発電と燃料事業を統合してできた会社。LNGの取扱量は世界最大級で、国内の火力発電の約3割を担います。",
      facts: [
        { k: "売上収益", v: "3兆500億円（2026年3月期）" },
        { k: "親会社所有者に帰属する当期利益", v: "1,935億円" },
        { k: "総資産", v: "9兆9,979億円" },
        { k: "資本金", v: "1,000億円" }
      ],
      /* 資本関係の有向グラフ。矢印は「出資する側 → 出資される側」
         amount が null のものは「未確認」と表示 */
      graph: {
        nodes: [
          { id: "tepco",   label: "東京電力HD",            sub: "上場", link: "tepco",  x: 170, y: 40 },
          { id: "tepcofp", label: "東京電力フュエル&パワー", sub: "未上場", x: 170, y: 150 },
          { id: "chuden",  label: "中部電力",              sub: "上場", link: "chuden", x: 510, y: 150 },
          { id: "jera",    label: "JERA",                  sub: "未上場", x: 340, y: 270, focus: true },
          { id: "freeport", label: "Freeport LNG",         sub: "米国・LNG基地", x: 90, y: 400 },
          { id: "aboitiz",  label: "Aboitiz Power",        sub: "フィリピン・電力", x: 340, y: 400 },
          { id: "nexbp",    label: "JERA Nex bp",          sub: "洋上風力", x: 590, y: 400 }
        ],
        edges: [
          { from: "tepco",   to: "tepcofp", pct: "100%", amount: null },
          { from: "tepcofp", to: "jera",    pct: "50%",  amount: null },
          { from: "chuden",  to: "jera",    pct: "50%",  amount: null },
          { from: "jera",    to: "freeport", pct: "21.9%", amount: null },
          { from: "jera",    to: "aboitiz",  pct: "27.6%", amount: null },
          { from: "jera",    to: "nexbp",    pct: "50%",   amount: null }
        ],
        note: "JERAの株式2,000万株を東京電力フュエル&パワーと中部電力が1,000万株ずつ保有（2026年3月末）。出資額は有価証券報告書に記載がなく未確認。"
      },
      /* 資本構成（2026年3月末、IFRS連結、億円）
         v  = 簿価（帳簿価額）
         fv = 時価。数字 / "approx"（簿価とほぼ同じ） / null（時価なし。fvNote に理由）
         上場企業なら、株式の fv に時価総額を入れれば時価の合計も出ます */
      capital: {
        asOf: "2026年3月末・IFRS連結",
        basisNote: "簿価は貸借対照表の帳簿価額。時価は有価証券報告書の公正価値の注記によります（開示は長期借入金と社債のみで、短期借入金とCPは簿価に近いとされています）。JERAは未上場のため、株式の時価は算出できません。",
        groups: [
          { id: "debt", name: "負債調達", items: [
            { name: "長期借入金", v: 19488, fv: 19189, note: "1年以内に返済予定の分を含む" },
            { name: "短期借入金", v: 910, fv: "approx" },
            { name: "普通社債", v: 6805, fv: null, fvNote: "社債全体で開示",
              note: "社債7,766億円から劣後社債960億円を除いた額。社債全体の時価は7,495億円" },
            { name: "コマーシャル・ペーパー", v: 200, fv: "approx" }
          ]},
          { id: "hybrid", name: "ハイブリッド証券", items: [
            { name: "永久劣後ローン（資本に計上）", v: 1994, fv: null, fvNote: "開示なし",
              note: "2023年3月に2,000億円調達。期限なし・利払い繰延可" },
            { name: "劣後社債（負債に計上）", v: 960, fv: null, fvNote: "社債全体で開示",
              note: "2022年12月発行の3本。満期2057〜62年" }
          ]},
          { id: "equity", name: "株式調達", items: [
            { name: "株主資本", v: 29621, fv: null, fvNote: "未上場",
              note: "親会社所有者帰属持分3兆1,615億円から永久劣後ローンを除いた額" },
            { name: "非支配持分", v: 1076, fv: null, fvNote: "未上場" }
          ]}
        ]
      }
    }
  }
};

/*
  企業ページ：RHAELM
  ・graph の矢印は「出資する側 → 出資される側」。amount が null なら「出資額 未確認」と表示
  ・noAmount: true の矢印は pct の文字だけ表示
*/
(window.SCM_PAGES = window.SCM_PAGES || {})["rhaelm"] = {
  "summary": "ロンドンに本社を置くAI向けクラウド・データセンターの事業会社（RHAELM Holdings Ltd.、旧社名 Sovereign AI）です。2026年10月1日、JERA・デル・テクノロジーズと、JERAの千葉火力発電所の隣に最大400MWのAIデータセンターをつくる覚書を結んだと発表されました。日本では同年9月29日に「Rhaelm Services Nippon株式会社」（東京都港区）の法人番号が指定されています。",
  "facts": [
    { "k": "正式社名", "v": "RHAELM Holdings Ltd.（旧 Sovereign AI）" },
    { "k": "本社", "v": "英国ロンドン（欧州とアジア太平洋で展開）" },
    { "k": "代表", "v": "Bradd Lewis（CEO 兼 Chief Revenue Officer）" },
    { "k": "日本の法人", "v": "Rhaelm Services Nippon株式会社（東京都港区芝、法人番号 9010401202375、2026年9月29日指定）" },
    { "k": "設立・出資者", "v": "未確認" },
    { "k": "日本の計画", "v": "千葉で最大400MW、全期で総投資150億米ドル超の見込み。2028年ごろの稼働開始が目標" }
  ],
  "recent": {
    "title": "JERA・デルとの覚書",
    "period": "2026年10月1日発表",
    "driversTitle": "役割分担",
    "drivers": [
      "JERA：発電所の電気と用地を出す。電気は送電網を通さず、発電所から直接受ける（behind-the-meter）",
      "デル：ラック単位のAI基盤（Dell AI Factory）",
      "RHAELM：事業の実施を主導（開発・建設・運営・資金調達を担うと報じられた）",
      "2030年代に国内で数GW規模を目指す"
    ],
    "downstreamTitle": "確認できていないこと",
    "downstream": [
      "RHAELMの設立年と出資者（親会社）",
      "Rhaelm Services NipponとRHAELM Holdingsの資本関係（社名からの推定で、開示では未確認）。日本法人の資本金・代表者",
      "公式サイト（rhaelm.com とする集計サイトがあるが、開いて確認できていない）",
      "業界全体で最大1,400億ドルの投資とする報道（FT）は、JERAが認めていない"
    ],
    "sources": [
      { "t": "JERA（英文）2026年10月1日", "url": "https://www.jera.co.jp/en/news/information/20261001_2535" },
      { "t": "クラウド Watch", "url": "https://cloud.watch.impress.co.jp/docs/news/2145005.html" }
    ]
  },
  "graph": {
    "nodes": [
      { "id": "apollo", "label": "Apollo", "sub": "米国の投資会社", "x": 340, "y": 40 },
      { "id": "rhaelm", "label": "RHAELM Holdings", "sub": "未上場・英国", "x": 340, "y": 170, "focus": true },
      { "id": "rhaelm-nippon", "label": "Rhaelm Services", "sub": "Nippon（日本）", "x": 340, "y": 300 }
    ],
    "edges": [
      { "from": "apollo", "to": "rhaelm", "pct": "出資の意向", "noAmount": true },
      { "from": "rhaelm", "to": "rhaelm-nippon", "pct": "比率 未確認", "noAmount": true }
    ],
    "note": "Apolloは、千葉の案件でRHAELMの戦略的な投資・資金調達パートナーになる「意向」と発表された段階で、出資は確定していない。Rhaelm Services Nipponは社名から日本の事業会社とみられるが、RHAELM Holdingsが出資しているかは開示で確認できていない。JERA・デルとは覚書の関係で、資本関係はない（確認できた範囲）。"
  },
  "research": [
    {
      "kind": "相手先（JERA）のプレスリリース",
      "what": "RHAELMの正式社名・本社・代表者、覚書の中身（千葉・最大400MW・総投資・役割分担）、Apolloの意向。未上場の外国企業でも、日本の大企業と組むと相手側の発表に会社の説明が載る。",
      "src": { "t": "JERA（英文）2026年10月1日", "url": "https://www.jera.co.jp/en/news/information/20261001_2535" }
    },
    {
      "kind": "報道",
      "what": "旧社名（Sovereign AI）、段階的な稼働の時期、JERAの国内の火力発電所を候補地として検討すること。",
      "src": { "t": "クラウド Watch", "url": "https://cloud.watch.impress.co.jp/docs/news/2145005.html" }
    },
    {
      "kind": "法人番号（集計サイト）",
      "what": "日本の法人「Rhaelm Services Nippon株式会社」の所在地（港区芝2-10-6）と法人番号の指定日（2026年9月29日、新規設立）。資本金・代表者・株主は載っていない。国税庁のサイトでの直接の確認はしていない。",
      "src": { "t": "カンパニーライフ（法人番号 9010401202375）", "url": "https://company-life.jp/company/9010401202375" }
    },
    {
      "kind": "法人番号（国税庁）",
      "what": "正式な社名と所在地を確かめる一次情報。今回は開けなかったので、次に確かめる先。",
      "src": { "t": "国税庁 法人番号公表サイト", "url": "https://www.houjin-bangou.nta.go.jp/" }
    },
    {
      "kind": "海外の報道",
      "what": "JERAが400MWの電力を15〜25年供給することなど、発表より踏み込んだ内容（と報じられた）。",
      "src": { "t": "KSL（2026年10月）", "url": "https://www.ksl.com/article/51630909/jera-teams-up-with-dell-rhaelm-on-ai-infrastructure-development-in-japan" }
    }
  ]
};

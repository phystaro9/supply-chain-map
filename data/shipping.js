/*
  海運の業界データ
  ------------------------------------------------------------
  ・stages = 段（上流から下流の順）
  ・companies = この業界に出てくる会社。会社名や公式サイトは companies.js に書く
      id    = companies.js の会社ID
      type  = "u"（この業界の中核企業）か "s"（関連企業）
      home  = 全体図でカードを置く段
      stages = { 段のID: "その段で何をしているか" }。2つ以上あると帯に出る
  ・showNumbers = 時価総額・売上高を表示するか
*/
(window.SCM_IND = window.SCM_IND || []).push({
  "id": "shipping",
  "name": "海運",
  "title": "海運サプライチェーン",
  "lede": "船をつくる会社から荷主まで、日本の海運の流れと代表企業。船を持つ会社と動かす会社が分かれているのがこの業界の特徴です。",
  "labels": {
    "u": "海運会社（船主・運航）",
    "s": "造船・港湾・物流など"
  },
  "endpoint": {
    "name": "荷主",
    "sub": "商社・資源会社・製鉄・自動車メーカーなど"
  },
  "meta": {
    "note": "数値は載せていません。業界構造の理解用です。",
    "updated": "2026-11-11"
  },
  "showNumbers": false,
  "stages": [
    {
      "id": "shipbuilding",
      "name": "造船・舶用機器",
      "sub": "新造船・エンジン",
      "role": "船体とエンジンをつくる段。日本は中国・韓国に次ぐ造船国で、ばら積み船など中型の商船に強みがあります。2026年1月に最大手の今治造船が2位のJMUを子会社化し、世界4位の造船グループになりました。"
    },
    {
      "id": "owner",
      "name": "船主",
      "sub": "船を保有して貸す",
      "role": "船を持ち、運航会社に貸し出して用船料を受け取る段。日本では愛媛県今治市の周辺に船主が集まり、「今治船主」「四国の船主」と呼ばれます。多くは未上場の家族経営で、地元の造船所に船を発注し、地方銀行の融資で資金を手当てします。"
    },
    {
      "id": "operator",
      "name": "運航（オペレーター）",
      "sub": "荷物を運ぶ",
      "role": "自社の船や借りた船で、荷主の貨物を運ぶ段。コンテナ船、鉄鉱石や石炭を運ぶばら積み船、原油タンカー、LNG船、自動車船などに分かれます。大手3社はコンテナ船事業をONEに統合し、自社ではそれ以外の船種を手がけています。"
    },
    {
      "id": "port",
      "name": "港湾・ターミナル",
      "sub": "積み下ろし・保管",
      "role": "港で貨物の積み下ろしや保管を行う段。港湾運送事業は国の許可制で、港湾運送会社や倉庫会社のほか、海運会社自身もコンテナターミナルを運営しています。"
    },
    {
      "id": "logistics",
      "name": "物流・フォワーダー",
      "sub": "輸送の手配",
      "role": "陸・海・空の輸送を組み合わせて、荷主の貨物を目的地まで届ける段。フォワーダーは自社で船を持たず、船会社のスペースを買って荷主に提供します。"
    }
  ],
  "support": [
    {
      "name": "東京海上日動火災保険",
      "role": "船体保険や貨物保険など、海上保険の国内最大手（東京海上ホールディングスの子会社）",
      "url": "https://www.tokiomarine-nichido.co.jp/"
    },
    {
      "name": "日本海事協会（ClassNK）",
      "role": "船が安全基準を満たしているかを検査・認証する船級協会。一般財団法人",
      "url": "https://www.classnk.or.jp/"
    },
    {
      "name": "日本船主責任相互保険組合（Japan P&I Club）",
      "role": "油の流出や積荷の損害など、船主の賠償責任を船主どうしで保険し合う組合",
      "url": "https://www.piclub.or.jp/"
    },
    {
      "name": "伊予銀行（いよぎんホールディングス）",
      "role": "今治に近い松山の地方銀行。造船・海運向け融資のノウハウを持つ",
      "url": "https://www.iyobank.co.jp/"
    }
  ],
  "companies": [
    {
      "id": "imabari",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "国内最大手。ばら積み船からコンテナ船まで幅広く建造。2026年1月にJMUを子会社化"
      }
    },
    {
      "id": "jmu",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "国内2位。大型のコンテナ船やタンカー、艦艇を建造"
      }
    },
    {
      "id": "tsuneishi",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "広島の大手。三井E&S造船の筆頭株主"
      }
    },
    {
      "id": "mhi",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "子会社の三菱造船がフェリーや特殊船を、本体が艦艇を建造"
      }
    },
    {
      "id": "khi",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "LNG運搬船、液化水素運搬船、潜水艦"
      }
    },
    {
      "id": "namura",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "ばら積み船が主力。函館どつく、佐世保重工業を傘下に持つ"
      }
    },
    {
      "id": "mes",
      "type": "s",
      "home": "shipbuilding",
      "stages": {
        "shipbuilding": "舶用エンジンの国内大手。2021年に新造船から撤退",
        "port": "港で使うコンテナクレーンを製造"
      }
    },
    {
      "id": "imabari-owners",
      "type": "u",
      "home": "owner",
      "stages": {
        "owner": "愛媛県今治市周辺の船主。未上場の家族経営が中心で、地元の造船所に発注し、地方銀行の融資で船を持つ"
      }
    },
    {
      "id": "meikai",
      "type": "u",
      "home": "owner",
      "stages": {
        "owner": "タンカー・自動車船・ばら積み船を保有し、運航会社に貸し出す"
      }
    },
    {
      "id": "nyk",
      "type": "u",
      "home": "operator",
      "stages": {
        "owner": "自社で多数の船を保有",
        "operator": "自動車船・LNG船・ばら積み船など。ONEに38%出資",
        "port": "国内外でコンテナターミナルを運営",
        "logistics": "子会社の郵船ロジスティクス"
      }
    },
    {
      "id": "mol",
      "type": "u",
      "home": "operator",
      "stages": {
        "owner": "自社で多数の船を保有",
        "operator": "LNG船・タンカー・自動車船など。ONEに31%出資",
        "port": "国内外でターミナルを運営",
        "logistics": "子会社の商船三井ロジスティクス"
      }
    },
    {
      "id": "kline",
      "type": "u",
      "home": "operator",
      "stages": {
        "owner": "自社で多数の船を保有",
        "operator": "自動車船・ばら積み船・LNG船など。ONEに31%出資",
        "port": "子会社がコンテナターミナルや港湾運送を運営",
        "logistics": "子会社のケイラインロジスティックス"
      }
    },
    {
      "id": "one",
      "type": "u",
      "home": "operator",
      "stages": {
        "operator": "大手3社のコンテナ船事業を統合した、世界大手のコンテナ船会社"
      }
    },
    {
      "id": "nsu",
      "type": "u",
      "home": "operator",
      "stages": {
        "operator": "鉄鉱石や石炭を運ぶばら積み船が主力。日本製鉄が筆頭株主"
      }
    },
    {
      "id": "iino",
      "type": "u",
      "home": "operator",
      "stages": {
        "owner": "ケミカル船・ガス船などを保有",
        "operator": "タンカー・ケミカル船・ばら積み船を運航"
      }
    },
    {
      "id": "kamigumi",
      "type": "s",
      "home": "port",
      "stages": {
        "port": "港湾運送の国内最大手",
        "logistics": "倉庫・陸送・国際物流"
      }
    },
    {
      "id": "sumisou",
      "type": "s",
      "home": "port",
      "stages": {
        "port": "港湾運送・コンテナターミナル",
        "logistics": "倉庫・国際物流"
      }
    },
    {
      "id": "mitsuisoko",
      "type": "s",
      "home": "port",
      "stages": {
        "port": "港湾運送",
        "logistics": "倉庫・物流の一括受託（3PL）"
      }
    },
    {
      "id": "nx",
      "type": "s",
      "home": "logistics",
      "stages": {
        "logistics": "国内最大の物流会社。海上・航空のフォワーディング",
        "port": "港湾運送も手がける"
      }
    },
    {
      "id": "kwe",
      "type": "s",
      "home": "logistics",
      "stages": {
        "logistics": "航空・海上フォワーダーの大手"
      }
    }
  ]
});

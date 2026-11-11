/*
  電力の業界データ
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
  "id": "power",
  "name": "電力",
  "title": "電力サプライチェーン",
  "lede": "燃料から需要家まで、日本の電力の流れと代表企業。",
  "labels": {
    "u": "電力会社",
    "s": "関連・供給企業"
  },
  "endpoint": {
    "name": "需要家",
    "sub": "家庭・工場・オフィス・データセンター"
  },
  "meta": {
    "capAsOf": "2026年10月30日（10月末）終値",
    "revAsOf": "2026年3月期",
    "updated": "2026-11-11"
  },
  "showNumbers": true,
  "stages": [
    {
      "id": "fuel",
      "name": "燃料・資源",
      "sub": "LNG・石油・石炭・ウラン",
      "role": "発電所で燃やす燃料を調達・開発する段階。日本はLNGと石炭の大半を輸入に頼り、上流権益を持つ開発会社や大手電力系の調達会社が担います。燃料価格は燃料費調整制度を通じて電気料金に反映されます。"
    },
    {
      "id": "equipment",
      "name": "発電設備",
      "sub": "タービン・原子炉・変電機器",
      "role": "発電所や変電所の大型機器をつくる重電メーカー。ガスタービン、原子炉、発電機、変圧器などを供給し、データセンター向けの電力需要増で受注が伸びています。"
    },
    {
      "id": "cables",
      "name": "送配電資材",
      "sub": "電線・ケーブル",
      "role": "送電線、地中・海底ケーブル、光ファイバーをつくる電線メーカー。送電網の更新や洋上風力、データセンター向けの需要で2025〜26年に株価が大きく上昇し、11月初旬に急落しました。"
    },
    {
      "id": "construction",
      "name": "電気工事",
      "sub": "設備・配電工事",
      "role": "送配電線の工事や、ビル・工場・データセンターの電気設備工事を担う会社。大手電力の系列が多く、旺盛な建設投資で最高益が続いています。"
    },
    {
      "id": "generation",
      "name": "発電",
      "sub": "大手電力・火力・再エネ",
      "role": "電気をつくる段階。火力の大部分は、東京電力と中部電力の合弁JERAに集約されています。原子力は大手電力の本体が持ち、再稼働の状況が各社の収益力を大きく左右します。卸電力会社（Jパワー）や再エネ専業の会社もここに入ります。"
    },
    {
      "id": "grid",
      "name": "送配電網",
      "sub": "一般送配電事業者",
      "role": "発電所から需要家まで電気を届ける送電線・配電線を運用する段階。発送電分離により大手電力の子会社として独立し、託送料金で収益を得る規制事業です。各社とも未上場の子会社です。"
    },
    {
      "id": "retail",
      "name": "小売",
      "sub": "家庭・法人への販売",
      "role": "電気を家庭や企業に売る段階。2016年の小売全面自由化で、誰でも参入できるようになりました。大手電力のうち、中部電力（中部電力ミライズ）と東京電力（東京電力エナジーパートナー）は小売を子会社に分けていて、ほかの大手電力は本体で売っています。"
    }
  ],
  "stageNotes": {
    "grid": "関西電力送配電、中部電力パワーグリッドなど他の送配電会社も、それぞれ大手電力の完全子会社です（帯の図で親会社側に表示）。",
    "retail": "ガス会社や通信会社などの新電力は、まだ収録していません。"
  },
  "companies": [
    {
      "id": "inpex",
      "type": "s",
      "home": "fuel",
      "stages": {
        "fuel": "国内最大の石油・天然ガス開発。豪イクシスLNGなど上流権益",
        "generation": "再エネ・ガス火力などの電力事業"
      }
    },
    {
      "id": "hitachi",
      "type": "s",
      "home": "equipment",
      "stages": {
        "equipment": "日立エナジーの送配電機器、原子力"
      }
    },
    {
      "id": "mhi",
      "type": "s",
      "home": "equipment",
      "stages": {
        "equipment": "大型ガスタービン（GTCC）と原子力プラントの国内最大手"
      }
    },
    {
      "id": "melco",
      "type": "s",
      "home": "equipment",
      "stages": {
        "equipment": "発電機、変電・受配電機器、パワー半導体"
      }
    },
    {
      "id": "toshiba",
      "type": "s",
      "home": "equipment",
      "stages": {
        "equipment": "原子力、火力・水力発電機器、送変電・配電機器",
        "construction": "子会社の東芝プラントシステムが発電設備工事"
      }
    },
    {
      "id": "jera",
      "type": "u",
      "home": "generation",
      "stages": {
        "fuel": "LNG調達は世界最大級。燃料の調達・トレーディング",
        "generation": "国内火力発電の約3割。電力の卸売"
      }
    },
    {
      "id": "kepco",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "原子力比率が高く、大手電力で収益力トップ",
        "grid": "子会社の関西電力送配電",
        "retail": "本体で関西の家庭・法人に販売"
      }
    },
    {
      "id": "chuden",
      "type": "u",
      "home": "retail",
      "stages": {
        "construction": "子会社のトーエネックが電気工事",
        "generation": "火力はJERA（50%出資）に移管し、持分法利益が業績に寄与。本体に浜岡原子力発電所",
        "grid": "子会社の中部電力パワーグリッド",
        "retail": "子会社の中部電力ミライズ（2020年4月の分社で発足）が家庭・法人に販売"
      }
    },
    {
      "id": "kyuden",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "九州電力の持株会社。原発稼働が安定",
        "grid": "子会社の九州電力送配電",
        "retail": "グループで九州の家庭・法人に販売"
      }
    },
    {
      "id": "tepco",
      "type": "u",
      "home": "retail",
      "stages": {
        "generation": "原子力（柏崎刈羽）は本体。火力はJERA（50%出資）に移管",
        "grid": "子会社の東京電力パワーグリッド",
        "retail": "子会社の東京電力エナジーパートナーが販売。国内最大の小売。福島第一の廃炉費用が重荷"
      }
    },
    {
      "id": "jpower",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "石炭火力と水力が中心の卸電力会社",
        "grid": "子会社のJパワー送変電が基幹送電線を保有"
      }
    },
    {
      "id": "tohoku",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "火力・原子力・水力を保有",
        "grid": "子会社の東北電力ネットワーク",
        "retail": "東北7県と新潟の家庭・法人に販売"
      }
    },
    {
      "id": "yonden",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "伊方原発を保有",
        "grid": "子会社の四国電力送配電",
        "retail": "四国の家庭・法人に販売"
      }
    },
    {
      "id": "energia",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "石炭火力の比率が高い",
        "grid": "子会社の中国電力ネットワーク",
        "retail": "中国地方の家庭・法人に販売"
      }
    },
    {
      "id": "hepco",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "火力・水力を中心に発電",
        "grid": "子会社の北海道電力ネットワーク",
        "retail": "北海道の家庭・法人に販売。半導体工場の進出で需要増に期待"
      }
    },
    {
      "id": "rikuden",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "水力の比率が高い",
        "grid": "子会社の北陸電力送配電",
        "retail": "北陸の家庭・法人に販売"
      }
    },
    {
      "id": "renova",
      "type": "u",
      "home": "generation",
      "stages": {
        "generation": "再生可能エネルギー専業の発電事業者"
      }
    },
    {
      "id": "tepcopg",
      "type": "u",
      "home": "grid",
      "stages": {
        "grid": "首都圏の送配電網を運用。国内最大の送配電会社"
      }
    },
    {
      "id": "fujikura",
      "type": "s",
      "home": "cables",
      "stages": {
        "cables": "データセンター向け光ファイバー・コネクタで急成長"
      }
    },
    {
      "id": "sei",
      "type": "s",
      "home": "cables",
      "stages": {
        "cables": "電線最大手。超高圧・海底ケーブルに強い",
        "construction": "子会社の住友電設が電気工事"
      }
    },
    {
      "id": "furukawa",
      "type": "s",
      "home": "cables",
      "stages": {
        "cables": "光ファイバーで世界大手。電力ケーブルも"
      }
    },
    {
      "id": "kinden",
      "type": "s",
      "home": "construction",
      "stages": {
        "construction": "関西電力系。筆頭株主は関西電力（約29%）"
      }
    },
    {
      "id": "kandenko",
      "type": "s",
      "home": "construction",
      "stages": {
        "construction": "東京電力系の電気工事大手。東電向けが約3割",
        "generation": "太陽光・水力の発電事業"
      }
    }
  ]
});

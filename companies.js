/*
  会社の共通情報（全業界で1社1件）
  ------------------------------------------------------------
  ・name / short（帯の列見出し用の短い名前） / url（公式サイト）
  ・listed: false は未上場（書かなければ上場扱い）
  ・cap = 時価総額（億円）、capDate = 月末の値が取れず別の日の値を使ったときの日付、rev = 売上高（億円、未上場向け）
    ※数値は、業界ファイルで showNumbers: true の業界でだけ表示されます
  ・note = どの業界でも表示する補足
  ・page: true = 企業ページあり（pages/<id>.js が必要）
  ・otherSectors = まだページのない他業種（「準備中」として表示）。
    ページのある業界どうしのリンクは、各業界ファイルに同じ会社がいれば自動で付きます
*/
window.SCM_COMPANIES = {
  "inpex": {
    "name": "INPEX",
    "short": "INPEX",
    "url": "https://www.inpex.com/",
    "cap": 51183,
    "otherSectors": [
      {
        "name": "鉱業（石油・ガス開発）",
        "href": null
      }
    ]
  },
  "hitachi": {
    "name": "日立製作所",
    "short": "日立",
    "url": "https://www.hitachi.co.jp/",
    "cap": 235496,
    "otherSectors": [
      {
        "name": "IT・デジタル",
        "href": null
      },
      {
        "name": "鉄道",
        "href": null
      }
    ]
  },
  "mhi": {
    "name": "三菱重工業",
    "short": "三菱重工",
    "url": "https://www.mhi.com/jp/",
    "cap": 115143,
    "otherSectors": [
      {
        "name": "防衛・宇宙",
        "href": null
      },
      {
        "name": "航空機",
        "href": null
      }
    ]
  },
  "melco": {
    "name": "三菱電機",
    "short": "三菱電機",
    "url": "https://www.mitsubishielectric.co.jp/",
    "cap": 98053,
    "otherSectors": [
      {
        "name": "FA・産業機器",
        "href": null
      },
      {
        "name": "家電・空調",
        "href": null
      }
    ]
  },
  "toshiba": {
    "page": true,
    "name": "東芝",
    "short": "東芝",
    "listed": false,
    "url": "https://www.global.toshiba/jp/",
    "rev": 37091,
    "note": "2023年に上場廃止。",
    "otherSectors": [
      {
        "name": "HDD・電子デバイス",
        "href": null
      }
    ]
  },
  "jera": {
    "name": "JERA",
    "short": "JERA",
    "listed": false,
    "url": "https://www.jera.co.jp/",
    "rev": 30500,
    "note": "東京電力と中部電力が50%ずつ出資。家庭向け小売と送配電網は持たない。",
    "page": true,
    "otherSectors": [
      {
        "name": "海外発電・再エネ投資",
        "href": null
      }
    ]
  },
  "kepco": {
    "name": "関西電力",
    "short": "関西電",
    "url": "https://www.kepco.co.jp/",
    "cap": 29150,
    "otherSectors": [
      {
        "name": "不動産",
        "href": null
      },
      {
        "name": "通信",
        "href": null
      }
    ]
  },
  "chuden": {
    "name": "中部電力",
    "short": "中部電",
    "url": "https://www.chuden.co.jp/",
    "cap": 18965
  },
  "kyuden": {
    "name": "キューデンHD",
    "short": "九電HD",
    "url": "https://www.kyuden.co.jp/",
    "cap": 9347,
    "note": "10月末の値は月次データの終値。"
  },
  "tepco": {
    "name": "東京電力HD",
    "short": "東電HD",
    "url": "https://www.tepco.co.jp/",
    "cap": 7402
  },
  "jpower": {
    "name": "Jパワー（電源開発）",
    "short": "Jパワー",
    "url": "https://www.jpower.co.jp/",
    "cap": 7186
  },
  "tohoku": {
    "name": "東北電力",
    "short": "東北電",
    "url": "https://www.tohoku-epco.co.jp/",
    "cap": 6480
  },
  "yonden": {
    "name": "四国電力",
    "short": "四国電",
    "url": "https://www.yonden.co.jp/",
    "cap": 4481,
    "capDate": "10/9"
  },
  "energia": {
    "name": "中国電力",
    "short": "中国電",
    "url": "https://www.energia.co.jp/",
    "cap": 3849
  },
  "hepco": {
    "name": "北海道電力",
    "short": "北海電",
    "url": "https://www.hepco.co.jp/",
    "cap": 2323
  },
  "rikuden": {
    "name": "北陸電力",
    "short": "北陸電",
    "url": "https://www.rikuden.co.jp/",
    "cap": 2270
  },
  "renova": {
    "name": "レノバ",
    "short": "レノバ",
    "url": "https://www.renovainc.com/",
    "cap": 658
  },
  "tepco-ep": {
    "page": true,
    "name": "東京電力エナジーパートナー",
    "short": "東電EP",
    "listed": false,
    "url": "https://www.tepco.co.jp/ep/",
    "note": "東京電力HDの100%子会社（小売）。"
  },
  "chuden-miraiz": {
    "page": true,
    "name": "中部電力ミライズ",
    "short": "中電ミライズ",
    "listed": false,
    "url": "https://miraiz.chuden.co.jp/",
    "note": "中部電力の100%子会社（小売）。2020年4月発足。"
  },
  "tepcopg": {
    "page": true,
    "name": "東京電力パワーグリッド",
    "short": "東電PG",
    "listed": false,
    "url": "https://www.tepco.co.jp/pg/",
    "rev": 22944,
    "note": "東京電力HDの100%子会社。"
  },
  "fujikura": {
    "name": "フジクラ",
    "short": "フジクラ",
    "url": "https://www.fujikura.co.jp/",
    "cap": 69552,
    "otherSectors": [
      {
        "name": "電子部品",
        "href": null
      }
    ]
  },
  "sei": {
    "name": "住友電気工業",
    "short": "住友電工",
    "url": "https://sei.co.jp/",
    "cap": 56211,
    "otherSectors": [
      {
        "name": "自動車部品（ワイヤーハーネス）",
        "href": null
      }
    ]
  },
  "furukawa": {
    "name": "古河電気工業",
    "short": "古河電工",
    "url": "https://www.furukawa.co.jp/",
    "cap": 15147,
    "capDate": "11/5",
    "otherSectors": [
      {
        "name": "自動車部品",
        "href": null
      }
    ]
  },
  "kinden": {
    "name": "きんでん",
    "short": "きんでん",
    "url": "https://www.kinden.co.jp/",
    "cap": 9811
  },
  "kandenko": {
    "name": "関電工",
    "short": "関電工",
    "url": "https://www.kandenko.co.jp/",
    "cap": 9439
  },
  "imabari": {
    "name": "今治造船",
    "short": "今治造船",
    "listed": false,
    "url": "https://www.imazo.co.jp/",
    "note": "創業家の檜垣家が経営する非上場企業。2026年1月にJMUを子会社化。",
    "page": true
  },
  "jmu": {
    "name": "ジャパンマリンユナイテッド（JMU）",
    "short": "JMU",
    "listed": false,
    "url": "https://www.jmuc.co.jp/",
    "note": "今治造船60%、JFEホールディングスとIHIが20%ずつ出資。",
    "page": true,
    "otherSectors": [
      {
        "name": "防衛（艦艇）",
        "href": null
      }
    ]
  },
  "tsuneishi": {
    "page": true,
    "name": "常石造船",
    "short": "常石造船",
    "listed": false,
    "url": "https://www.tsuneishi.co.jp/"
  },
  "khi": {
    "name": "川崎重工業",
    "short": "川崎重工",
    "url": "https://www.khi.co.jp/",
    "otherSectors": [
      {
        "name": "航空機・鉄道車両",
        "href": null
      },
      {
        "name": "二輪車",
        "href": null
      }
    ]
  },
  "namura": {
    "name": "名村造船所",
    "short": "名村造船",
    "url": "https://www.namura.co.jp/"
  },
  "mes": {
    "name": "三井E&S",
    "short": "三井E&S",
    "url": "https://www.mes.co.jp/"
  },
  "imabari-owners": {
    "name": "今治の船主（オーナー）群",
    "short": "今治船主",
    "listed": false
  },
  "meikai": {
    "name": "明海グループ（旧明治海運）",
    "short": "明海G",
    "note": "2023年に社名を変更。",
    "otherSectors": [
      {
        "name": "ホテル",
        "href": null
      },
      {
        "name": "不動産",
        "href": null
      }
    ]
  },
  "nyk": {
    "name": "日本郵船",
    "short": "郵船",
    "url": "https://www.nyk.com/"
  },
  "mol": {
    "name": "商船三井",
    "short": "商船三井",
    "url": "https://www.mol.co.jp/",
    "otherSectors": [
      {
        "name": "不動産",
        "href": null
      },
      {
        "name": "フェリー",
        "href": null
      }
    ]
  },
  "kline": {
    "name": "川崎汽船",
    "short": "川崎汽船",
    "url": "https://www.kline.co.jp/"
  },
  "one": {
    "name": "ONE（Ocean Network Express）",
    "short": "ONE",
    "listed": false,
    "url": "https://www.one-line.com/",
    "note": "日本郵船38%、商船三井と川崎汽船が31%ずつ出資。",
    "page": true
  },
  "nsu": {
    "name": "NSユナイテッド海運",
    "short": "NSU",
    "url": "https://www.nsuship.co.jp/",
    "note": "日本郵船がTOBで83%を取得する計画（2026年7月発表、TOBは11〜12月に開始予定）。成立すれば上場廃止。"
  },
  "iino": {
    "name": "飯野海運",
    "short": "飯野海運",
    "url": "https://www.iino.co.jp/",
    "otherSectors": [
      {
        "name": "不動産（飯野ビル）",
        "href": null
      }
    ]
  },
  "kamigumi": {
    "name": "上組",
    "short": "上組",
    "url": "https://www.kamigumi.co.jp/"
  },
  "sumisou": {
    "name": "住友倉庫",
    "short": "住友倉庫",
    "url": "https://www.sumitomo-soko.co.jp/",
    "otherSectors": [
      {
        "name": "不動産",
        "href": null
      }
    ]
  },
  "mitsuisoko": {
    "name": "三井倉庫ホールディングス",
    "short": "三井倉庫",
    "url": "https://www.mitsui-soko.com/"
  },
  "nx": {
    "name": "NIPPON EXPRESSホールディングス",
    "short": "NXHD",
    "url": "https://www.nipponexpress-holdings.com/"
  },
  "kwe": {
    "name": "近鉄エクスプレス",
    "short": "近鉄エクス",
    "listed": false,
    "url": "https://www.kwe.co.jp/",
    "note": "2022年に近鉄グループホールディングスの完全子会社となり上場廃止。"
  },
  "nttdata": {
    "name": "NTTデータグループ",
    "short": "NTTデータ",
    "listed": false,
    "url": "https://www.nttdata.com/",
    "note": "2025年9月30日にNTTの完全子会社となり、同年9月26日に上場廃止。データセンター事業は子会社のNTT GDCが担う。",
    "otherSectors": [
      { "name": "通信・IT", "href": null }
    ]
  },
  "kddi": {
    "name": "KDDI",
    "short": "KDDI",
    "url": "https://www.kddi.com/",
    "otherSectors": [
      { "name": "通信キャリア", "href": null }
    ]
  },
  "softbank": {
    "name": "ソフトバンク",
    "short": "ソフトバンク",
    "url": "https://www.softbank.jp/corp/",
    "otherSectors": [
      { "name": "通信キャリア", "href": null }
    ]
  },
  "sakura": {
    "name": "さくらインターネット",
    "short": "さくら",
    "url": "https://www.sakura.ad.jp/"
  },
  "equinix": {
    "name": "エクイニクス・ジャパン",
    "short": "エクイニクス",
    "url": "https://www.equinix.co.jp/",
    "note": "米エクイニクスの日本法人。親会社は米国で上場。"
  },
  "mcdr": {
    "name": "MCデジタル・リアルティ",
    "short": "MC DR",
    "listed": false,
    "url": "https://www.mc-digitalrealty.com/",
    "note": "米デジタル・リアルティと三菱商事の合弁会社。"
  },
  "rhaelm": {
    "name": "RHAELM",
    "short": "RHAELM",
    "listed": false,
    "note": "2026年10月、JERA・デルとのAI向けデータセンター計画の覚書に参加。公式サイトは未確認。"
  },
  "dell": {
    "name": "デル・テクノロジーズ",
    "short": "デル",
    "url": "https://www.dell.com/ja-jp",
    "note": "米デル・テクノロジーズの日本法人。親会社は米国で上場。"
  },
  "aws": {
    "name": "アマゾン ウェブ サービス（AWS）",
    "short": "AWS",
    "url": "https://aws.amazon.com/jp/",
    "note": "米アマゾンのクラウド事業。親会社は米国で上場。"
  },
  "microsoft": {
    "name": "マイクロソフト",
    "short": "MS",
    "url": "https://www.microsoft.com/ja-jp",
    "note": "日本法人は日本マイクロソフト。親会社は米国で上場。"
  },
  "google": {
    "name": "グーグル（Google Cloud）",
    "short": "Google",
    "url": "https://cloud.google.com/",
    "note": "親会社は米国で上場。"
  },
  "oracle": {
    "name": "オラクル",
    "short": "オラクル",
    "url": "https://www.oracle.com/jp/",
    "note": "日本法人は日本オラクル。親会社は米国で上場。"
  },
  "fujitsu": {
    "name": "富士通",
    "short": "富士通",
    "url": "https://global.fujitsu/ja-jp"
  },
  "nec": {
    "name": "NEC",
    "short": "NEC",
    "url": "https://jpn.nec.com/"
  },
  "fujielectric": {
    "name": "富士電機",
    "short": "富士電機",
    "url": "https://www.fujielectric.co.jp/"
  },
  "daikin": {
    "name": "ダイキン工業",
    "short": "ダイキン",
    "url": "https://www.daikin.co.jp/"
  },
  "takasago": {
    "name": "高砂熱学工業",
    "short": "高砂熱学",
    "url": "https://www.tte-net.com/"
  },
  "daiwahouse": {
    "name": "大和ハウス工業",
    "short": "大和ハウス",
    "url": "https://www.daiwahouse.co.jp/",
    "otherSectors": [
      { "name": "住宅・不動産", "href": null }
    ]
  },
  "taisei": {
    "name": "大成建設",
    "short": "大成",
    "url": "https://www.taisei.co.jp/",
    "otherSectors": [
      { "name": "建設（ゼネコン）", "href": null }
    ]
  },
  "kajima": {
    "name": "鹿島建設",
    "short": "鹿島",
    "url": "https://www.kajima.co.jp/",
    "otherSectors": [
      { "name": "建設（ゼネコン）", "href": null }
    ]
  },
  "obayashi": {
    "name": "大林組",
    "short": "大林",
    "url": "https://www.obayashi.co.jp/",
    "otherSectors": [
      { "name": "建設（ゼネコン）", "href": null }
    ]
  },
  "shimizu": {
    "name": "清水建設",
    "short": "清水",
    "url": "https://www.shimz.co.jp/",
    "otherSectors": [
      { "name": "建設（ゼネコン）", "href": null }
    ]
  }
};

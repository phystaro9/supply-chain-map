/*
  領域と業界の一覧（トップでの並び順）

  領域（SCM_AREAS）… 大きな棚。業界はどれか1つの領域に入る
    planned … まだ作っていない業界の名前（トップに「準備中」として出る）
  業界（SCM_INDEX）… 1つの業界 = 上流から下流まで、モノかサービスが1本の流れでつながるもの
    area … 属する領域のID。desc はトップのカードの説明

  業界を足すときは data/<id>.js を作って、SCM_INDEX に1件足す。
  作った業界が planned に残っていたら、そこから消す。
*/
window.SCM_AREAS = [
  { "id": "energy",    "name": "エネルギー",         "planned": ["都市ガス", "石油", "再生可能エネルギー"] },
  { "id": "logistics", "name": "運輸・物流",         "planned": ["空運", "鉄道", "陸運・宅配", "港湾・倉庫"] },
  { "id": "materials", "name": "素材・化学",         "planned": ["鉄鋼", "化学", "非鉄金属", "紙・パルプ"] },
  { "id": "machinery", "name": "機械・重工",         "planned": ["重工・防衛", "建設機械", "工作機械・ロボット"] },
  { "id": "mobility",  "name": "自動車・モビリティ", "planned": ["自動車", "自動車部品", "二輪"] },
  { "id": "electro",   "name": "電機・半導体",       "planned": ["半導体", "電子部品", "データセンター"] },
  { "id": "ict",       "name": "通信・IT",           "planned": ["通信キャリア", "クラウド・ソフトウェア"] },
  { "id": "trading",   "name": "商社",               "planned": ["総合商社", "専門商社"] },
  { "id": "living",    "name": "生活・ヘルスケア",   "planned": ["食品・飲料", "小売", "医薬", "医療機器"] },
  { "id": "finance",   "name": "金融",               "planned": ["銀行", "保険", "証券"] },
  { "id": "property",  "name": "不動産・建設",       "planned": ["不動産", "ゼネコン", "住宅"] }
];

window.SCM_INDEX = [
  {
    "id": "power",
    "name": "電力",
    "area": "energy",
    "file": "data/power.js",
    "desc": "燃料から需要家まで。大手電力、JERA、重電、電線、電気工事"
  },
  {
    "id": "shipping",
    "name": "海運",
    "area": "logistics",
    "file": "data/shipping.js",
    "desc": "造船から荷主まで。船を持つ会社と動かす会社が分かれている業界"
  }
];

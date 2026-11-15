/* 自動生成ファイル（node tools/build.js が作る）。手で書き換えない */
window.SCM_XREF = {
 "stages": {
  "power": {
   "fuel": "燃料・資源",
   "equipment": "発電設備",
   "cables": "送配電資材",
   "construction": "電気工事",
   "generation": "発電",
   "grid": "送配電網",
   "retail": "小売"
  },
  "oil": {
   "upstream": "資源開発・調達",
   "transport": "輸送・備蓄",
   "refining": "精製・元売り",
   "petrochem": "石油化学",
   "distribution": "流通・販売"
  },
  "shipping": {
   "shipbuilding": "造船・舶用機器",
   "owner": "船主",
   "operator": "運航（オペレーター）",
   "port": "港湾・ターミナル",
   "logistics": "物流・フォワーダー"
  },
  "datacenter": {
   "power": "用地・電力",
   "build": "建設・設備工事",
   "equip": "設備・機器",
   "operator": "データセンター事業者",
   "cloud": "クラウド・AI基盤"
  }
 },
 "companies": {
  "inpex": [
   {
    "ind": "power",
    "home": "fuel",
    "stages": [
     "fuel",
     "generation"
    ]
   },
   {
    "ind": "oil",
    "home": "upstream",
    "stages": [
     "upstream",
     "transport",
     "distribution"
    ]
   }
  ],
  "hitachi": [
   {
    "ind": "power",
    "home": "equipment",
    "stages": [
     "equipment"
    ]
   },
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "mhi": [
   {
    "ind": "power",
    "home": "equipment",
    "stages": [
     "equipment"
    ]
   },
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   },
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "melco": [
   {
    "ind": "power",
    "home": "equipment",
    "stages": [
     "equipment"
    ]
   },
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "toshiba": [
   {
    "ind": "power",
    "home": "equipment",
    "stages": [
     "equipment",
     "construction"
    ]
   }
  ],
  "jera": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "fuel",
     "generation"
    ]
   },
   {
    "ind": "datacenter",
    "home": "power",
    "stages": [
     "power"
    ]
   }
  ],
  "kepco": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "chuden": [
   {
    "ind": "power",
    "home": "retail",
    "stages": [
     "construction",
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "kyuden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "tepco": [
   {
    "ind": "power",
    "home": "retail",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "jpower": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "tohoku": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "yonden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "energia": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "hepco": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   },
   {
    "ind": "datacenter",
    "home": "power",
    "stages": [
     "power"
    ]
   }
  ],
  "rikuden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "retail"
    ]
   }
  ],
  "renova": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation"
    ]
   }
  ],
  "tepcopg": [
   {
    "ind": "power",
    "home": "grid",
    "stages": [
     "grid"
    ]
   },
   {
    "ind": "datacenter",
    "home": "power",
    "stages": [
     "power"
    ]
   }
  ],
  "fujikura": [
   {
    "ind": "power",
    "home": "cables",
    "stages": [
     "cables"
    ]
   },
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "sei": [
   {
    "ind": "power",
    "home": "cables",
    "stages": [
     "cables",
     "construction"
    ]
   }
  ],
  "furukawa": [
   {
    "ind": "power",
    "home": "cables",
    "stages": [
     "cables"
    ]
   }
  ],
  "kinden": [
   {
    "ind": "power",
    "home": "construction",
    "stages": [
     "construction"
    ]
   },
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "kandenko": [
   {
    "ind": "power",
    "home": "construction",
    "stages": [
     "construction",
     "generation"
    ]
   },
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "tepco-ep": [
   {
    "ind": "power",
    "home": "retail",
    "stages": [
     "retail"
    ]
   }
  ],
  "chuden-miraiz": [
   {
    "ind": "power",
    "home": "retail",
    "stages": [
     "retail"
    ]
   }
  ],
  "jogmec": [
   {
    "ind": "oil",
    "home": "transport",
    "stages": [
     "transport"
    ]
   }
  ],
  "nyk": [
   {
    "ind": "oil",
    "home": "transport",
    "stages": [
     "transport"
    ]
   },
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "owner",
     "operator",
     "port",
     "logistics"
    ]
   }
  ],
  "mol": [
   {
    "ind": "oil",
    "home": "transport",
    "stages": [
     "transport"
    ]
   },
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "owner",
     "operator",
     "port",
     "logistics"
    ]
   }
  ],
  "kashima-oil": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "transport",
     "refining"
    ]
   }
  ],
  "eneos": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "idemitsu": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining",
     "petrochem"
    ]
   }
  ],
  "cosmo": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining",
     "distribution"
    ]
   }
  ],
  "taiyo-oil": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "fuji-oil": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "toa-oil": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "showa-yokkaichi": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "seibu-oil": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "kygnus": [
   {
    "ind": "oil",
    "home": "refining",
    "stages": [
     "refining"
    ]
   }
  ],
  "mitsui-chem": [
   {
    "ind": "oil",
    "home": "petrochem",
    "stages": [
     "petrochem"
    ]
   }
  ],
  "maruzen-pc": [
   {
    "ind": "oil",
    "home": "petrochem",
    "stages": [
     "petrochem"
    ]
   }
  ],
  "keiyo-ethylene": [
   {
    "ind": "oil",
    "home": "petrochem",
    "stages": [
     "petrochem"
    ]
   }
  ],
  "amec": [
   {
    "ind": "oil",
    "home": "petrochem",
    "stages": [
     "petrochem"
    ]
   }
  ],
  "cosmo-marketing": [
   {
    "ind": "oil",
    "home": "distribution",
    "stages": [
     "distribution"
    ]
   }
  ],
  "imabari": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   }
  ],
  "jmu": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   }
  ],
  "tsuneishi": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   }
  ],
  "khi": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   }
  ],
  "namura": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding"
    ]
   }
  ],
  "mes": [
   {
    "ind": "shipping",
    "home": "shipbuilding",
    "stages": [
     "shipbuilding",
     "port"
    ]
   }
  ],
  "imabari-owners": [
   {
    "ind": "shipping",
    "home": "owner",
    "stages": [
     "owner"
    ]
   }
  ],
  "meikai": [
   {
    "ind": "shipping",
    "home": "owner",
    "stages": [
     "owner"
    ]
   }
  ],
  "kline": [
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "owner",
     "operator",
     "port",
     "logistics"
    ]
   }
  ],
  "one": [
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "nsu": [
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "iino": [
   {
    "ind": "shipping",
    "home": "operator",
    "stages": [
     "owner",
     "operator"
    ]
   }
  ],
  "kamigumi": [
   {
    "ind": "shipping",
    "home": "port",
    "stages": [
     "port",
     "logistics"
    ]
   }
  ],
  "sumisou": [
   {
    "ind": "shipping",
    "home": "port",
    "stages": [
     "port",
     "logistics"
    ]
   }
  ],
  "mitsuisoko": [
   {
    "ind": "shipping",
    "home": "port",
    "stages": [
     "port",
     "logistics"
    ]
   }
  ],
  "nx": [
   {
    "ind": "shipping",
    "home": "logistics",
    "stages": [
     "port",
     "logistics"
    ]
   }
  ],
  "kwe": [
   {
    "ind": "shipping",
    "home": "logistics",
    "stages": [
     "logistics"
    ]
   }
  ],
  "daiwahouse": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "taisei": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "kajima": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "obayashi": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "shimizu": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "takasago": [
   {
    "ind": "datacenter",
    "home": "build",
    "stages": [
     "build"
    ]
   }
  ],
  "fujielectric": [
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "daikin": [
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "fujitsu": [
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "nec": [
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "dell": [
   {
    "ind": "datacenter",
    "home": "equip",
    "stages": [
     "equip"
    ]
   }
  ],
  "nttdata": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ],
  "kddi": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "softbank": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "equinix": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "mcdr": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "rhaelm": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator"
    ]
   }
  ],
  "sakura": [
   {
    "ind": "datacenter",
    "home": "operator",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ],
  "aws": [
   {
    "ind": "datacenter",
    "home": "cloud",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ],
  "microsoft": [
   {
    "ind": "datacenter",
    "home": "cloud",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ],
  "google": [
   {
    "ind": "datacenter",
    "home": "cloud",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ],
  "oracle": [
   {
    "ind": "datacenter",
    "home": "cloud",
    "stages": [
     "operator",
     "cloud"
    ]
   }
  ]
 },
 "counts": {
  "power": {
   "stages": 7,
   "companies": 25
  },
  "oil": {
   "stages": 5,
   "companies": 19
  },
  "shipping": {
   "stages": 5,
   "companies": 20
  },
  "datacenter": {
   "stages": 5,
   "companies": 31
  }
 }
};

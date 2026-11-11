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
  "nyk": [
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
   "companies": 23
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

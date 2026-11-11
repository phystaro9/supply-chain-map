/* 自動生成ファイル（node tools/build.js が作る）。手で書き換えない */
window.SCM_XREF = {
 "stages": {
  "power": {
   "fuel": "燃料・資源",
   "equipment": "発電設備",
   "generation": "発電・小売",
   "grid": "送配電網",
   "cables": "送配電資材",
   "construction": "電気工事"
  },
  "shipping": {
   "shipbuilding": "造船・舶用機器",
   "owner": "船主",
   "operator": "運航（オペレーター）",
   "port": "港湾・ターミナル",
   "logistics": "物流・フォワーダー"
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
   }
  ],
  "melco": [
   {
    "ind": "power",
    "home": "equipment",
    "stages": [
     "equipment"
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
   }
  ],
  "kepco": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "chuden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid",
     "construction"
    ]
   }
  ],
  "kyuden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "tepco": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
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
     "grid"
    ]
   }
  ],
  "yonden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "energia": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "hepco": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
    ]
   }
  ],
  "rikuden": [
   {
    "ind": "power",
    "home": "generation",
    "stages": [
     "generation",
     "grid"
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
   }
  ],
  "fujikura": [
   {
    "ind": "power",
    "home": "cables",
    "stages": [
     "cables"
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
   }
  ],
  "kandenko": [
   {
    "ind": "power",
    "home": "construction",
    "stages": [
     "generation",
     "construction"
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
  ]
 },
 "counts": {
  "power": {
   "stages": 6,
   "companies": 23
  },
  "shipping": {
   "stages": 5,
   "companies": 20
  }
 }
};

/*
  企業ページ：ONE（Ocean Network Express）
  ・graph の矢印は「出資する側 → 出資される側」。amount が null なら「出資額 未確認」と表示
  ・noAmount: true の矢印は pct の文字だけ表示
*/
(window.SCM_PAGES = window.SCM_PAGES || {})["one"] = {
  "summary": "日本郵船・商船三井・川崎汽船の3社が、それぞれのコンテナ船事業を統合して2017年に設立し、2018年4月に営業を始めた会社。持株会社は東京、運航会社はシンガポールにあります。3社はONEの利益を持分に応じて取り込んでいます。",
  "facts": [
    {
      "k": "設立",
      "v": "2017年（営業開始は2018年4月）"
    },
    {
      "k": "持株会社",
      "v": "Ocean Network Express Holdings（東京）"
    },
    {
      "k": "運航会社",
      "v": "Ocean Network Express Pte. Ltd.（シンガポール）"
    },
    {
      "k": "持株会社の資本金",
      "v": "5,000万円"
    }
  ],
  "graph": {
    "nodes": [
      {
        "id": "nyk",
        "label": "日本郵船",
        "sub": "上場",
        "link": "nyk",
        "x": 90,
        "y": 40
      },
      {
        "id": "kline",
        "label": "川崎汽船",
        "sub": "上場",
        "link": "kline",
        "x": 340,
        "y": 40
      },
      {
        "id": "mol",
        "label": "商船三井",
        "sub": "上場",
        "link": "mol",
        "x": 590,
        "y": 40
      },
      {
        "id": "onehd",
        "label": "ONE Holdings",
        "sub": "未上場・東京",
        "x": 340,
        "y": 170,
        "focus": true
      },
      {
        "id": "onepte",
        "label": "ONE Pte. Ltd.",
        "sub": "未上場・シンガポール",
        "x": 340,
        "y": 290
      }
    ],
    "edges": [
      {
        "from": "nyk",
        "to": "onehd",
        "pct": "38%",
        "amount": null
      },
      {
        "from": "kline",
        "to": "onehd",
        "pct": "31%",
        "amount": null
      },
      {
        "from": "mol",
        "to": "onehd",
        "pct": "31%",
        "amount": null
      },
      {
        "from": "onehd",
        "to": "onepte",
        "pct": "比率 未確認",
        "noAmount": true
      }
    ],
    "note": "出資比率は持株会社の公表値。出資額は未確認。持株会社と運航会社の間の持ち株比率も未確認。"
  }
};

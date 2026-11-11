/*
  企業ページ：ジャパンマリンユナイテッド（JMU）
  ・graph の矢印は「出資する側 → 出資される側」。amount が null なら「出資額 未確認」と表示
  ・noAmount: true の矢印は pct の文字だけ表示
*/
(window.SCM_PAGES = window.SCM_PAGES || {})["jmu"] = {
  "summary": "2013年にユニバーサル造船とIHIマリンユナイテッドが統合してできた造船会社。2026年1月に今治造船が株式を60%まで買い増して子会社化し、国内1位と2位が一つのグループになりました。",
  "facts": [
    {
      "k": "発足",
      "v": "2013年"
    },
    {
      "k": "親会社",
      "v": "今治造船（60%）"
    },
    {
      "k": "子会社化",
      "v": "2026年1月5日"
    }
  ],
  "graph": {
    "nodes": [
      {
        "id": "imabari",
        "label": "今治造船",
        "sub": "未上場",
        "link": "imabari",
        "x": 90,
        "y": 40
      },
      {
        "id": "jfe",
        "label": "JFEホールディングス",
        "sub": "上場",
        "x": 340,
        "y": 40
      },
      {
        "id": "ihi",
        "label": "IHI",
        "sub": "上場",
        "x": 590,
        "y": 40
      },
      {
        "id": "jmu",
        "label": "JMU",
        "sub": "未上場",
        "x": 340,
        "y": 170,
        "focus": true
      }
    ],
    "edges": [
      {
        "from": "imabari",
        "to": "jmu",
        "pct": "60%",
        "amount": null
      },
      {
        "from": "jfe",
        "to": "jmu",
        "pct": "20%",
        "amount": null
      },
      {
        "from": "ihi",
        "to": "jmu",
        "pct": "20%",
        "amount": null
      }
    ],
    "note": "2025年6月に合意し、2026年1月5日に子会社化。取得前は今治造船30%、JFEとIHIが35%ずつ。出資額は未確認。"
  }
};

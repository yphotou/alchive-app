// gin_db.js
// Alchive Gin App 用 ジンマスタDB
// ここに銘柄をどんどん追加していく

const GIN_DB = {
  // ボンベイ・サファイア
  "4901411049895": {
    id: "4901411049895",
    barcode: "4901411049895",
    type: "gin",

    name_jp: "ボンベイ・サファイア",
    name_en: "Bombay Sapphire",
    brand: "Bombay",
    country: "イギリス",
    region: "ロンドン",

    abv: 47,
    volume_ml: 700,

    // ショート説明（一覧や上部に表示用）
    description_short: "クリアで洗練された味わい。",

    // くわしい説明（今は1行でもOK）
    description:
      "クリアで洗練された味わい。柑橘とジュニパーのバランスが良く、カクテルベースとしても定番の1本。",

    // ジン固有情報
    gin_base: "グレーンスピリッツ",
    gin_style: "ロンドンドライ",
    botanicals: ["ジュニパー", "レモンピール", "アンジェリカルート"],
    distillation_method: "連続蒸留＋再蒸留",

    // 味チャート（0〜5）
    flavor: {
      sweet: 2,
      acid: 2,
      bitter: 3,
      spice: 2,
      fresh: 4
    },

    // 一般評価（仮の値）
    rating: 3, // ★★★☆☆

    // 画像ファイル名
    image: "4901411049895.jpg",

    tags: ["クラシック", "ロンドンドライ", "カクテル向き"]
  },

  // 翠 -SUI-
  "4901777301234": {
    id: "4901777301234",
    barcode: "4901777301234",
    type: "gin",

    name_jp: "翠 -SUI-",
    name_en: "SUI Japanese Gin",
    brand: "Suntory",
    country: "日本",
    region: "日本",

    abv: 40,
    volume_ml: 700,

    description_short: "日本人に飲みやすい爽やかなジン。",
    description:
      "柚子・緑茶・生姜などの和素材を使ったジャパニーズジン。爽やかでソーダ割りでも飲みやすい1本。",

    gin_base: "グレーンスピリッツ",
    gin_style: "日本風ジン",
    botanicals: ["ジュニパー", "柚子", "緑茶", "生姜"],
    distillation_method: "単式蒸留（一部素材別蒸留）",

    flavor: {
      sweet: 2,
      acid: 3,
      bitter: 2,
      spice: 2,
      fresh: 4
    },

    rating: 4, // ★★★★☆

    image: "sui.jpg",

    tags: ["ジャパニーズジン", "爽やか", "ソーダ割り向き"]
  },

    // HOLON GIN Original
  "1234567890123": {
    id: "1234567890123",          // ← 本物のJANに変えたらここも同じ値に
    barcode: "1234567890123",
    type: "gin",

    name_jp: "HOLON GIN Original",
    name_en: "HOLON GIN Original",
    brand: "HOLON",
    country: "日本",
    region: "東京",

    abv: 40,
    volume_ml: 700,

    description_short: "ハーバルでやわらかなジャパニーズクラフトジン。",
    description:
      "柑橘とハーブが穏やかに広がる、やわらかなジャパニーズクラフトジン。ソーダ割りやトニックで飲みやすく、食中にも合わせやすい1本。",

    gin_base: "グレーンスピリッツ",
    gin_style: "コンテンポラリー・ジン",
    botanicals: ["ジュニパー", "柚子", "ハーブ", "ボタニカル"],
    distillation_method: "単式蒸留",

    flavor: {
      sweet: 2,
      acid: 2,
      bitter: 2,
      spice: 3,
      fresh: 4
    },

    rating: 4, // 仮で★★★☆☆〜★★★★☆くらいにしてる

    image: "holon_original.jpg",

    tags: ["ジャパニーズジン", "クラフト", "ハーバル"]
  }

};

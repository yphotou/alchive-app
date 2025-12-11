// gin_db.js（デバッグ用：まずは3本だけ）

const GIN_DB = {
  // 1. ボンベイ・サファイア
  "4901411049895": {
    barcode: "4901411049895",
    bottle_id: 29,
    name_jp: "ボンベイ・サファイア（TEST）",
    name_en: "Bombay Sapphire (TEST)",
    brand: "Bombay",
    producer: "Bombay Sapphire Distillery",
    category: "Gin",
    country: "United Kingdom",
    region: "London",
    abv: 40,
    volume_ml: 700,
    description_short: "【TEST】これはボンベイのテストデータです。",
    gin_base: "Grain Spirits",
    gin_style: "London Dry",
    botanicals:
      "Grains of Paradise, Orris, Liquorice, Cubeb, Coriander, Cassia Bark, Juniper, Angelica root, Bitter Almond, Fresh Lemon Peel",
    distillation_method: "Continuous distillation + redistillation",
    flavor_sweet: 2,
    flavor_acid: 2,
    flavor_bitter: 3,
    flavor_spice: 2,
    flavor_fresh: 4,
    flavor: {
      sweet: 2,
      acid: 2,
      bitter: 3,
      spice: 2,
      fresh: 4
    },
    rating: 3,
    image: "4901411049895.jpg",
    tags: "Standard",
    status: "Active"
  },

  // 2. 季の美（スタンダード）
  "4589633900018": {
    barcode: "4589633900018",
    bottle_id: 1,
    name_jp: "季の美 京都ドライジン（TEST）",
    name_en: "KI NO BI Kyoto Dry Gin (TEST)",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 45,
    volume_ml: 700,
    description_short:
      "【TEST】これは季の美（通常）のテストデータです。",
    gin_base: "Rice Spirit",
    gin_style: "Dry Gin",
    botanicals:
      "Yuzu, Lemon, Sansho, Ginger, Gyokuro, Bamboo, Red Shiso, Juniper, Orris, Hinoki, Kinome",
    distillation_method: "Blended",
    flavor_sweet: 2,
    flavor_acid: 4,
    flavor_bitter: 3,
    flavor_spice: 4,
    flavor_fresh: 5,
    flavor: {
      sweet: 2,
      acid: 4,
      bitter: 3,
      spice: 4,
      fresh: 5
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item1.php",
    tags: "Standard",
    status: "Active"
  },

  // 3. 季の美 GO（5周年）
  "4589633900858": {
    barcode: "4589633900858",
    bottle_id: 12,
    name_jp: "季の美 GO 京都ドライジン（TEST）",
    name_en: "KI NO BI GO Kyoto Dry Gin (TEST)",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 50,
    volume_ml: 700,
    description_short:
      "【TEST】5周年記念ボトルのテストデータです。",
    gin_base: "Rice Spirit",
    gin_style: "Dry Gin",
    botanicals: "Red Pine (Akamatsu), Yuzu, Ginger, Gyokuro",
    distillation_method: "Blended",
    flavor_sweet: 2,
    flavor_acid: 4,
    flavor_bitter: 3,
    flavor_spice: 4,
    flavor_fresh: 5,
    flavor: {
      sweet: 2,
      acid: 4,
      bitter: 3,
      spice: 4,
      fresh: 5
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item86.php",
    tags: "Anniversary",
    status: "Limited"
  }
};

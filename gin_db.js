// gin_db.js
// Alchive Gin App 用 ジンマスタDB

const GIN_DB = {
  // ====== ボンベイ・サファイア ======
  "4901411049895": {
    barcode: "4901411049895",
    bottle_id: 29,
    name_jp: "ボンベイ・サファイア",
    name_en: "Bombay Sapphire",
    brand: "Bombay",
    producer: "Bombay Sapphire Distillery",
    category: "Gin",
    country: "United Kingdom",
    region: "London",
    abv: 40,
    volume_ml: 700,
    description_short:
      "クリアで洗練された味わい。柑橘とジュニパーのバランスが良く、カクテルベースとしても定番の1本。",
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
    // app.js の味バー用
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

  // ====== 翠 -SUI- ======
  "4901777301234": {
    barcode: "4901777301234",
    bottle_id: 30,
    name_jp: "翠 -SUI-",
    name_en: "SUI Japanese Gin",
    brand: "Suntory",
    producer: "Suntory",
    category: "Gin",
    country: "Japan",
    region: "Japan",
    abv: 40,
    volume_ml: 700,
    description_short: "日本人に飲みやすい爽やかなジン。",
    gin_base: "Grain Spirits",
    gin_style: "Japanese Style Gin",
    botanicals: "Juniper, Yuzu, Green Tea, Ginger",
    distillation_method: "Pot Still",
    flavor_sweet: 2,
    flavor_acid: 3,
    flavor_bitter: 2,
    flavor_spice: 2,
    flavor_fresh: 4,
    flavor: {
      sweet: 2,
      acid: 3,
      bitter: 2,
      spice: 2,
      fresh: 4
    },
    rating: 4,
    image: "sui.jpg",
    tags: "Japanese, Refreshing, Highball",
    status: "Active"
  },

  // ====== HOLON GIN Original（仮JANのまま） ======
  "1234567890123": {
    barcode: "1234567890123",
    bottle_id: 31,
    name_jp: "HOLON GIN Original",
    name_en: "HOLON GIN Original",
    brand: "HOLON",
    producer: "HOLON",
    category: "Gin",
    country: "Japan",
    region: "Tokyo",
    abv: 40,
    volume_ml: 700,
    description_short: "ハーバルでやわらかなジャパニーズクラフトジン。",
    gin_base: "Grain Spirits",
    gin_style: "Contemporary Gin",
    botanicals: "Juniper, Yuzu, Herbs",
    distillation_method: "Pot Still",
    flavor_sweet: 2,
    flavor_acid: 2,
    flavor_bitter: 2,
    flavor_spice: 3,
    flavor_fresh: 4,
    flavor: {
      sweet: 2,
      acid: 2,
      bitter: 2,
      spice: 3,
      fresh: 4
    },
    rating: 4,
    image: "holon_original.jpg",
    tags: "Japanese, Craft",
    status: "Active"
  },

  // ====== 季の美 京都ドライジン（オリジナル）=====
  "4589633900018": {
    barcode: "4589633900018",
    bottle_id: 1,
    name_jp: "季の美 京都ドライジン",
    name_en: "KI NO BI Kyoto Dry Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 45,
    volume_ml: 700,
    description_short:
      "京都のボタニカルを6つのエレメントに分けて蒸溜・ブレンドしたスタンダードボトル。",
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

  // ====== 季の美 勢 SEI ======
  "4589633900162": {
    barcode: "4589633900162",
    bottle_id: 2,
    name_jp: "季の美 勢 京都ドライジン",
    name_en: "KI NO BI SEI Kyoto Dry Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 54,
    volume_ml: 700,
    description_short:
      "季の美と同じ11種のボタニカルを使い高アルコール度数で力強い味わいに仕上げた一本。",
    gin_base: "Rice Spirit",
    gin_style: "Navy Strength",
    botanicals:
      "Yuzu, Lemon, Sansho, Ginger, Gyokuro, Bamboo, Red Shiso, Juniper, Orris, Hinoki, Kinome",
    distillation_method: "Blended",
    flavor_sweet: 2,
    flavor_acid: 4,
    flavor_bitter: 3,
    flavor_spice: 5,
    flavor_fresh: 4,
    flavor: {
      sweet: 2,
      acid: 4,
      bitter: 3,
      spice: 5,
      fresh: 4
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item3.php",
    tags: "High Proof",
    status: "Active"
  },

  // ====== 季のTEA ======
  "4589633900148": {
    barcode: "4589633900148",
    bottle_id: 3,
    name_jp: "季のTEA 京都ドライジン",
    name_en: "KI NO TEA Kyoto Dry Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 45,
    volume_ml: 700,
    description_short:
      "玉露と碾茶をふんだんに使用しホワイトチョコレートのような甘い香りが特徴。",
    gin_base: "Rice Spirit",
    gin_style: "Tea Gin",
    botanicals: "Gyokuro, Tencha, Juniper, etc.",
    distillation_method: "Blended",
    flavor_sweet: 4,
    flavor_acid: 2,
    flavor_bitter: 3,
    flavor_spice: 2,
    flavor_fresh: 3,
    flavor: {
      sweet: 4,
      acid: 2,
      bitter: 3,
      spice: 2,
      fresh: 3
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item2.php",
    tags: "Tea",
    status: "Active"
  },

  // ====== 季の糖島 Old Tom ======
  "4589633900209": {
    barcode: "4589633900209",
    bottle_id: 4,
    name_jp: "季の糖島 京都オールドトムジン",
    name_en: "KI NO TOU Kyoto Old Tom Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 47,
    volume_ml: 700,
    description_short:
      "与那国島の黒糖を加えたオールドトム・スタイル。コクのある甘みと複雑な味わい。",
    gin_base: "Rice Spirit",
    gin_style: "Old Tom",
    botanicals: "Brown Sugar, Juniper, Yuzu, etc.",
    distillation_method: "Blended",
    flavor_sweet: 5,
    flavor_acid: 3,
    flavor_bitter: 2,
    flavor_spice: 3,
    flavor_fresh: 3,
    flavor: {
      sweet: 5,
      acid: 3,
      bitter: 2,
      spice: 3,
      fresh: 3
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item4.php",
    tags: "Sweet",
    status: "Active"
  },

  // ====== 季の梅 BAI ======
  "4589633900674": {
    barcode: "4589633900674",
    bottle_id: 5,
    name_jp: "季の梅 京都プラムアンドベリーリキュール",
    name_en: "KI NO BAI Kyoto Plum and Berry Liqueur",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Liqueur",
    country: "Japan",
    region: "Kyoto",
    abv: 29.5,
    volume_ml: 700,
    description_short:
      "旬の北海道産ハスカップと京都産梅を漬け込んだリキュール。",
    gin_base: "Rice Spirit",
    gin_style: "Liqueur",
    botanicals: "Plum (Ume), Haskap Berry, Sugar",
    distillation_method: "Infused",
    flavor_sweet: 5,
    flavor_acid: 5,
    flavor_bitter: 1,
    flavor_spice: 1,
    flavor_fresh: 3,
    flavor: {
      sweet: 5,
      acid: 5,
      bitter: 1,
      spice: 1,
      fresh: 3
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item5.php",
    tags: "Fruit",
    status: "Active"
  },

  // ====== 金の美 ======
  "4589633900575": {
    barcode: "4589633900575",
    bottle_id: 6,
    name_jp: "金の美 京都ドライジン",
    name_en: "KIN NO BI Kyoto Dry Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 45,
    volume_ml: 700,
    description_short:
      "金箔入りの祝賀用ボトル。中身はスタンダードの季の美と同様。",
    gin_base: "Rice Spirit",
    gin_style: "Dry Gin",
    botanicals:
      "Yuzu, Lemon, Sansho, Ginger, Gyokuro, Bamboo, Red Shiso, Juniper, Orris, Hinoki, Kinome, Gold Leaf",
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
    image: "https://kyotodistillery.jp/products/item6.php",
    tags: "Gold Leaf",
    status: "Active"
  },

  // ====== Edition G ======
  "4589633900261": {
    barcode: "4589633900261",
    bottle_id: 7,
    name_jp: "季の美 エディションG",
    name_en: "KI NO BI Edition G",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 48,
    volume_ml: 700,
    description_short:
      "アンリ・ジローのシャンパーニュ樽で熟成させた限定品。",
    gin_base: "Rice Spirit",
    gin_style: "Cask Aged",
    botanicals: "Juniper, Yuzu, Gyokuro, etc.",
    distillation_method: "Pot Still & Cask",
    flavor_sweet: 3,
    flavor_acid: 4,
    flavor_bitter: 3,
    flavor_spice: 3,
    flavor_fresh: 4,
    flavor: {
      sweet: 3,
      acid: 4,
      bitter: 3,
      spice: 3,
      fresh: 4
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item8.php",
    tags: "Champagne Cask",
    status: "Limited"
  },

  // ====== Edition K ======
  "4589633900469": {
    barcode: "4589633900469",
    bottle_id: 8,
    name_jp: "季の美 エディションK",
    name_en: "KI NO BI Edition K",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 46,
    volume_ml: 700,
    volume_ml: 700,
    description_short:
      "スモーキーなシングルモルト（キルホーマン等）の樽で熟成させた限定品。",
    gin_base: "Rice Spirit",
    gin_style: "Cask Aged",
    botanicals: "Juniper, Yuzu, Gyokuro, etc.",
    distillation_method: "Pot Still & Cask",
    flavor_sweet: 2,
    flavor_acid: 3,
    flavor_bitter: 4,
    flavor_spice: 4,
    flavor_fresh: 3,
    flavor: {
      sweet: 2,
      acid: 3,
      bitter: 4,
      spice: 4,
      fresh: 3
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item9.php",
    tags: "Smoke Cask",
    status: "Limited"
  },

  // ====== 季の珠 Series 1 Gyokuro ======
  "4589633900452": {
    barcode: "4589633900452",
    bottle_id: 9,
    name_jp: "季の珠 京都ジン Series 1『玉露』",
    name_en: "KI NO JU Kyoto Gin Series 1 Gyokuro",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 47,
    volume_ml: 700,
    description_short:
      "最高級の玉露をふんだんに使用した超限定プレミアムジン。",
    gin_base: "Rice Spirit",
    gin_style: "Premium Gin",
    botanicals: "Gyokuro (Okumidori), Juniper, etc.",
    distillation_method: "Blended",
    flavor_sweet: 4,
    flavor_acid: 2,
    flavor_bitter: 4,
    flavor_spice: 2,
    flavor_fresh: 4,
    flavor: {
      sweet: 4,
      acid: 2,
      bitter: 4,
      spice: 2,
      fresh: 4
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item7.php",
    tags: "Luxury",
    status: "Limited"
  },

  // ====== 季の美 GO 5周年記念 ======
  "4589633900858": {
    barcode: "4589633900858",
    bottle_id: 12,
    name_jp: "季の美 GO 京都ドライジン",
    name_en: "KI NO BI GO Kyoto Dry Gin",
    brand: "KI NO BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 50,
    volume_ml: 700,
    description_short:
      "5周年記念ボトル。檜の代わりに赤松を使用し度数50%でボトリング。",
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
  },

  // ====== 季能美 15th Shikami ======
  "110000026": {
    barcode: "110000026",
    bottle_id: 28,
    name_jp: "季能美 15th Edition – 顰（しかみ）",
    name_en: "KI NOH BI 15th Edition - Shikami",
    brand: "KI NOH BI",
    producer: "The Kyoto Distillery",
    category: "Gin",
    country: "Japan",
    region: "Kyoto",
    abv: 48,
    volume_ml: 700,
    description_short: "DFS限定品。バニラ塩キャラメルの香り。",
    gin_base: "Rice Spirit",
    gin_style: "Cask Aged",
    distillation_method: "Pot Still & Cask",
    flavor_sweet: 4,
    flavor_acid: 3,
    flavor_bitter: 3,
    flavor_spice: 3,
    flavor_fresh: 2,
    flavor: {
      sweet: 4,
      acid: 3,
      bitter: 3,
      spice: 3,
      fresh: 2
    },
    rating: 3,
    image: "https://kyotodistillery.jp/products/item25.php",
    tags: "Cask Aged",
    status: "Limited"
  }
};

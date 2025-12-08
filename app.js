// --- 状態管理（localStorage） ---
const STORAGE_KEYS = {
  RATING: "alchive_rating_",      // + barcode
  MEMO: "alchive_memo_",          // + barcode
  MEMO_TIME: "alchive_memo_time_",
  HISTORY: "alchive_history"      // 配列
};

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || "[]");
  } catch {
    return [];
  }
}

function saveHistory(list) {
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(list));
}

// --- 初期化 ---
window.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const janInput = document.getElementById("janInput");
  const saveMemoBtn = document.getElementById("saveMemoBtn");
  const addDrinkLogBtn = document.getElementById("addDrinkLogBtn");

  searchBtn.addEventListener("click", () => handleSearch());
  janInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  if (saveMemoBtn) {
    saveMemoBtn.addEventListener("click", saveMemoForCurrent);
  }
  if (addDrinkLogBtn) {
    addDrinkLogBtn.addEventListener("click", addDrinkLogForCurrent);
  }

  renderHistory();
  renderCollection();
});

// 現在表示中のバーコードを覚えておく
let currentBarcode = null;

// --- 検索処理 ---
function handleSearch() {
  const inputEl = document.getElementById("janInput");
  const statusEl = document.getElementById("scanStatus");
  const jan = (inputEl.value || "").trim();

  if (!jan) {
    statusEl.textContent = "JANコードを入力してください。";
    return;
  }

  const gin = GIN_DB[jan];
  if (!gin) {
    statusEl.textContent = `JAN: ${jan} は登録されていません。`;
    document.getElementById("ginDetailCard").classList.add("hidden");
    currentBarcode = null;
    return;
  }

  statusEl.textContent = "ジンが見つかりました。";
  currentBarcode = gin.barcode;
  renderGinDetail(gin);
}

// --- 詳細表示 ---
function renderGinDetail(gin) {
  const card = document.getElementById("ginDetailCard");
  card.classList.remove("hidden");

  document.getElementById("ginName").textContent = gin.name_jp;
  document.getElementById("ginMeta").textContent =
    `${gin.brand}｜${gin.country}｜${gin.abv}%`;

  document.getElementById("ginDescription").textContent =
    gin.description || gin.description_short || "";

  const botanicalsText = Array.isArray(gin.botanicals)
    ? gin.botanicals.join(" / ")
    : gin.botanicals || "-";
  document.getElementById("ginBotanicals").textContent = botanicalsText;

  // 一般評価
  const ratingGeneral = "rating" in gin ? gin.rating : 3;
  document.getElementById("ginRatingGeneral").textContent =
    starsText(ratingGeneral);

  // 画像
  const imgEl = document.getElementById("ginImage");
  if (gin.image) {
    imgEl.src = `images/${gin.image}`;
    imgEl.alt = gin.name_jp;
  } else {
    imgEl.src = "";
    imgEl.alt = "";
  }

  // 味わいバー
  renderFlavorBars(gin.flavor || {});

  // あなたの評価
  renderUserRatingStars(gin.barcode);

  // メモ読み込み
  loadMemoForCurrent();
}

// --- 味わいバー ---
function renderFlavorBars(flavor) {
  const container = document.getElementById("flavorBars");
  const items = [
    ["甘味", flavor.sweet ?? 0],
    ["酸味", flavor.acid ?? 0],
    ["苦味", flavor.bitter ?? 0],
    ["スパイス", flavor.spice ?? 0],
    ["フレッシュ", flavor.fresh ?? 0]
  ];

  container.innerHTML = items
    .map(
      ([label, value]) => `
    <div class="flavor-row">
      <div class="flavor-label">${label}</div>
      <div class="flavor-bar-container">
        <div class="flavor-bar" style="width:${Math.max(
          0,
          Math.min(5, value)
        ) * 20}%;"></div>
      </div>
    </div>`
    )
    .join("");
}

// --- 星表示ユーティリティ ---
function starsText(score) {
  const s = Math.max(0, Math.min(5, Number(score) || 0));
  return "★★★★★☆☆☆☆☆".slice(5 - s, 10 - s);
}

// --- あなたの評価（星クリックUI） ---
function renderUserRatingStars(barcode) {
  const container = document.getElementById("userRatingStars");
  const saved = Number(localStorage.getItem(STORAGE_KEYS.RATING + barcode) || 0);
  let html = "";

  for (let i = 1; i <= 5; i++) {
    const active = i <= saved ? "active" : "";
    html += `<span class="${active}" data-score="${i}" data-barcode="${barcode}">★</span>`;
  }

  container.innerHTML = html;

  container.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", () => {
      const score = Number(span.dataset.score);
      const code = span.dataset.barcode;
      localStorage.setItem(STORAGE_KEYS.RATING + code, String(score));
      renderUserRatingStars(code);
      renderCollection(); // 図鑑の星数も更新
    });
  });
}

// --- メモ ---
function loadMemoForCurrent() {
  const memoEl = document.getElementById("tastingMemo");
  const infoEl = document.getElementById("lastMemoInfo");
  if (!currentBarcode) {
    memoEl.value = "";
    infoEl.textContent = "";
    return;
  }

  const memo = localStorage.getItem(STORAGE_KEYS.MEMO + currentBarcode) || "";
  const time = localStorage.getItem(STORAGE_KEYS.MEMO_TIME + currentBarcode);
  memoEl.value = memo;
  if (time) {
    const d = new Date(time);
    infoEl.textContent = `前回保存：${d.toLocaleString()}`;
  } else {
    infoEl.textContent = "";
  }
}

function saveMemoForCurrent() {
  if (!currentBarcode) return;
  const memoEl = document.getElementById("tastingMemo");
  const memo = memoEl.value || "";
  localStorage.setItem(STORAGE_KEYS.MEMO + currentBarcode, memo);
  localStorage.setItem(STORAGE_KEYS.MEMO_TIME + currentBarcode, new Date().toISOString());
  loadMemoForCurrent();
  alert("メモを保存しました。");
}

// --- 飲んだ履歴 ---
function addDrinkLogForCurrent() {
  if (!currentBarcode) return;
  const list = loadHistory();
  list.push({
    barcode: currentBarcode,
    time: new Date().toISOString()
  });
  saveHistory(list);
  renderHistory();
  renderCollection();
  alert("飲んだ履歴を追加しました。");
}

function renderHistory() {
  const list = loadHistory();
  const infoEl = document.getElementById("lastDrinkInfo");
  const ul = document.getElementById("drinkHistoryList");

  if (!list.length) {
    infoEl.textContent = "まだ記録がありません。";
    ul.innerHTML = "";
    return;
  }

  const last = list[list.length - 1];
  const gin = GIN_DB[last.barcode];
  infoEl.textContent = `最新：${gin ? gin.name_jp : "不明"} / ${new Date(
    last.time
  ).toLocaleString()}`;

  ul.innerHTML = list
    .slice()
    .reverse()
    .map((item) => {
      const g = GIN_DB[item.barcode];
      const name = g ? g.name_jp : "不明なジン";
      const date = new Date(item.time).toLocaleString();
      return `<li>${date} —— ${name}</li>`;
    })
    .join("");
}

// --- 図鑑 ---
function renderCollection() {
  const list = loadHistory();
  const summaryEl = document.getElementById("collectionSummary");
  const ul = document.getElementById("collectionList");

  if (!list.length) {
    summaryEl.textContent = "まだ図鑑に登録されたジンはありません。";
    ul.innerHTML = "";
    return;
  }

  // ジンごとにまとめる
  const map = new Map();
  list.forEach((item) => {
    const count = map.get(item.barcode) || 0;
    map.set(item.barcode, count + 1);
  });

  const entries = Array.from(map.entries());
  summaryEl.textContent = `種類数：${entries.length} / 総ボトル数：${list.length}`;

  ul.innerHTML = entries
    .map(([barcode, count]) => {
      const gin = GIN_DB[barcode];
      if (!gin) return "";
      const rating =
        Number(localStorage.getItem(STORAGE_KEYS.RATING + barcode) || 0);
      return `<li>${gin.name_jp}（${gin.country}） —— ★${rating || "–"} / 飲んだ回数：${count}</li>`;
    })
    .join("");
}

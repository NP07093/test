const featuredDonuts = [
  {
    id: "real",
    name: "一片是真的甜甜圈",
    price: 85,
    description: "草莓糖霜包覆外層，內餡藏著香草奶霜、巧克力流心與餅乾碎的驚喜口感。",
    tags: ["NEW", "爆餡", "推薦指數 ★★★★★"]
  },
  {
    id: "coffee",
    name: "哥比哥本柴油甜甜圈",
    price: 90,
    description: "黑巧克力外皮搭配焦糖咖啡內餡，尾韻帶微苦回甘，像偉大航道一樣有層次。",
    tags: ["黑巧克力", "焦糖咖啡", "微苦回甘"]
  },
  {
    id: "nika",
    name: "Nika 甜甜圈",
    price: 95,
    description: "金黃芒果結合鳳梨、百香果與香草卡士達，充滿陽光感的熱帶果香。",
    tags: ["水果系", "酸甜平衡", "招牌限定"]
  }
];

const classicDonuts = [
  { id: "original", name: "原味糖霜", price: 45, description: "外酥內軟，經典不敗。", tags: ["經典"] },
  { id: "choco", name: "巧克力脆片", price: 55, description: "濃郁巧克力搭配脆片。", tags: ["濃郁"] },
  { id: "strawberry", name: "草莓糖霜", price: 55, description: "酸甜草莓搭配粉紅糖衣。", tags: ["少女系"] },
  { id: "matcha", name: "抹茶紅豆", price: 60, description: "微苦抹茶配上紅豆餡。", tags: ["日系"] },
  { id: "caramel", name: "焦糖海鹽", price: 60, description: "焦糖甜香加上海鹽平衡。", tags: ["鹹甜"] },
  { id: "oreo", name: "Oreo 奶霜", price: 65, description: "香濃奶霜撒上餅乾碎。", tags: ["人氣款"] }
];

const drinks = [
  { id: "americano", name: "美式咖啡", price: 50, note: "黑咖啡香氣俐落。" },
  { id: "latte", name: "拿鐵", price: 70, note: "奶香滑順。" },
  { id: "tea", name: "伯爵紅茶", price: 45, note: "茶香清爽。" },
  { id: "cocoa", name: "可可牛奶", price: 60, note: "香濃暖心。" },
  { id: "sparkling", name: "芒果氣泡飲", price: 65, note: "熱帶感十足。" }
];

const allItems = [...featuredDonuts, ...classicDonuts, ...drinks].reduce((map, item) => {
  map[item.id] = item;
  return map;
}, {});

const state = {
  cart: {},
  setEnabled: false
};

const featuredMenu = document.getElementById("featuredMenu");
const classicMenu = document.getElementById("classicMenu");
const drinkMenu = document.getElementById("drinkMenu");
const setToggle = document.getElementById("setToggle");
const orderSummary = document.getElementById("orderSummary");
const donutSubtotalEl = document.getElementById("donutSubtotal");
const drinkSubtotalEl = document.getElementById("drinkSubtotal");
const discountAmountEl = document.getElementById("discountAmount");
const grandTotalEl = document.getElementById("grandTotal");
const submitOrderBtn = document.getElementById("submitOrder");
const orderMessage = document.getElementById("orderMessage");
const customerNameInput = document.getElementById("customerName");
const pickupTimeSelect = document.getElementById("pickupTime");
const noteInput = document.getElementById("note");

function formatPrice(value) {
  return `NT$${value}`;
}

function getQty(id) {
  return state.cart[id] || 0;
}

function setQty(id, nextQty) {
  if (nextQty <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = nextQty;
  }
  renderAll();
}

function createQtyControls(item) {
  const qty = getQty(item.id);
  return `
    <div class="order-row">
      <div class="qty-control">
        <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
        <span class="qty-value">${qty}</span>
        <button class="qty-btn" data-action="increase" data-id="${item.id}">＋</button>
      </div>
      <button class="add-btn" data-action="increase" data-id="${item.id}">加入 1 份</button>
    </div>
  `;
}

function renderFeatured() {
  featuredMenu.innerHTML = featuredDonuts.map((item) => `
    <article class="menu-card featured">
      <div class="card-top">
        <h3>${item.name}</h3>
        <span class="price">${formatPrice(item.price)}</span>
      </div>
      <p class="item-desc">${item.description}</p>
      <div class="card-footer">
        ${item.tags.map((tag) => `<span class="feature-badge">${tag}</span>`).join("")}
      </div>
      ${createQtyControls(item)}
    </article>
  `).join("");
}

function renderClassic() {
  classicMenu.innerHTML = classicDonuts.map((item) => `
    <article class="menu-card">
      <div class="card-top">
        <h3>${item.name}</h3>
        <span class="price">${formatPrice(item.price)}</span>
      </div>
      <p class="item-desc">${item.description}</p>
      <div class="card-footer">
        ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
      ${createQtyControls(item)}
    </article>
  `).join("");
}

function renderDrinks() {
  drinkMenu.innerHTML = drinks.map((item) => `
    <article class="drink-card">
      <div class="drink-meta">
        <div class="card-top">
          <h3>${item.name}</h3>
          <span class="price">${formatPrice(item.price)}</span>
        </div>
        <p class="item-desc">${item.note}</p>
      </div>
      ${createQtyControls(item)}
    </article>
  `).join("");
}

function calculateTotals() {
  const donutItems = [...featuredDonuts, ...classicDonuts];
  const drinkItems = drinks;

  const donutSubtotal = donutItems.reduce((sum, item) => sum + item.price * getQty(item.id), 0);
  const drinkSubtotal = drinkItems.reduce((sum, item) => sum + item.price * getQty(item.id), 0);

  const donutCount = donutItems.reduce((sum, item) => sum + getQty(item.id), 0);
  const drinkCount = drinkItems.reduce((sum, item) => sum + getQty(item.id), 0);

  let discount = 0;

  if (state.setEnabled) {
    const availableSets = Math.min(Math.floor(donutCount / 2), drinkCount);
    if (availableSets > 0) {
      const groupedRegularPrice = estimateSetRegularPrice(availableSets);
      discount = Math.max(0, groupedRegularPrice - availableSets * 149);
    }
  }

  const total = donutSubtotal + drinkSubtotal - discount;

  return {
    donutSubtotal,
    drinkSubtotal,
    discount,
    total,
    donutCount,
    drinkCount
  };
}

function estimateSetRegularPrice(setCount) {
  const donutPrices = [...featuredDonuts, ...classicDonuts]
    .flatMap((item) => Array(getQty(item.id)).fill(item.price))
    .sort((a, b) => b - a);

  const drinkPrices = drinks
    .flatMap((item) => Array(getQty(item.id)).fill(item.price))
    .sort((a, b) => b - a);

  let regular = 0;
  for (let i = 0; i < setCount; i += 1) {
    const donutA = donutPrices.shift() || 0;
    const donutB = donutPrices.shift() || 0;
    const drink = drinkPrices.shift() || 0;
    regular += donutA + donutB + drink;
  }
  return regular;
}

function renderSummary() {
  const entries = Object.entries(state.cart);

  if (!entries.length) {
    orderSummary.innerHTML = '<div class="empty-state">尚未選擇商品，先挑幾顆甜甜圈開始冒險吧！</div>';
  } else {
    orderSummary.innerHTML = entries.map(([id, qty]) => {
      const item = allItems[id];
      return `
        <div class="summary-item">
          <div>
            <strong>${item.name}</strong>
            <small>數量 ${qty} × ${formatPrice(item.price)}</small>
          </div>
          <strong>${formatPrice(item.price * qty)}</strong>
        </div>
      `;
    }).join("");
  }

  const totals = calculateTotals();
  donutSubtotalEl.textContent = formatPrice(totals.donutSubtotal);
  drinkSubtotalEl.textContent = formatPrice(totals.drinkSubtotal);
  discountAmountEl.textContent = `-${formatPrice(totals.discount)}`;
  grandTotalEl.textContent = formatPrice(totals.total);
}

function renderAll() {
  renderFeatured();
  renderClassic();
  renderDrinks();
  renderSummary();
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const { action, id } = trigger.dataset;
  const currentQty = getQty(id);

  if (action === "increase") {
    setQty(id, currentQty + 1);
  }

  if (action === "decrease") {
    setQty(id, currentQty - 1);
  }
});

setToggle.addEventListener("change", () => {
  state.setEnabled = setToggle.checked;
  renderSummary();
});

submitOrderBtn.addEventListener("click", () => {
  const totals = calculateTotals();
  const customerName = customerNameInput.value.trim();

  if (!customerName) {
    orderMessage.textContent = "請先填寫訂購人姓名。";
    orderMessage.className = "order-message error";
    return;
  }

  if (!Object.keys(state.cart).length) {
    orderMessage.textContent = "你的訂單目前是空的，請先選擇商品。";
    orderMessage.className = "order-message error";
    return;
  }

  orderMessage.textContent = `${customerName} 的 ONEPIECEREAL 訂單已建立！取餐時段：${pickupTimeSelect.value}，備註：${noteInput.value.trim() || "無"}，總金額 ${formatPrice(totals.total)}。`;
  orderMessage.className = "order-message success";
});

renderAll();
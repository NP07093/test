const itineraries = {
  relax: {
    title: "慢活療癒路線",
    description: "適合想泡湯、看海、喝咖啡、用輕鬆節奏感受宜蘭的人。",
    audience: ["情侶", "好友", "上班族放鬆", "第一次到宜蘭的遊客"],
    days: [
      {
        title: "Day 1｜礁溪暖身慢遊",
        area: "礁溪",
        items: [
          "上午抵達礁溪，先到湯圍溝公園散步、泡足湯。",
          "中午安排礁溪在地小吃與蔥油餅。",
          "下午入住溫泉旅宿，接著到咖啡館放空或逛伴手禮店。",
          "晚上享受溫泉與簡單夜間散步。"
        ],
        tags: ["溫泉", "輕鬆", "步行友善"]
      },
      {
        title: "Day 2｜頭城看海與文青行程",
        area: "頭城、外澳",
        items: [
          "上午前往外澳海灘或蘭陽博物館，看山海交界景色。",
          "中午在頭城品嘗海鮮或文青餐廳。",
          "下午安排滿山望海、九號咖啡等景觀咖啡館。",
          "傍晚回礁溪或頭城住宿，享受悠閒晚餐。"
        ],
        tags: ["海景", "咖啡館", "拍照"]
      },
      {
        title: "Day 3｜羅東林場與返程",
        area: "羅東",
        items: [
          "早上前往羅東林場散步，感受木都風情。",
          "中午安排羅東夜市周邊美食，白天也能吃到經典小吃。",
          "下午採買伴手禮後返程。"
        ],
        tags: ["林場", "美食", "伴手禮"]
      }
    ]
  },
  family: {
    title: "親子同遊路線",
    description: "適合帶小朋友出門，結合農場、手作、動物互動與寬鬆移動節奏。",
    audience: ["全家出遊", "親子家庭", "學齡前孩童", "三代同堂"],
    days: [
      {
        title: "Day 1｜農場互動日",
        area: "員山、三星",
        items: [
          "上午前往張美阿嬤農場或可愛動物農場，安排餵食與拍照。",
          "中午在員山享用親子友善餐廳。",
          "下午到蜊埤湖或三星青蔥文化館走走。",
          "晚上入住家庭房型旅宿。"
        ],
        tags: ["動物互動", "親子", "輕鬆"]
      },
      {
        title: "Day 2｜手作與觀光工廠",
        area: "蘇澳、五結",
        items: [
          "上午前往觀光工廠，如蠟筆城堡、溪和水產，增加室內備案彈性。",
          "中午於五結或蘇澳用餐。",
          "下午安排國立傳統藝術中心，讓孩子體驗手作與街藝表演。",
          "晚上可前往羅東夜市簡單覓食。"
        ],
        tags: ["室內備案", "手作", "寓教於樂"]
      },
      {
        title: "Day 3｜海邊放風返程",
        area: "壯圍、頭城",
        items: [
          "早上到壯圍沙丘旅遊服務園區或外澳海邊放風。",
          "中午享用簡單海景餐廳。",
          "下午視體力決定是否加一個小景點後返程。"
        ],
        tags: ["放電", "海景", "彈性高"]
      }
    ]
  },
  outdoor: {
    title: "戶外山海路線",
    description: "適合喜歡步道、山景、海景與自然體驗的旅人。",
    audience: ["朋友出遊", "戶外愛好者", "年輕族群", "喜歡健行的人"],
    days: [
      {
        title: "Day 1｜抹茶山挑戰",
        area: "礁溪",
        items: [
          "一早出發前往聖母山莊步道，安排抹茶山登山行程。",
          "中午以簡單行動糧或下山後用餐為主。",
          "下午回礁溪休息泡湯，舒緩腿部疲勞。",
          "晚上早點休息，保留隔日體力。"
        ],
        tags: ["登山", "需要體力", "泡湯恢復"]
      },
      {
        title: "Day 2｜太平山森呼吸",
        area: "大同、太平山",
        items: [
          "清晨開車前往太平山，沿途欣賞山景與雲霧。",
          "白天可安排見晴懷古步道、蹦蹦車、翠峰湖視天氣調整。",
          "晚間返回市區住宿。"
        ],
        tags: ["森林", "高山", "自駕更佳"]
      },
      {
        title: "Day 3｜烏石港海線收尾",
        area: "頭城",
        items: [
          "早上前往烏石港或外澳衝浪、看海。",
          "中午享用海鮮料理。",
          "下午輕鬆返程，為三天山海之旅收尾。"
        ],
        tags: ["海線", "衝浪", "收心"]
      }
    ]
  },
  food: {
    title: "美食放鬆路線",
    description: "適合把吃喝當成主軸，搭配市場、夜市、咖啡館與伴手禮採買。",
    audience: ["美食控", "情侶", "朋友出遊", "小資旅人"],
    days: [
      {
        title: "Day 1｜羅東吃吃喝喝",
        area: "羅東",
        items: [
          "中午抵達後先吃肉羹、糕渣、卜肉等宜蘭特色小吃。",
          "下午逛羅東文化工場或咖啡館。",
          "晚上主攻羅東夜市，安排幾樣必吃名單。"
        ],
        tags: ["夜市", "小吃", "在地味"]
      },
      {
        title: "Day 2｜海鮮與甜點日",
        area: "頭城、蘇澳",
        items: [
          "上午前往南方澳，享用新鮮海鮮與漁港風情。",
          "下午轉往頭城或礁溪咖啡甜點店，安排悠閒午茶。",
          "晚上可回礁溪泡湯並吃精緻晚餐。"
        ],
        tags: ["海鮮", "甜點", "午茶"]
      },
      {
        title: "Day 3｜市場採買返程",
        area: "宜蘭市",
        items: [
          "早上逛宜蘭市區或市場，選購蜜餞、牛舌餅、鴨賞。",
          "中午再補一輪想吃卻漏掉的店家。",
          "下午滿載伴手禮返程。"
        ],
        tags: ["伴手禮", "市場", "採買"]
      }
    ]
  },
  senior: {
    title: "長者輕鬆遊路線",
    description: "減少長距離步行與爬坡，安排平緩、舒適、好停留的景點。",
    audience: ["有長者同行", "三代同堂", "步調慢的旅客"],
    days: [
      {
        title: "Day 1｜礁溪溫泉舒緩日",
        area: "礁溪",
        items: [
          "上午抵達礁溪後先入住或寄放行李，避免拉行李久走。",
          "中午安排礁溪市區餐廳用餐。",
          "下午至湯圍溝公園、足湯區、伴手禮店輕鬆散步。",
          "晚上回溫泉旅館休息。"
        ],
        tags: ["溫泉", "少步行", "長者友善"]
      },
      {
        title: "Day 2｜壯圍與宜蘭市平緩走遊",
        area: "壯圍、宜蘭市",
        items: [
          "上午到壯圍沙丘旅遊服務園區，室內外皆可休息。",
          "中午回宜蘭市區用餐。",
          "下午逛幾米公園、宜蘭設治紀念館周邊。",
          "晚上入住宜蘭市或礁溪。"
        ],
        tags: ["平地景點", "室內外兼具", "好休息"]
      },
      {
        title: "Day 3｜羅東林場與返程",
        area: "羅東",
        items: [
          "早上到羅東林場平緩散步。",
          "中午享用羅東在地小吃。",
          "下午採買伴手禮後返程。"
        ],
        tags: ["輕鬆散步", "木都風情", "返程順路"]
      }
    ]
  },
  couple: {
    title: "情侶約會路線",
    description: "結合海景咖啡、泡湯、浪漫晚餐與拍照景點。",
    audience: ["情侶", "新婚夫妻", "紀念日旅行"],
    days: [
      {
        title: "Day 1｜礁溪溫泉約會",
        area: "礁溪",
        items: [
          "中午抵達礁溪後先享用特色午餐。",
          "下午入住溫泉飯店，安排雙人湯屋或房內泡湯。",
          "晚上散步到礁溪市區享受晚餐。"
        ],
        tags: ["約會", "泡湯", "放鬆"]
      },
      {
        title: "Day 2｜頭城海景浪漫日",
        area: "頭城、外澳",
        items: [
          "上午前往蘭陽博物館與外澳海灘拍照。",
          "中午安排海景餐廳。",
          "下午到景觀咖啡廳待到傍晚。",
          "晚上回飯店享受靜態時光。"
        ],
        tags: ["海景", "拍照", "咖啡廳"]
      },
      {
        title: "Day 3｜文青散步返程",
        area: "宜蘭市、羅東",
        items: [
          "早上到幾米公園或羅東文化工場散步。",
          "中午吃一間想收藏的宜蘭名店。",
          "下午帶著伴手禮返程。"
        ],
        tags: ["散步", "打卡", "美食"]
      }
    ]
  },
  friends: {
    title: "朋友出遊路線",
    description: "適合一群朋友一起玩，節奏熱鬧、景點多元，也能安排拍照與夜市。",
    audience: ["朋友出遊", "大學生", "公司同事", "揪團旅行"],
    days: [
      {
        title: "Day 1｜羅東夜市暖身",
        area: "羅東",
        items: [
          "白天抵達後先到住宿點放行李。",
          "下午可到梅花湖騎車或羅東運動公園走走。",
          "晚上主攻羅東夜市。"
        ],
        tags: ["夜市", "熱鬧", "朋友聚會"]
      },
      {
        title: "Day 2｜山海雙拼玩整天",
        area: "頭城、蘇澳",
        items: [
          "上午前往外澳海邊或烏石港。",
          "中午吃海鮮。",
          "下午視興趣安排 SUP、衝浪體驗或南方澳拍照。",
          "晚上回羅東或礁溪聚餐。"
        ],
        tags: ["活動感", "海線", "拍照"]
      },
      {
        title: "Day 3｜伴手禮補貨返程",
        area: "宜蘭市",
        items: [
          "早上逛幾米公園或市場。",
          "中午再吃一輪宜蘭小吃。",
          "下午採買鴨賞、牛舌餅後返程。"
        ],
        tags: ["採買", "小吃", "行程彈性"]
      }
    ]
  },
  culture: {
    title: "文青手作路線",
    description: "以文化、手作、老屋、展館與拍照感受為主，節奏舒適。",
    audience: ["文青旅人", "情侶", "喜歡手作的人", "女子旅行"],
    days: [
      {
        title: "Day 1｜宜蘭市文藝散步",
        area: "宜蘭市",
        items: [
          "上午走訪幾米公園與周邊文創空間。",
          "中午找老宅咖啡或早午餐。",
          "下午安排宜蘭文學館、設治紀念館。"
        ],
        tags: ["老屋", "展館", "咖啡館"]
      },
      {
        title: "Day 2｜傳藝中心手作日",
        area: "五結",
        items: [
          "全天安排國立傳統藝術中心。",
          "體驗手作、街藝表演、古風街景拍照。",
          "晚上回羅東或礁溪休息。"
        ],
        tags: ["手作", "文化", "拍照"]
      },
      {
        title: "Day 3｜頭城咖啡收尾",
        area: "頭城",
        items: [
          "上午到頭城老街走走。",
          "中午安排特色餐廳。",
          "下午在海景咖啡館坐到返程前。"
        ],
        tags: ["老街", "咖啡廳", "慢節奏"]
      }
    ]
  },
  budget: {
    title: "小資省錢路線",
    description: "以免費景點、平價住宿、在地小吃為主，適合控制預算。",
    audience: ["小資旅人", "學生", "背包客", "朋友出遊"],
    days: [
      {
        title: "Day 1｜宜蘭市免費景點",
        area: "宜蘭市",
        items: [
          "上午到幾米公園、車站周邊散步。",
          "中午吃平價在地便當或小吃。",
          "下午逛宜蘭河濱或免費公園。"
        ],
        tags: ["免費景點", "平價", "車站周邊"]
      },
      {
        title: "Day 2｜羅東林場與夜市",
        area: "羅東",
        items: [
          "白天前往羅東林場、羅東運動公園。",
          "中午與晚餐都可鎖定夜市周邊平價美食。",
          "晚上入住平價民宿。"
        ],
        tags: ["夜市", "省錢", "自由度高"]
      },
      {
        title: "Day 3｜海邊走走返程",
        area: "壯圍、頭城",
        items: [
          "早上搭車到海邊看景。",
          "中午簡單用餐。",
          "下午返程。"
        ],
        tags: ["低花費", "海景", "簡單舒服"]
      }
    ]
  },
  rainy: {
    title: "雨天備案路線",
    description: "以室內景點、觀光工廠、展館與溫泉為主，下雨也能順暢玩。",
    audience: ["雨天出遊", "親子", "長者", "不想曬太陽的旅客"],
    days: [
      {
        title: "Day 1｜觀光工廠室內日",
        area: "蘇澳、五結",
        items: [
          "上午前往觀光工廠。",
          "中午在附近餐廳用餐。",
          "下午繼續安排室內手作或展館。"
        ],
        tags: ["室內", "親子", "不怕下雨"]
      },
      {
        title: "Day 2｜傳藝中心與咖啡館",
        area: "五結、羅東",
        items: [
          "上午進傳藝中心逛展與體驗。",
          "下午移動到咖啡館或商場型空間休息。",
          "晚上羅東夜市吃小吃。"
        ],
        tags: ["文化", "室內外皆可", "美食"]
      },
      {
        title: "Day 3｜礁溪泡湯返程",
        area: "礁溪",
        items: [
          "早上安排湯屋或泡腳。",
          "中午礁溪用餐。",
          "下午採買伴手禮後返程。"
        ],
        tags: ["溫泉", "舒適", "下雨也適合"]
      }
    ]
  }
};

const transportLabels = {
  train: "大眾運輸",
  car: "自行開車"
};

const budgetLabels = {
  economy: "精省型",
  mid: "舒適型",
  premium: "享受型"
};

const budgetSuggestions = {
  economy: "建議以平價旅宿、在地小吃與免費景點為主，單人三天兩夜預估約 4,500～7,000 元。",
  mid: "可搭配舒適旅宿、特色餐廳與少量付費景點，單人三天兩夜預估約 7,000～11,000 元。",
  premium: "可安排溫泉飯店、景觀餐廳與高品質體驗，單人三天兩夜預估約 11,000 元以上。"
};

const transportSuggestions = {
  train: "行程已偏向車站周邊與較好叫車區域，建議搭配台鐵、公車與計程車移動。",
  car: "行程機動性較高，可更彈性串接山區、海線與較分散的景點。"
};

const styleSelect = document.getElementById("style");
const transportSelect = document.getElementById("transport");
const budgetSelect = document.getElementById("budget");
const recommendBtn = document.getElementById("recommendBtn");
const summaryEl = document.getElementById("summary");
const itineraryEl = document.getElementById("itinerary");

function renderPlan() {
  const style = styleSelect.value;
  const transport = transportSelect.value;
  const budget = budgetSelect.value;
  const plan = itineraries[style];

  summaryEl.innerHTML = `
    <h2>${plan.title}</h2>
    <p>${plan.description}</p>
    <div class="audience-row">
      ${plan.audience.map((item) => `<span class="audience-badge">適合：${item}</span>`).join("")}
    </div>
    <p><strong>交通方式：</strong>${transportLabels[transport]}｜${transportSuggestions[transport]}</p>
    <p><strong>預算建議：</strong>${budgetLabels[budget]}｜${budgetSuggestions[budget]}</p>
  `;

  itineraryEl.innerHTML = plan.days.map((day) => `
    <article class="day-card">
      <h3>${day.title}</h3>
      <span class="day-meta">主要區域：${day.area}</span>
      <ul>
        ${day.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="tag-row">
        ${day.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

recommendBtn.addEventListener("click", renderPlan);
styleSelect.addEventListener("change", renderPlan);
transportSelect.addEventListener("change", renderPlan);
budgetSelect.addEventListener("change", renderPlan);

renderPlan();

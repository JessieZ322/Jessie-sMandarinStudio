// 示例场景：餐厅常用词汇
const deck = [
    { hanzi: "菜单", english: "menu", emoji: "📜" },
    { hanzi: "服务员", english: "waiter/waitress", emoji: "🧑‍🍳" },
    { hanzi: "米饭", english: "rice", emoji: "🍚" },
    { hanzi: "面条", english: "noodles", emoji: "🍜" },
    { hanzi: "茶", english: "tea", emoji: "🍵" },
    { hanzi: "买单", english: "pay the bill", emoji: "💳" }
  ];
  
  // 自动加拼音
  deck.forEach(card => {
    card.pinyin = window.pinyinPro.pinyin(card.hanzi, { toneType: "symbol" });
  });
  
  let currentIndex = 0;
  let flipped = false;
  
  const container = document.getElementById("flashcard-container");
  
  // 创建卡片
  function renderCard() {
    const card = deck[currentIndex];
    container.innerHTML = `
      <div class="flashcard ${flipped ? "flipped" : ""}">
        <div class="front">
          <div>
            <div style="font-size:2rem;">${card.emoji}</div>
            <div>${card.hanzi}</div>
          </div>
        </div>
        <div class="back">
          <div>
            <div>${card.pinyin}</div>
            <div>${card.english}</div>
          </div>
        </div>
      </div>
    `;
  }
  
  renderCard();
  
  // 控制按钮
  document.getElementById("flip-btn").addEventListener("click", () => {
    flipped = !flipped;
    renderCard();
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % deck.length;
    flipped = false;
    renderCard();
  });
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + deck.length) % deck.length;
    flipped = false;
    renderCard();
  });
  
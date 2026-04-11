// ======================
// 游戏资源数据（按新分类，自行修改/添加）
// ======================
const games = [
  {
    title: "黑神话：悟空",
    type: "动作",
    cover: "https://picsum.photos/seed/wukong/400/250",
    download: "#"
  },
  {
    title: "塞尔达传说：王国之泪",
    type: "冒险",
    cover: "https://picsum.photos/seed/zelda/400/250",
    download: "#"
  },
  {
    title: "CS2 联机版",
    type: "射击",
    cover: "https://picsum.photos/seed/cs2/400/250",
    download: "#"
  },
  {
    title: "星露谷物语",
    type: "休闲",
    cover: "https://picsum.photos/seed/stardew/400/250",
    download: "#"
  },
  {
    title: "FIFA 23",
    type: "体育",
    cover: "https://picsum.photos/seed/fifa/400/250",
    download: "#"
  },
  {
    title: "极限竞速：地平线5",
    type: "竞速",
    cover: "https://picsum.photos/seed/forza/400/250",
    download: "#"
  },
  {
    title: "生化危机8：村庄",
    type: "恐怖",
    cover: "https://picsum.photos/seed/re8/400/250",
    download: "#"
  },
  {
    title: "GTA5 真实画质MOD",
    type: "动作",
    cover: "https://picsum.photos/seed/gta5mod/400/250",
    download: "#"
  }
];

// ======================
// DOM元素获取
// ======================
const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("search");
const categoryBtns = document.querySelectorAll(".category-btn");
const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

// ======================
// 渲染游戏列表
// ======================
function renderGameList(filteredGames) {
  gameList.innerHTML = "";
  if (filteredGames.length === 0) {
    gameList.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 18px;'>暂无相关资源</p>";
    return;
  }
  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.cover}" alt="${game.title}" class="game-cover">
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <span class="game-type">${game.type}</span>
        <a href="${game.download}" class="download-btn" target="_blank">立即下载</a>
      </div>
    `;
    gameList.appendChild(card);
  });
}

// 初始加载全部游戏
renderGameList(games);

// ======================
// 搜索功能
// ======================
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(keyword) || 
    game.type.toLowerCase().includes(keyword)
  );
  renderGameList(filteredGames);
  // 同步分类按钮状态
  categoryBtns.forEach(btn => btn.classList.remove("active"));
  document.querySelector('.category-btn[data-type="all"]').classList.add("active");
});

// ======================
// 分类筛选功能（分类按钮）
// ======================
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // 切换按钮激活状态
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const type = btn.dataset.type;
    const filteredGames = type === "all" 
      ? games 
      : games.filter(game => game.type === type);
    
    renderGameList(filteredGames);
  });
});

// ======================
// 下拉菜单联动筛选
// ======================
dropdownLinks.forEach(link => {
  链接.addEventListener(“点击”, (e) => {
    e.preventDefault();
    常量 类型 = 链接.dataset.type;
    
    // 同步分类按钮状态
    categoryBtns.forEach(btn => {
      if (btn.dataset.type === type) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    // 筛选游戏
    const filteredGames = type === "all" 
      ? games 
      : games.filter(game => game.type === type);
    
    renderGameList(filteredGames);
  });
});

// ======================
// 游戏资源数据（自行修改/添加）
// ======================
const games = [
  {
    title: "黑神话：悟空",
    type: "单机",
    cover: "https://picsum.photos/seed/wukong/400/250", // 替换成你的游戏封面图链接
    download: "#" // 替换成你的下载链接
  },
  {
    title: "CS2 联机版",
    type: "联机",
    cover: "https://picsum.photos/seed/cs2/400/250",
    download: "#"
  },
  {
    title: "GTA5 真实画质MOD",
    type: "MOD",
    cover: "https://picsum.photos/seed/gta5mod/400/250",
    download: "#"
  },
  {
    title: "艾尔登法环 汉化补丁",
    type: "补丁",
    cover: "https://picsum.photos/seed/elden/400/250",
    download: "#"
  },
  {
    title: "赛博朋克2077 终极版",
    type: "单机",
    cover: "https://picsum.photos/seed/cyberpunk/400/250",
    download: "#"
  },
  {
    title: "原神 4.0 资源包",
    type: "联机",
    cover: "https://picsum.photos/seed/genshin/400/250",
    download: "#"
  }
];

// ======================
// DOM元素获取
// ======================
const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("search");
const categoryBtns = document.querySelectorAll(".category-btn");

// ======================
// 渲染游戏列表
// ======================
function renderGameList(filteredGames) {
  gameList.innerHTML = "";
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
});

// ======================
// 分类筛选功能
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
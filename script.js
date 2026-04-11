// ======================
// HyperWave 超波 - 游戏资源数据（21款完整版 · 自动分类 · 带弹窗详情）
// ======================
const games = [
  {
    title: "与你在一起",
    type: "休闲",
    cover: "https://picsum.photos/seed/yuniyiqizai/400/250.jpg",
    desc: "主角James接手民宿，寻找失踪哥哥，并与美丽房客发展感情的3D开放世界恋爱养成游戏。",
    download: "https://pan.quark.cn/s/83852767b0b5"
  },
  {
    title: "游戏常用运行库合集",
    type: "工具",
    cover: "https://picsum.photos/seed/runtime/400/250.jpg",
    desc: "游戏必备运行库一键安装包，解决缺少dll、无法启动等90%问题。",
    download: "https://pan.quark.cn/s/4f7f78309de2?pwd=BU5G"
  },
  {
    title: "浣熊推币机",
    type: "休闲",
    cover: "https://picsum.photos/seed/raccooncoin/400/250.jpg",
    desc: "推币机 + 肉鸽卡组构建，150种道具，6名角色，超爽解压。",
    download: "https://pan.quark.cn/s/0624ed9c4b96"
  },
  {
    title: "灰烬之国",
    type: "动作",
    cover: "https://picsum.photos/seed/cinderia/400/250.jpg",
    desc: "黑暗童话风Roguelite动作游戏，4角色+180技能，爽感战斗。",
    download: "https://pan.quark.cn/s/dc61e6bca6a5"
  },
  {
    title: "被勒索的主播",
    type: "恐怖",
    cover: "https://picsum.photos/seed/hackedstreamer/400/250.jpg",
    desc: "真人演出互动电影，50+决策点，5种结局，悬疑窒息。",
    download: "https://pan.quark.cn/s/b6490b0fad4e"
  },
  {
    title: "太空中的妈妈被盗",
    type: "冒险",
    cover: "https://picsum.photos/seed/spacemom/400/250.jpg",
    desc: "太空探索解谜，寻找妈妈与朋友，剧情向冒险。",
    download: "https://pan.quark.cn/s/a63341762d27"
  },
  {
    title: "钢铁雄心4",
    type: "策略",
    cover: "https://picsum.photos/seed/hoi4/400/250.jpg",
    desc: "二战史诗级战略游戏，含全DLC，历史由你改写。",
    download: "https://pan.quark.cn/s/f995c036371a"
  },
  {
    title: "边境检察官",
    type: "模拟",
    cover: "https://picsum.photos/seed/border/400/250.jpg",
    desc: "边防检察官模拟，查证件、缉私、枪战、追缉，高压体验。",
    download: "https://pan.quark.cn/s/d9acffb363e8"
  },
  {
    title: "宗门起源",
    type: "冒险",
    cover: "https://picsum.photos/seed/zongmen/400/250.jpg",
    desc: "开放世界修仙，建宗门、收弟子、闯江湖、抢地盘。",
    download: "https://pan.quark.cn/s/5d5e9b79727e"
  },
  {
    title: "纯白和弦（内置作弊）",
    type: "卡牌",
    cover: "https://picsum.photos/seed/whitechord/400/250.jpg",
    desc: "歌剧少女养成卡牌手游，内置作弊菜单，爽玩全内容。",
    download: "https://pan.quark.cn/s/25adef09202d"
  },
  {
    title: "饿殍：明末千里行（解锁版）",
    type: "剧情",
    cover: "https://picsum.photos/seed/epiao/400/250.jpg",
    desc: "明末黑暗剧情向AVG，双向救赎故事，全内容解锁。",
    download: "https://pan.quark.cn/s/9be2f2f79a24"
  },
  {
    title: "大富翁 1-11 合集",
    type: "休闲",
    cover: "https://picsum.photos/seed/richman/400/250.jpg",
    desc: "经典大富翁全系列合集，童年回忆一次性集齐。",
    download: "https://pan.quark.cn/s/0c0391e7919c"
  },
  {
    title: "千恋＊万花",
    type: "休闲",
    cover: "https://picsum.photos/seed/senren/400/250.jpg",
    desc: "柚子社神作，和风恋爱冒险，全语音全CG。",
    download: "https://pan.quark.cn/s/d06c56e05433"
  },
  {
    title: "中国式网游",
    type: "模拟",
    cover: "https://picsum.photos/seed/chinesemmo/400/250.jpg",
    desc: "模拟国产网游氪金人生，超多结局，爆笑玩梗。",
    download: "https://pan.quark.cn/s/96047cc5daa0"
  },
  {
    title: "夏日美女：欧巴请和我恋爱吧",
    type: "休闲",
    cover: "https://picsum.photos/seed/summerlove/400/250.jpg",
    desc: "乡村恋爱冒险，5位女主，多结局，沉浸式第一人称。",
    download: "https://pan.quark.cn/s/d597200fb40d?pwd=8XmX"
  },
  {
    title: "杀戮尖塔2",
    type: "策略",
    cover: "https://picsum.photos/seed/sts2/400/250.jpg",
    desc: "神作卡牌续作，单机+联机，送修改器，免安装中文版。",
    download: "https://pan.quark.cn/s/de756bf7a5d2"
  },
  {
    title: "灾后修复师",
    type: "模拟",
    cover: "https://picsum.photos/seed/roadcraft/400/250.jpg",
    desc: "灾后重建模拟，40+工程车辆，8张地图，支持多人联机。",
    download: "https://pan.quark.cn/s/d6eac4483e7d?pwd=P5sV"
  },
  {
    title: "攀爬动物：在一起",
    type: "休闲",
    cover: "https://picsum.photos/seed/climberanimal/400/250.jpg",
    desc: "多人跑酷闯关，1-8人联机，跌倒重来，欢乐刺激。",
    download: "https://pan.quark.cn/s/849049828092?pwd=Azet"
  },
  {
    title: "美女，请别影响我成仙",
    type: "休闲",
    cover: "https://picsum.photos/seed/xiuxian/400/250.jpg",
    desc: "第一人称修仙，多位美女角色，多分支剧情。",
    download: "https://pan.quark.cn/s/f51d2012a0be?pwd=e2PG"
  },
  {
    title: "死亡搁浅2：冥滩之上",
    type: "动作",
    cover: "https://picsum.photos/seed/deathstranding2/400/250.jpg",
    desc: "小岛秀夫神作续作，PC终极版，开放世界连接玩法。",
    download: "https://pan.quark.cn/s/f7e76ad59970?pwd=XdgQ"
  },
  {
    title: "刮个爽",
    type: "休闲",
    cover: "https://picsum.photos/seed/scratchy/400/250.jpg",
    desc: "刮刮乐减压游戏，自动挂机，财富狂飙，超上头。",
    download: "https://pan.quark.cn/s/09160ad8e6b7"
  }
];

// ======================
// DOM 元素
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
    gameList.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#aaa;font-size:18px;'>暂无资源</p>";
    return;
  }
  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.cover}" class="game-cover">
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <span class="game-type">${game.type}</span>
        <button class="download-btn" onclick="openDetail('${game.title}')">查看详情</button>
      </div>
    `;
    gameList.appendChild(card);
  });
}

// ======================
// 打开游戏详情弹窗（显示下载链接）
// ======================
function openDetail(gameTitle) {
  const game = games.find(g => g.title === gameTitle);
  if (!game) return;

  const modal = document.createElement("div");
  modal.style.cssText = `
    position:fixed; top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.85); z-index:9999;
    display:flex; align-items:center; justify-content:center;
    padding:20px; animation:fadeIn 0.3s;
  `;

  const box = document.createElement("div");
  box.style.cssText = `
    background:#12121a; max-width:700px; width:100%;
    border-radius:16px; padding:30px; position:relative;
    border:1px solid #00d1ff; color:#fff;
  `;

  box.innerHTML = `
    <h2 style="color:#00d1ff; margin-bottom:10px;">${game.title}</h2>
    <p style="color:#aaa; margin-bottom:20px;">【${game.type}】</p>
    <p style="line-height:1.7; margin-bottom:25px;">${game.desc}</p>
    <a href="${game.download}" target="_blank" style="display:inline-block; padding:12px 24px; background:linear-gradient(90deg,#00d1ff,#a82ffc); color:#fff; border-radius:30px; text-decoration:none; font-weight:bold;">立即下载</a>
    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;right:20px;top:20px;background:#222;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;">关闭</button>
  `;

  modal.appendChild(box);
  document.body.appendChild(modal);
  modal.onclick = (e) => e.target === modal && modal.remove();
}

// ======================
// 搜索
// ======================
searchInput.addEventListener("input", () => {
  const key = searchInput.value.toLowerCase();
  const arr = games.filter(g =>
    g.title.toLowerCase().includes(key) ||
    g.type.toLowerCase().includes(key)
  );
  renderGameList(arr);
  categoryBtns.forEach(b => b.classList.remove("active"));
  document.querySelector('.category-btn[data-type="all"]').classList.add("active");
});

// ======================
// 分类筛选
// ======================
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const t = btn.dataset.type;
    const arr = t === "all" ? games : games.filter(g => g.type === t);
    renderGameList(arr);
  });
});

// ======================
// 下拉菜单联动
// ======================
dropdownLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const t = link.dataset.type;
    categoryBtns.forEach(b => {
      b.classList.toggle("active", b.dataset.type === t);
    });
    const arr = t === "all" ? games : games.filter(g => g.type === t);
    renderGameList(arr);
  });
});

// 首次加载
renderGameList(games);

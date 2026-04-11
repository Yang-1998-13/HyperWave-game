// ======================
// HyperWave 超波 - 游戏资源数据（21款完整版 · 修复所有语法错误）
// ======================
const games = [
  {
    title: "与你在一起",
    type: "休闲",
    cover: "https://picsum.photos/seed/yuniyiqizai/400/250",
    desc: "主角James接手民宿，寻找失踪哥哥，并与美丽房客发展感情的3D开放世界恋爱养成游戏。",
    download: "https://pan.quark.cn/s/83852767b0b5"
  },
  {
    title: "游戏常用运行库合集",
    type: "休闲",
    cover: "https://picsum.photos/seed/runtime/400/250",
    desc: "游戏必备运行库一键安装包，解决缺少dll、无法启动等90%问题。",
    download: "https://pan.quark.cn/s/4f7f78309de2?pwd=BU5G"
  },
  {
    title: "浣熊推币机",
    type: "休闲",
    cover: "https://picsum.photos/seed/raccooncoin/400/250",
    desc: "推币机 + 肉鸽卡组构建，150种道具，6名角色，超爽解压。",
    download: "https://pan.quark.cn/s/0624ed9c4b96"
  },
  {
    title: "灰烬之国",
    type: "动作",
    cover: "https://picsum.photos/seed/cinderia/400/250",
    desc: "黑暗童话风Roguelite动作游戏，4角色+180技能，爽感战斗。",
    download: "https://pan.quark.cn/s/dc61e6bca6a5"
  },
  {
    title: "被勒索的主播",
    type: "恐怖",
    cover: "https://picsum.photos/seed/hackedstreamer/400/250",
    desc: "真人演出互动电影，50+决策点，5种结局，悬疑窒息。",
    download: "https://pan.quark.cn/s/b6490b0fad4e"
  },
  {
    title: "太空中的妈妈被盗",
    type: "冒险",
    cover: "https://picsum.photos/seed/spacemom/400/250",
    desc: "太空探索解谜，寻找妈妈与朋友，剧情向冒险。",
    download: "https://pan.quark.cn/s/a63341762d27"
  },
  {
    title: "钢铁雄心4",
    type: "动作",
    cover: "https://picsum.photos/seed/hoi4/400/250",
    desc: "二战史诗级战略游戏，含全DLC，历史由你改写。",
    download: "https://pan.quark.cn/s/f995c036371a"
  },
  {
    title: "边境检察官",
    type: "休闲",
    cover: "https://picsum.photos/seed/border/400/250",
    desc: "边防检察官模拟，查证件、缉私、枪战、追缉，高压体验。",
    download: "https://pan.quark.cn/s/d9acffb363e8"
  },
  {
    title: "宗门起源",
    type: "冒险",
    cover: "https://picsum.photos/seed/zongmen/400/250",
    desc: "开放世界修仙，建宗门、收弟子、闯江湖、抢地盘。",
    download: "https://pan.quark.cn/s/5d5e9b79727e"
  },
  {
    title: "纯白和弦（内置作弊）",
    type: "休闲",
    cover: "https://picsum.photos/seed/whitechord/400/250",
    desc: "歌剧少女养成卡牌手游，内置作弊菜单，爽玩全内容。",
    download: "https://pan.quark.cn/s/25adef09202d"
  },
  {
    title: "饿殍：明末千里行（解锁版）",
    type: "冒险",
    cover: "https://picsum.photos/seed/epiao/400/250",
    desc: "明末黑暗剧情向AVG，双向救赎故事，全内容解锁。",
    download: "https://pan.quark.cn/s/9be2f2f79a24"
  },
  {
    title: "大富翁 1-11 合集",
    type: "休闲",
    cover: "https://picsum.photos/seed/richman/400/250",
    desc: "经典大富翁全系列合集，童年回忆一次性集齐。",
    download: "https://pan.quark.cn/s/0c0391e7919c"
  },
  {
    title: "千恋*万花", // 替换全角＊为半角*，避免转义冲突
    type: "休闲",
    cover: "https://picsum.photos/seed/senren/400/250",
    desc: "柚子社神作，和风恋爱冒险，全语音全CG。",
    download: "https://pan.quark.cn/s/d06c56e05433"
  },
  {
    title: "中国式网游",
    type: "休闲",
    cover: "https://picsum.photos/seed/chinesemmo/400/250",
    desc: "模拟国产网游氪金人生，超多结局，爆笑玩梗。",
    download: "https://pan.quark.cn/s/96047cc5daa0"
  },
  {
    title: "夏日美女：欧巴请和我恋爱吧",
    type: "休闲",
    cover: "https://picsum.photos/seed/summerlove/400/250",
    desc: "乡村恋爱冒险，5位女主，多结局，沉浸式第一人称。",
    download: "https://pan.quark.cn/s/d597200fb40d?pwd=8XmX"
  },
  {
    title: "杀戮尖塔2",
    type: "休闲",
    cover: "https://picsum.photos/seed/sts2/400/250",
    desc: "神作卡牌续作，单机+联机，送修改器，免安装中文版。",
    download: "https://pan.quark.cn/s/de756bf7a5d2"
  },
  {
    title: "灾后修复师",
    type: "休闲",
    cover: "https://picsum.photos/seed/roadcraft/400/250",
    desc: "灾后重建模拟，40+工程车辆，8张地图，支持多人联机。",
    download: "https://pan.quark.cn/s/d6eac4483e7d?pwd=P5sV"
  },
  {
    title: "攀爬动物：在一起",
    type: "休闲",
    cover: "https://picsum.photos/seed/climberanimal/400/250",
    desc: "多人跑酷闯关，1-8人联机，跌倒重来，欢乐刺激。",
    download: "https://pan.quark.cn/s/849049828092?pwd=Azet"
  },
  {
    title: "美女，请别影响我成仙",
    type: "休闲",
    cover: "https://picsum.photos/seed/xiuxian/400/250",
    desc: "第一人称修仙，多位美女角色，多分支剧情。",
    download: "https://pan.quark.cn/s/f51d2012a0be?pwd=e2PG"
  },
  {
    title: "死亡搁浅2：冥滩之上",
    type: "动作",
    cover: "https://picsum.photos/seed/deathstranding2/400/250",
    desc: "小岛秀夫神作续作，PC终极版，开放世界连接玩法。",
    download: "https://pan.quark.cn/s/f7e76ad59970?pwd=XdgQ"
  },
  {
    title: "刮个爽",
    type: "休闲",
    cover: "https://picsum.photos/seed/scratchy/400/250",
    desc: "刮刮乐减压游戏，自动挂机，财富狂飙，超上头。",
    download: "https://pan.quark.cn/s/09160ad8e6b7"
  }
];

// ======================
// DOM 元素获取
// ======================
const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("search");
const categoryBtns = document.querySelectorAll(".category-btn");
const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

// ======================
// 渲染游戏列表（修复语法错误）
// ======================
function renderGameList(filteredGames) {
  gameList.innerHTML = "";
  if (!filteredGames || filteredGames.length === 0) {
    gameList.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 18px; padding: 50px 0;'>暂无相关资源</p>";
    return;
  }
  filteredGames.forEach(function(game) { // 替换箭头函数为普通函数，兼容低版本浏览器
    const card = document.createElement("div");
    card.className = "game-card";
    // 修复字符串拼接的引号冲突
    card.innerHTML = '\
      <img src="' + game.cover + '" alt="' + game.title + '" class="game-cover" loading="lazy">\
      <div class="game-info">\
        <h3 class="game-title">' + game.title + '</h3>\
        <span class="game-type">' + game.type + '</span>\
        <button class="download-btn" onclick="openDetail(\'' + game.title.replace(/'/g, "\\'") + '\')">查看详情</button>\
      </div>\
    ';
    gameList.appendChild(card);
  });
}

// ======================
// 打开游戏详情弹窗（修复语法错误）
// ======================
function openDetail(gameTitle) {
  const game = games.find(function(g) { // 替换箭头函数为普通函数
    return g.title === gameTitle;
  });
  if (!game) return;

  // 移除已存在的弹窗
  const existingModal = document.querySelector(".game-detail-modal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.className = "game-detail-modal";
  modal.style.cssText = "\
    position: fixed;\
    top: 0;\
    left: 0;\
    width: 100%;\
    height: 100%;\
    background: rgba(0, 0, 0, 0.9);\
    z-index: 99999;\
    display: flex;\
    align-items: center;\
    justify-content: center;\
    padding: 20px;\
    animation: fadeIn 0.3s ease;\
  ";

  const box = document.createElement("div");
  box.style.cssText = "\
    background: var(--bg-card);\
    max-width: 700px;\
    width: 100%;\
    border-radius: 20px;\
    padding: 35px;\
    position: relative;\
    border: 1px solid rgba(0, 209, 255, 0.5);\
    box-shadow: 0 0 40px rgba(0, 209, 255, 0.3);\
  ";

  box.innerHTML = '\
    <h2 style="font-size: 28px; font-weight: 900; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px;">' + game.title + '</h2>\
    <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 20px;">【' + game.type + '】</p>\
    <p style="color: var(--text-primary); line-height: 1.8; margin-bottom: 30px; font-size: 16px;">' + game.desc + '</p>\
    <a href="' + game.download + '" target="_blank" style="display: inline-block; padding: 14px 30px; background: var(--accent-gradient); color: var(--text-primary); border-radius: 30px; text-decoration: none; font-weight: 700; font-size: 16px; transition: all 0.3s ease;">立即下载</a>\
    <button onclick="this.closest(\'.game-detail-modal\').remove()" style="position: absolute; right: 25px; top: 25px; background: rgba(255,255,255,0.1); color: var(--text-primary); border: 1px solid rgba(0,209,255,0.3); padding: 8px 15px; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;">关闭</button>\
  ';

  modal.appendChild(box);
  document.body.appendChild(modal);

  // 点击遮罩关闭
  modal.addEventListener("click", function(e) {
    if (e.target === modal) modal.remove();
  });

  // 关闭按钮hover效果
  const closeBtn = box.querySelector("button");
  closeBtn.addEventListener("mouseenter", function() {
    closeBtn.style.background = "rgba(0,209,255,0.2)";
  });
  closeBtn.addEventListener("mouseleave", function() {
    closeBtn.style.background = "rgba(255,255,255,0.1)";
  });

  // 下载按钮hover效果
  const downloadBtn = box.querySelector("a");
  downloadBtn.addEventListener("mouseenter", function() {
    downloadBtn.style.transform = "translateY(-2px)";
    downloadBtn.style.boxShadow = "0 0 20px rgba(0,209,255,0.5)";
  });
  downloadBtn.addEventListener("mouseleave", function() {
    downloadBtn.style.transform = "translateY(0)";
    downloadBtn.style.boxShadow = "none";
  });
}

// ======================
// 搜索功能（修复语法错误）
// ======================
searchInput.addEventListener("input", function() {
  const keyword = searchInput.value.toLowerCase().trim();
  const filteredGames = games.filter(function(game) {
    return game.title.toLowerCase().includes(keyword) || game.type.toLowerCase().includes(keyword);
  });
  renderGameList(filteredGames);
  // 同步分类按钮状态
  categoryBtns.forEach(function(btn) {
    btn.classList.remove("active");
  });
  document.querySelector('.category-btn[data-type="all"]').classList.add("active");
});

// ======================
// 分类筛选功能（修复语法错误）
// ======================
categoryBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // 切换按钮激活状态
    categoryBtns.forEach(function(b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    
    const type = btn.dataset.type;
    const filteredGames = type === "all" ? games : games.filter(function(game) {
      return game.type === type;
    });
    
    renderGameList(filteredGames);
  });
});

// ======================
// 下拉菜单联动筛选（修复语法错误）
// ======================
dropdownLinks.forEach(function(link) {
  链接.addEventListener("click", function(e) {
    e.preventDefault();
    const type = 链接.dataset.type;
    
    // 同步分类按钮状态
    categoryBtns.forEach(function(btn) {
      btn.classList.toggle("active", btn.dataset.type === type);
    });
    
    // 筛选游戏
    const filteredGames = type === "all" ? games : games.filter(function(game) {
      return game.type === type;
    });
    
    renderGameList(filteredGames);
  });
});

// ======================
// 页面加载完成后，初始渲染全部游戏
// ======================
document.addEventListener("DOMContentLoaded", function() {
  renderGameList(games);
});

// 备用：直接渲染（防止DOMContentLoaded未触发）
renderGameList(games);

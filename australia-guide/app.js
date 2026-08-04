/* 慢游澳洲 · 地图标注与交互动效 */

const PLACES = {
  sydney: {
    title: "悉尼标注点",
    center: [-33.86, 151.21],
    zoom: 11,
    points: [
      {
        name: "悉尼歌剧院",
        lat: -33.8568,
        lng: 151.2153,
        day: "Day 1",
        tip: "外观打卡 + 海港散步；导览可提前网上预约。",
      },
      {
        name: "海港大桥",
        lat: -33.8523,
        lng: 151.2108,
        day: "Day 1",
        tip: "从 Circular Quay 或对面 Milsons Point 远眺即可，不必攀桥。",
      },
      {
        name: "环形码头",
        lat: -33.8614,
        lng: 151.2108,
        day: "Day 1–2",
        tip: "渡轮枢纽；去 Manly 从这里出发。",
      },
      {
        name: "皇家植物园",
        lat: -33.8642,
        lng: 151.2166,
        day: "Day 1",
        tip: "走到 Mrs Macquarie’s Chair 看歌剧院侧影，黄昏很美。",
      },
      {
        name: "Manly 海滩",
        lat: -33.7969,
        lng: 151.2875,
        day: "Day 2",
        tip: "渡轮约 30 分钟；适合轻松半日。",
      },
      {
        name: "蓝山 · 三姐妹峰",
        lat: -33.732,
        lng: 150.312,
        day: "Day 3",
        tip: "建议报一日游；山上比市区凉，带件外套。",
      },
    ],
  },
  cairns: {
    title: "凯恩斯 · 大堡礁相关",
    center: [-16.85, 145.75],
    zoom: 10,
    points: [
      {
        name: "凯恩斯滨海长廊",
        lat: -16.9203,
        lng: 145.771,
        day: "Day 4",
        tip: "市区落脚点；傍晚散步、泳池休息。",
      },
      {
        name: "外礁出海方向（示意）",
        lat: -16.7589,
        lng: 145.9733,
        day: "Day 5",
        tip: "看珊瑚优先选外礁一日游；通常比近岸/绿岛观感更好。",
      },
      {
        name: "库兰达 Kuranda",
        lat: -16.8197,
        lng: 145.6375,
        day: "Day 6",
        tip: "Skyrail 进山 + 古董火车回城，节奏很舒服。",
      },
      {
        name: "棕榈湾 Palm Cove",
        lat: -16.745,
        lng: 145.6706,
        day: "Day 7",
        tip: "真正的放空日：咖啡、沙滩、树荫。",
      },
    ],
  },
  whitsundays: {
    title: "圣灵群岛 · 可选升级（非默认）",
    center: [-20.27, 148.85],
    zoom: 10,
    points: [
      {
        name: "艾尔利海滩 Airlie Beach",
        lat: -20.2677,
        lng: 148.7169,
        day: "基地",
        tip: "圣灵群岛大陆门户；多数船班从这里出发。",
      },
      {
        name: "白天堂沙滩 Whitehaven",
        lat: -20.2833,
        lng: 149.0,
        day: "一日游",
        tip: "98% 硅砂白沙滩；无普通轮渡，必须报船/帆船/水上飞机。",
      },
      {
        name: "Hill Inlet 观景台",
        lat: -20.25,
        lng: 149.0167,
        day: "一日游",
        tip: "潮汐形成的漩涡白沙俯瞰；很多团会含短徒步。",
      },
      {
        name: "汉密尔顿岛（可选）",
        lat: -20.3484,
        lng: 148.9517,
        day: "可选",
        tip: "有机场；适合度假村派，但花费更高。",
      },
    ],
  },
  melbourne: {
    title: "墨尔本标注点（含使徒岩）",
    center: [-37.95, 144.9],
    zoom: 8,
    points: [
      {
        name: "弗林德斯街车站",
        lat: -37.8183,
        lng: 144.9671,
        day: "Day 9",
        tip: "市区慢逛起点；对面长椅是经典打卡位。",
      },
      {
        name: "Hosier Lane 涂鸦巷",
        lat: -37.8166,
        lng: 144.9691,
        day: "Day 9",
        tip: "街头艺术拍照点，人多但值得路过。",
      },
      {
        name: "联邦广场 / NGV",
        lat: -37.8179,
        lng: 144.9691,
        day: "Day 9",
        tip: "文化广场；可进国家美术馆逛一圈。",
      },
      {
        name: "皇家拱廊",
        lat: -37.8154,
        lng: 144.964,
        day: "Day 9",
        tip: "维多利亚时代拱廊，适合慢慢逛。",
      },
      {
        name: "维多利亚市场",
        lat: -37.8076,
        lng: 144.9568,
        day: "Day 9",
        tip: "买零食和伴手礼；注意周一通常休市。",
      },
      {
        name: "十二门徒岩 ★朋友强推",
        lat: -38.6657,
        lng: 143.1047,
        day: "Day 10",
        tip: "现场远胜照片；一日游约12小时；观景台免费，日落/日出最美。",
      },
      {
        name: "菲利普岛企鹅",
        lat: -38.4833,
        lng: 145.2333,
        day: "Day 11",
        tip: "傍晚看小企鹅归巢；海边风大，带外套。",
      },
    ],
  },
  overview: {
    title: "12 天路线总览（默认不含圣灵）",
    center: [-27.5, 145],
    zoom: 4,
    points: [
      {
        name: "悉尼（Day 1–4）",
        lat: -33.8688,
        lng: 151.2093,
        day: "起点",
        tip: "海港慢逛 + 蓝山。",
      },
      {
        name: "凯恩斯（Day 5–8）",
        lat: -16.9186,
        lng: 145.7781,
        day: "中段",
        tip: "大堡礁外礁一日游（看珊瑚首选）。",
      },
      {
        name: "圣灵群岛（可选）",
        lat: -20.2677,
        lng: 148.7169,
        day: "升级",
        tip: "白天堂沙滩；轻松12天不建议与凯恩斯硬塞同行。",
      },
      {
        name: "墨尔本（Day 9–12）",
        lat: -37.8136,
        lng: 144.9631,
        day: "收尾",
        tip: "市区巷弄 + 十二门徒岩 + 返程。",
      },
    ],
  },
};

let map;
let layerGroup;
let currentKey = "sydney";

function createIcon(kind) {
  return L.divIcon({
    className: "",
    html: `<div class="pin ${kind === "sea" ? "sea" : ""}"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -24],
  });
}

function renderLegend(key) {
  const data = PLACES[key];
  const legend = document.getElementById("map-legend");
  legend.innerHTML = `
    <h3>${data.title}</h3>
    <ol>
      ${data.points
        .map(
          (p, i) => `
        <li data-idx="${i}">
          <strong>${p.name}</strong>
          <span>${p.day} · ${p.tip}</span>
        </li>`
        )
        .join("")}
    </ol>
  `;

  legend.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const idx = Number(li.dataset.idx);
      const p = data.points[idx];
      map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), key === "overview" ? 6 : 12), {
        duration: 0.8,
      });
      legend.querySelectorAll("li").forEach((el) => el.classList.remove("active"));
      li.classList.add("active");
    });
  });
}

function showCity(key) {
  currentKey = key;
  const data = PLACES[key];
  if (layerGroup) layerGroup.clearLayers();
  else layerGroup = L.layerGroup().addTo(map);

  const kind = key === "overview" ? "sea" : "coral";
  data.points.forEach((p) => {
    const marker = L.marker([p.lat, p.lng], { icon: createIcon(kind) }).addTo(layerGroup);
    marker.bindPopup(`<strong>${p.name}</strong>${p.day}<br/>${p.tip}`);
  });

  map.setView(data.center, data.zoom);
  renderLegend(key);

  document.querySelectorAll(".map-tab").forEach((btn) => {
    const active = btn.dataset.map === key;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function initMap() {
  map = L.map("leaflet-map", {
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(map);

  showCity("sydney");

  // 路径折线（总览时更直观）
  document.querySelectorAll(".map-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      showCity(btn.dataset.map);
      if (btn.dataset.map === "overview") {
        const latlngs = [
          PLACES.overview.points[0],
          PLACES.overview.points[1],
          PLACES.overview.points[3],
        ].map((p) => [p.lat, p.lng]);
        L.polyline(latlngs, {
          color: "#0a7c8c",
          weight: 3,
          dashArray: "8 8",
          opacity: 0.85,
        }).addTo(layerGroup);
      }
    });
  });

  // 修复切换显示时瓦片空白
  setTimeout(() => map.invalidateSize(), 200);
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();
  initReveal();
});

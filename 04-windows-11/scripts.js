const taskBarItems = [
  {
    imgSrc: "./assets/images/app-store.png",
    altText: "app-store",
  },
  {
    imgSrc: "./assets/images/firefox.png",
    altText: "firefox",
  },
  {
    imgSrc: "./assets/images/telegram.png",
    altText: "telegram",
  },
  {
    imgSrc: "./assets/images/spotify.png",
    altText: "spotify",
  },
  {
    imgSrc: "./assets/images/photoshop.png",
    label: "Photoshop",
  },
];

const desktopItems = [
  {
    imgSrc: "./assets/images/bin.png",
    label: "Recycle Bin",
  },
  {
    imgSrc: "./assets/images/microsoft-edge.png",
    label: "Microsoft Edge",
  },
  {
    imgSrc: "./assets/images/spotify.png",
    label: "Spotify",
  },
  {
    imgSrc: "./assets/images/firefox.png",
    label: "Firefox",
  },
  {
    imgSrc: "./assets/images/minecraft-icon.png",
    label: "Minecraft",
  },
  {
    imgSrc: "./assets/images/photoshop.png",
    label: "Photoshop",
  },
  {
    imgSrc: "./assets/images/google-chrome-icon.png",
    label: "Google Chrome",
  },
];

const pinnedApps = [
  {
    imgSrc: "./assets/images/settings-icon.png",
    label: "Settings",
  },
  {
    imgSrc: "./assets/images/steam-icon.png",
    label: "Steam",
  },
  {
    imgSrc: "./assets/images/discord-icon.png",
    label: "Discord",
  },
  {
    imgSrc: "./assets/images/firefox.png",
    label: "Firefox",
  },
  {
    imgSrc: "./assets/images/notepad--plus-plus.icon.png",
    label: "Notepad++",
  },
  {
    imgSrc: "./assets/images/minecraft-icon.png",
    label: "Minecraft",
  },
  {
    imgSrc: "./assets/images/photoshop.png",
    label: "Photoshop",
  },
  {
    imgSrc: "./assets/images/google-chrome-icon.png",
    label: "Google Chrome",
  },
];

const recommendedApps = [
  {
    imgSrc: "./assets/images/bin.png",
    label: "Recycle Bin",
  },
  {
    imgSrc: "./assets/images/word-document-icon.png",
    label: "Building yout own website",
  },
  {
    imgSrc: "./assets/images/xbox-icon.png",
    label: "Xbox",
  },
  {
    imgSrc: "./assets/images/firefox.png",
    label: "Firefox",
  },
  {
    imgSrc: "./assets/images/word-document-icon.png",
    label: "Network protocols",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const taskBar = document.getElementById("taskbar");
  const startButton = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");
  const pinnedAppsGrid = document.getElementById("pinned-apps-grid");
  const recommendedAppsGrid = document.getElementById("recommended-apps-grid");

  startButton.addEventListener("click", () => {
    startMenu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!startMenu.contains(event.target) && event.target !== startButton) {
      startMenu.classList.remove("active");
    }
  });

  function populateTaskBar() {
    taskBarItems.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("taskbar-item");

      const div = document.createElement("div");
      div.classList.add("taskbar-icon");

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.altText;

      div.appendChild(img);
      li.appendChild(div);
      taskBar.appendChild(li);
    });
  }

  function populateDesktop() {
    desktopItems.forEach((item) => {
      const desktopItem = document.createElement("div");
      desktopItem.classList.add("desktop-item");

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.label + " Image";

      const span = document.createElement("span");
      span.textContent = item.label;

      desktopItem.appendChild(img);
      desktopItem.appendChild(span);
      desktop.appendChild(desktopItem);
    });
  }

  function populateStartMenuApps(list, container) {
    list.forEach((item) => {
      const pinnedApp = document.createElement("div");
      pinnedApp.classList.add("start-item");

      const img = document.createElement("img");
      img.src = item.imgSrc;
      img.alt = item.label + " Image";

      const span = document.createElement("span");
      span.textContent = item.label;

      pinnedApp.appendChild(img);
      pinnedApp.appendChild(span);

      container.appendChild(pinnedApp);
    });
  }

  populateTaskBar();
  populateDesktop();

  populateStartMenuApps(pinnedApps, pinnedAppsGrid);
  populateStartMenuApps(recommendedApps, recommendedAppsGrid);
});

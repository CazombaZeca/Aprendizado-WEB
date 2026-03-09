const data = {
  userName: "João",
  niche: "Finanças",
  courseProgress: 60,
  postTitle: "Monetize seu App em",
  postLocation: "Angola",
  author: "Pedro K.",
  comments: 35,
  projectTitle: "Solução Desemprergo Luanda",
  projectProgress: 62
};

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const joinBtn = document.getElementById("joinBtn");

function renderDashboard() {
  document.getElementById("welcomeName").textContent = `Bem-vindo, ${data.userName}!`;
  document.getElementById("welcomeNiche").textContent = `Nicho: ${data.niche}`;

  document.getElementById("mainProgressBar").style.width = `${data.courseProgress}%`;
  document.getElementById("mainProgressValue").textContent = `${data.courseProgress}%`;

  document.getElementById("footerProgressText").textContent = `${data.courseProgress}%`;
  document.getElementById("footerProgressStrong").textContent = `${data.courseProgress}%`;

  document.getElementById("postTitle").textContent = data.postTitle;
  document.getElementById("postLocation").textContent = data.postLocation;
  document.getElementById("postAuthor").textContent = `Autor: ${data.author}`;
  document.getElementById("commentCount").textContent = `(${data.comments})`;

  document.getElementById("projectTitle").textContent = data.projectTitle;
  document.getElementById("projectProgressBar").style.width = `${data.projectProgress}%`;
}

function openSidebar() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open");
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeSidebar();
  }
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    loadMoreBtn.textContent = "Mais conteúdos em breve...";
    loadMoreBtn.disabled = true;
  });
}

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    joinBtn.textContent = "Entrou";
    joinBtn.disabled = true;
    joinBtn.style.opacity = "0.85";
  });
}

document.addEventListener("DOMContentLoaded", renderDashboard);
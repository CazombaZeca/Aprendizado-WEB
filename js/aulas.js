const lessonsData = {
  featuredCourse: {
    title: "Marketing Básico",
    progress: 80
  },
  secondaryCourse: {
    title: "Programação Avancáda",
    progress: 20
  },
  totalProgress: 60,
  certificatesCompleted: 2
};

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const featuredCourseTitle = document.getElementById("featuredCourseTitle");
const featuredCourseProgress = document.getElementById("featuredCourseProgress");
const featuredCoursePercent = document.getElementById("featuredCoursePercent");

const secondaryCourseTitle = document.getElementById("secondaryCourseTitle");
const secondaryCourseProgress = document.getElementById("secondaryCourseProgress");
const secondaryCoursePercent = document.getElementById("secondaryCoursePercent");

const footerMiniPercent = document.getElementById("footerMiniPercent");
const footerProgressText = document.getElementById("footerProgressText");
const certificateTitle = document.getElementById("certificateTitle");

const resumeBtn = document.getElementById("resumeBtn");
const playBtn = document.getElementById("playBtn");
const certificateBtn = document.getElementById("certificateBtn");
const commentsBtn = document.getElementById("commentsBtn");

function renderLessonsPage() {
  featuredCourseTitle.textContent = lessonsData.featuredCourse.title;
  featuredCourseProgress.style.width = `${lessonsData.featuredCourse.progress}%`;
  featuredCoursePercent.textContent = `${lessonsData.featuredCourse.progress}%`;

  secondaryCourseTitle.textContent = lessonsData.secondaryCourse.title;
  secondaryCourseProgress.style.width = `${lessonsData.secondaryCourse.progress}%`;
  secondaryCoursePercent.textContent = `${lessonsData.secondaryCourse.progress}%`;

  footerMiniPercent.textContent = `${lessonsData.totalProgress}%`;
  footerProgressText.textContent = `${lessonsData.totalProgress}%`;
  certificateTitle.textContent = `Certificados: ${lessonsData.certificatesCompleted} Conclludós`;
}

function openSidebar() {
  if (!sidebar) return;
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  if (!sidebar) return;
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

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    resumeBtn.textContent = "A abrir aula...";
    resumeBtn.disabled = true;
    setTimeout(() => {
      resumeBtn.textContent = "Retomar Aula";
      resumeBtn.disabled = false;
    }, 1600);
  });
}

if (playBtn) {
  playBtn.addEventListener("click", () => {
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    setTimeout(() => {
      playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }, 1500);
  });
}

if (certificateBtn) {
  certificateBtn.addEventListener("click", () => {
    certificateBtn.style.opacity = "0.6";
    setTimeout(() => {
      certificateBtn.style.opacity = "1";
    }, 500);
  });
}

if (commentsBtn) {
  commentsBtn.addEventListener("click", () => {
    commentsBtn.style.opacity = "0.6";
    setTimeout(() => {
      commentsBtn.style.opacity = "1";
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", renderLessonsPage);
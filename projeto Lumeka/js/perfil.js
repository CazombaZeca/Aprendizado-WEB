const profileData = {
  name: "João Silva",
  role: "Dev em Luanda",
  tag: "Tech",
  solved: 100,
  progress: 60
};

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const profileName = document.getElementById("profileName");
const profileRole = document.getElementById("profileRole");
const profileTag = document.getElementById("profileTag");
const solvedPercent = document.getElementById("solvedPercent");
const footerProgressFill = document.getElementById("footerProgressFill");
const footerProgressValue = document.getElementById("footerProgressValue");
const editProfileBtn = document.getElementById("editProfileBtn");

function renderProfile() {
  profileName.textContent = profileData.name;
  profileRole.textContent = profileData.role;
  profileTag.textContent = profileData.tag;
  solvedPercent.textContent = `${profileData.solved}%`;
  footerProgressFill.style.width = `${profileData.progress}%`;
  footerProgressValue.textContent = `${profileData.progress}%`;
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

if (editProfileBtn) {
  editProfileBtn.addEventListener("click", () => {
    editProfileBtn.textContent = "A editar...";
    editProfileBtn.disabled = true;

    setTimeout(() => {
      editProfileBtn.textContent = "Editar Perfil";
      editProfileBtn.disabled = false;
    }, 1400);
  });
}

document.addEventListener("DOMContentLoaded", renderProfile);
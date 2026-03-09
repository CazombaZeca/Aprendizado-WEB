const communityData = {
  title: "Comunidade Finanças Angola",
  progress: 60,
  hotTopics: ["#Investímento", "#MercadoAnganlano", "#Fintech"],
  topics: [
    {
      type: "avatar",
      title: "Dicas ROI PMÊs",
      description: "Comentor do mês rure de liso untera",
      replies: 15,
      actionLabel: "Responder",
      actionClass: "blue",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      type: "date",
      title: "Evento Tech Luanda",
      description: "To men tonlaiigius a lǣmicius de ations sntela",
      replies: 15,
      actionLabel: "Inscrenber",
      actionClass: "green",
      day: "15/11"
    }
  ]
};

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const topicsList = document.getElementById("topicsList");
const hotTags = document.getElementById("hotTags");
const footerBarFill = document.getElementById("footerBarFill");
const footerProgressValue = document.getElementById("footerProgressValue");
const sidebarProgressText = document.getElementById("sidebarProgressText");
const newTopicBtn = document.getElementById("newTopicBtn");
const newQuestionText = document.getElementById("newQuestionText");

function createTopicCard(topic) {
  const article = document.createElement("article");
  article.className = "topic-card fade-in";

  let mediaBlock = "";

  if (topic.type === "avatar") {
    mediaBlock = `
      <div class="topic-avatar">
        <img src="${topic.avatar}" alt="${topic.title}">
      </div>
    `;
  } else {
    mediaBlock = `
      <div class="topic-date">
        <small>---</small>
        <span>${topic.day}</span>
      </div>
    `;
  }

  article.innerHTML = `
    <div class="topic-main">
      ${mediaBlock}
      <div class="topic-content">
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </div>
    </div>

    <div class="topic-side">
      <span class="replies">${topic.replies} replies</span>
      <button class="action-btn ${topic.actionClass}">${topic.actionLabel}</button>
    </div>
  `;

  const button = article.querySelector(".action-btn");
  button.addEventListener("click", () => {
    if (topic.actionLabel === "Responder") {
      button.textContent = "Respondido";
    } else {
      button.textContent = "Inscrito";
    }
    button.disabled = true;
    button.style.opacity = "0.85";
  });

  return article;
}

function renderTopics() {
  topicsList.innerHTML = "";
  communityData.topics.forEach((topic) => {
    topicsList.appendChild(createTopicCard(topic));
  });
}

function renderTags() {
  hotTags.innerHTML = "";
  communityData.hotTopics.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    hotTags.appendChild(span);
  });
}

function renderPage() {
  document.getElementById("communityTitle").textContent = communityData.title;

  footerBarFill.style.width = `${communityData.progress}%`;
  footerProgressValue.textContent = `${communityData.progress}%`;
  sidebarProgressText.textContent = `${communityData.progress}%`;

  renderTopics();
  renderTags();
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

if (newTopicBtn) {
  newTopicBtn.addEventListener("click", () => {
    alert("Abrir formulário de nova dúvida.");
  });
}

if (newQuestionText) {
  newQuestionText.addEventListener("click", () => {
    alert("Abrir formulário de nova dúvida.");
  });
}

document.addEventListener("DOMContentLoaded", renderPage);
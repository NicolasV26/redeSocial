document.addEventListener("DOMContentLoaded", () => {
  let likesCount = 0;

  const likeBtn = document.getElementById("like-btn");
  const likeCountSpan = document.getElementById("like-count");
  const totalLikesText = document.getElementById("total-likes-text");
  const postMedia = document.getElementById("post-media");
  const bookmarkBtn = document.getElementById("bookmark-btn");

  // Atualiza o texto na tela
  function updateDOM() {
    likeCountSpan.textContent = likesCount;
    totalLikesText.textContent = `${likesCount} ${likesCount === 1 ? "curtida" : "curtidas"}`;
  }

  // Efeito de pulso no ícone do coração
  function triggerBounceAnimation() {
    const svg = likeBtn.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.3)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  // Adiciona a curtida
  function addLike() {
    likesCount++;
    likeBtn.classList.add("liked");
    triggerBounceAnimation();
    updateDOM();
  }

  // Evento de clique no botão do coração
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addLike();
  });

  // Evento de clique na foto principal
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Evento de clique no botão de salvar
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});
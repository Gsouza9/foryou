// ========================================
// ABERTURA DO SITE
// ========================================

const intro = document.getElementById("intro");
const mainSite = document.getElementById("mainSite");
const skipIntro = document.getElementById("skipIntro");

let introFinished = false;

function enterSite() {
  if (introFinished) return;

  introFinished = true;

  intro?.classList.add("hidden");
  mainSite?.classList.add("visible");

  startPetals();
}

skipIntro?.addEventListener("click", enterSite);

window.addEventListener("load", () => {
  setTimeout(enterSite, 6500);
});


// ========================================
// LINK DA MÚSICA
// ========================================

const spotifyLink =
  "https://open.spotify.com/intl-pt/track/4qS2KPWvsQzLvRa9oCHw41";


// ========================================
// CAMINHOS DAS FOTOS E VÍDEO
// ========================================

const photoPaths = {
  photo1: "assets/images/foto1.jpeg",
  photo2: "assets/images/foto2.jpeg",
  photo3: "assets/images/foto3.jpeg",
  photo4: "assets/images/foto4.jpeg",
  photo5: "assets/images/foto5.jpeg",
  photo6: "assets/images/foto6.jpeg"
};

const videoPath = "assets/videos/memoria.mp4";


// ========================================
// CONTEÚDO DAS CARTINHAS
// ========================================

const contents = {

  // ========================================
  // MENSAGEM
  // ========================================

  message: `
    <h2 id="modalTitle">Um pequeno carinho ♡</h2>

    <p>
      Às vezes, tudo o que a gente precisa é de um
      momento tranquilo, uma pausa no dia e algo
      que nos faça sorrir.
    </p>

    <br>

    <p>
      Espero que esse cantinho consiga deixar
      seu dia um pouquinho mais leve.
    </p>
  `,


  // ========================================
  // CARTINHA
  // ========================================

  letter: `
    <h2 id="modalTitle">Uma cartinha para você</h2>

    <p class="letter-text">
Oi, Amor!!! ♡

Antes de tudo quero q você saiba q fiz esse site com 
muito carinho e dedicação, fiz ele especialmente pra você.

Não é nenhuma declaração nem nada do tipo KSKSKSKS. Só quero que, quando vc entrar aqui, 
consiga esquecer um pouquinho dos problemas, dos dias difíceis, da correria e das cobranças
que a vida traz.

Você sempre me faz sorrir com uma mensagem engraçada, uma figurinha
ridícula de boa KKKKASJAKJ e com esse seu jeito perfeito que só você 
consegue ter. 

Quero que você saiba q sempre vou estar com você, seja pra te arrancar um sorriso,
te motivar, te elogiar qnd vc estiver se sentindo feia ou fedida KKAJSJKA e principalmente
celebrar cada conquista sua. ♡

Espero que goste KSKSKSSK pode ter certeza q fiz isso pensando em cada palavra,
cada parágrafo, cada sentimento q eu queria te proporcionar ao ler isso. 

Eu te adoro. ♡
    </p>
  `,


  // ========================================
  // MÚSICA DA SEMANA - SPOTIFY
  // ========================================

  music: `
    <h2 id="modalTitle">Música da semana ♫</h2>

    <div class="music-player">

      <div class="spotify-cover">
        <span class="music-note">♫</span>
      </div>

      <h3>YOU</h3>

      <p class="music-artist">
        Don Toliver
      </p>

      <p>
        Uma música para acompanhar
        esse pequeno cantinho. ♡
      </p>

      <a
        href="${spotifyLink}"
        target="_blank"
        rel="noopener noreferrer"
        class="spotify-button"
      >
        <span>♫</span>
        Ouvir no Spotify
      </a>

      <small>
        Música da semana ♡
      </small>

    </div>
  `,


  // ========================================
  // GALERIA: 6 FOTOS + 1 VÍDEO
  // ========================================

  gallery: `
    <h2 id="modalTitle">Pequenas memórias</h2>

    <p>
      Alguns momentos merecem ficar guardadinhos.
    </p>

    <div class="gallery">

      <figure>
        <img
          src="${photoPaths.photo1}"
          alt="Primeira memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          A mulher mais linda do mundo ♡
        </figcaption>
      </figure>


      <figure>
        <img
          src="${photoPaths.photo2}"
          alt="Segunda memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          Nosso primeiro encontro inesquecível!!!
        </figcaption>
      </figure>


      <figure>
        <img
          src="${photoPaths.photo3}"
          alt="Terceira memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          Mais um pedacinho de carinho
        </figcaption>
      </figure>


      <!-- QUARTA FOTO -->

      <figure>
        <img
          src="${photoPaths.photo4}"
          alt="Quarta memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          Nosso primeiro show juntos ♡
        </figcaption>
      </figure>


      <!-- QUINTA FOTO -->

      <figure>
        <img
          src="${photoPaths.photo5}"
          alt="Quinta memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          A fantasia mais linda de toda a festa!
        </figcaption>
      </figure>


      <!-- SEXTA FOTO -->

      <figure>
        <img
          src="${photoPaths.photo6}"
          alt="Sexta memória"
          data-gallery-image
          loading="lazy"
        >

        <figcaption>
          Para guardar com carinho ♡
        </figcaption>
      </figure>

    </div>


    <!-- VÍDEO -->

    <div class="memory-video">

      <h3 class="video-heading">
        Um momento em movimento ♡
      </h3>

      <video
        id="memoryVideo"
        class="memory-video-player"
        controls
        playsinline
        preload="metadata"
      >
        <source
          src="assets/videos/memoria.mp4"
          type="video/mp4"
        >

        Seu navegador não conseguiu reproduzir este vídeo.
      </video>

      <p class="video-caption">
        Mais uma lembrança para guardar com carinho.
      </p>

    </div>
  `
};


// ========================================
// CONTROLE DAS JANELAS
// ========================================

const modalOverlay =
  document.getElementById("modalOverlay");

const modalContent =
  document.getElementById("modalContent");

const closeModal =
  document.getElementById("closeModal");

let previousFocus = null;


function openModal(type, trigger) {
  const content = contents[type];

  if (!content || !modalOverlay || !modalContent) return;

  previousFocus = trigger || document.activeElement;

  modalContent.innerHTML = content;

  modalOverlay.classList.add("open");

  modalOverlay.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  closeModal?.focus();

  if (type === "gallery") {
    initializeGallery();

    const video = modalContent.querySelector("#memoryVideo");

    if (video) {
      video.addEventListener("error", () => {
        console.error(
          "Erro ao carregar o vídeo:",
          video.error,
          video.currentSrc
        );
      }, { once: true });

      video.addEventListener("loadedmetadata", () => {
        console.log("Vídeo carregado com sucesso!");
      }, { once: true });

      video.load();
    }
  }
}


function hideModal() {
  if (!modalOverlay?.classList.contains("open")) return;

  const video = modalContent?.querySelector("video");

  if (video) {
    video.pause();

    try {
      video.currentTime = 0;
    } catch (error) {
      console.warn("Erro ao reiniciar vídeo:", error);
    }
  }

  closeLightbox();

  modalOverlay.classList.remove("open");

  modalOverlay.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (
    previousFocus &&
    typeof previousFocus.focus === "function"
  ) {
    previousFocus.focus();
  }
}


// ========================================
// CLIQUE NAS CARTINHAS
// ========================================

document.querySelectorAll("[data-modal]").forEach((card) => {

  card.addEventListener("click", () => {
    const type = card.dataset.modal;
    openModal(type, card);
  });

  card.addEventListener("keydown", (event) => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      const type = card.dataset.modal;

      openModal(type, card);
    }

  });

});


// ========================================
// BOTÃO FECHAR
// ========================================

closeModal?.addEventListener("click", hideModal);


modalOverlay?.addEventListener("click", (event) => {

  if (event.target === modalOverlay) {
    hideModal();
  }

});


// ========================================
// VISUALIZADOR DE FOTOS
// ========================================

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxClose =
  document.getElementById("lightboxClose");

const lightboxPrev =
  document.getElementById("lightboxPrev");

const lightboxNext =
  document.getElementById("lightboxNext");

const lightboxCounter =
  document.getElementById("lightboxCounter");

let galleryImages = [];

let currentImageIndex = 0;


function initializeGallery() {

  galleryImages = Array.from(
    modalContent.querySelectorAll("[data-gallery-image]")
  );

  galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {
      openLightbox(index);
    });

    image.setAttribute("tabindex", "0");

    image.addEventListener("keydown", (event) => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openLightbox(index);
      }

    });

  });

}


function openLightbox(index) {

  if (!galleryImages.length || !lightbox) return;

  currentImageIndex = index;

  updateLightbox();

  lightbox.classList.add("open");

  lightbox.setAttribute("aria-hidden", "false");

}


function updateLightbox() {

  const image = galleryImages[currentImageIndex];

  if (!image || !lightboxImage) return;

  lightboxImage.src = image.src;

  lightboxImage.alt = image.alt;

  if (lightboxCounter) {
    lightboxCounter.textContent =
      `${currentImageIndex + 1} de ${galleryImages.length}`;
  }

}


function nextImage() {

  if (!galleryImages.length) return;

  currentImageIndex =
    (currentImageIndex + 1) % galleryImages.length;

  updateLightbox();

}


function previousImage() {

  if (!galleryImages.length) return;

  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) %
    galleryImages.length;

  updateLightbox();

}


function closeLightbox() {

  if (!lightbox?.classList.contains("open")) return;

  lightbox.classList.remove("open");

  lightbox.setAttribute("aria-hidden", "true");

  if (lightboxImage) {
    lightboxImage.src = "";
  }

}


lightboxClose?.addEventListener("click", closeLightbox);

lightboxNext?.addEventListener("click", nextImage);

lightboxPrev?.addEventListener("click", previousImage);


lightbox?.addEventListener("click", (event) => {

  if (event.target === lightbox) {
    closeLightbox();
  }

});


// ========================================
// TECLADO
// ========================================

document.addEventListener("keydown", (event) => {

  if (lightbox?.classList.contains("open")) {

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      nextImage();
    }

    if (event.key === "ArrowLeft") {
      previousImage();
    }

    return;
  }

  if (event.key === "Escape") {
    hideModal();
  }

});


// ========================================
// ANIMAÇÃO DAS PÉTALAS
// ========================================

const petalsContainer =
  document.getElementById("petals");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let petalInterval = null;


function createPetal() {

  if (prefersReducedMotion || !petalsContainer) return;

  const petal = document.createElement("span");

  petal.classList.add("petal");

  const left = Math.random() * 100;

  const duration = 7 + Math.random() * 8;

  const size = 7 + Math.random() * 8;

  const delay = Math.random() * 2;

  petal.style.left = `${left}%`;

  petal.style.width = `${size}px`;

  petal.style.height = `${size * 1.35}px`;

  petal.style.animationDuration = `${duration}s`;

  petal.style.animationDelay = `${delay}s`;

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000 + 500);

}


function startPetals() {

  if (prefersReducedMotion || petalInterval) return;

  for (let i = 0; i < 12; i++) {
    setTimeout(createPetal, i * 350);
  }

  petalInterval = setInterval(createPetal, 900);

}

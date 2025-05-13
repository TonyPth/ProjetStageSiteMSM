document.addEventListener("DOMContentLoaded", () => {
  // VIDEO
  const video = document.getElementById("video-presentation");
  if (video) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(video);
  }

  // CAROUSEL
  const track = document.getElementById("carousel-track");
  if (track) {
    const images = Array.from(track.children);
    images.forEach(img => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });
  }

  // LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeImage();
      }
    });
  }

  // PADDING TOP DU MAIN
  const navbar = document.getElementById('navbar');
  const mainContent = document.getElementById('main-content');
  if (navbar && mainContent) {
    const navbarHeight = navbar.offsetHeight;
    mainContent.style.paddingTop = `${navbarHeight + 20}px`;
  }
});
  
  function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  }
  
  function closeImage() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("flex");
    lightbox.classList.add("hidden");
  }

  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const heroSectionHeight = document.querySelector('.h-screen').offsetHeight;

    if (window.scrollY > heroSectionHeight / 1.5) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-red-800', 'shadow-md');
    } else {
      navbar.classList.remove('bg-red-800', 'shadow-md');
      navbar.classList.add('bg-transparent');
    }
  });
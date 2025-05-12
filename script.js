document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-presentation");
  
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
  });

  window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const images = Array.from(track.children);
    images.forEach(img => {
      const clone = img.cloneNode(true);
      track.appendChild(clone);
    });

    const lightbox = document.getElementById("lightbox");
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeImage();
      }
    });
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
    const navLinks = document.querySelectorAll('.nav-link');
    const heroSectionHeight = document.querySelector('.h-screen').offsetHeight;

    if (window.scrollY > heroSectionHeight / 2.5) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-white', 'shadow-md');

      navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-800');
      });
    } else {
      navbar.classList.remove('bg-white', 'shadow-md');
      navbar.classList.add('bg-transparent');

      navLinks.forEach(link => {
        link.classList.remove('text-gray-800');
        link.classList.add('text-white');
      });
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');
    
    if (navbar && mainContent) {
      const navbarHeight = navbar.offsetHeight;
      mainContent.style.paddingTop = `${navbarHeight + 20}px`;
    }
  });

  // on calcule là où le contenu de la page peut commencer par rapport à la navbar
  window.addEventListener('resize', () => {
    const navbar = document.getElementById('navbar');
    const mainContent = document.getElementById('main-content');

    if (navbar && mainContent) {
      const navbarHeight = navbar.offsetHeight;
      mainContent.style.paddingTop = `${navbarHeight + 20}px`;
    }
  });
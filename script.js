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

  // CAROUSSEL
  window.addEventListener("load", () => {
    const track = document.getElementById("carousel-track");
    const images = Array.from(track.children);
    let scrollSpeed = 0.5; // pixels par frame (en gros 30px sur 60 fps)
    let position = 0;
    let isPaused = false;
  
    const containerWidth = document.querySelector(".carousel-container").offsetWidth;
    const totalWidth = images.reduce((acc, img) => acc + img.offsetWidth + 6, 0); // +6px pour le gap
    const pauseDuration = 2500;
  
    function animate() {
      if (!isPaused) {
        position += scrollSpeed;
  
        // si on atteint la fin: pause -> reset
        if (position >= totalWidth - containerWidth) {
          isPaused = true;
  
          setTimeout(() => {
            position = 0;
            track.style.transition = "none";
            track.style.transform = `translateX(0)`;
            requestAnimationFrame(() => {
              isPaused = false;
              track.style.transition = "transform 0.5s linear";
              requestAnimationFrame(animate);
            });
          }, pauseDuration);
          return;
        }
  
        track.style.transform = `translateX(-${position}px)`;
      }
  
      requestAnimationFrame(animate);
    }
  
    track.style.transition = "transform 0.2s linear";
    animate();
  });

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
    mainContent.style.paddingTop = `${navbarHeight + 60}px`;
  }

  console.log("Script JS chargé !");
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
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
    let scrollSpeed = 0.7; // pixels par frame (en gros 40px environ sur 60 fps)
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

  // MESSAGE FORMULAIRE
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const closeBtn = document.getElementById('close-msg');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      successMessage.style.display = 'block';
      form.reset();
    })
    .catch(() => alert('Erreur lors de l’envoi, veuillez réessayer.'));
  });

  closeBtn.addEventListener('click', () => {
    successMessage.style.display = 'none';
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
    const mobileMenu = this.document.getElementById('mobile-menu');
    const heroSectionHeight = document.querySelector('.h-screen').offsetHeight;

    if (window.scrollY > heroSectionHeight / 1.5) {
      navbar.classList.remove('bg-transparent');
      mobileMenu.classList.remove('bg-transparent', 'backdrop-blur-sm');
      navbar.classList.add('bg-[#D90429]', 'shadow-xl', 'shadow-black/30');
      mobileMenu.classList.add('bg-[#D90429]');
    } else {
      navbar.classList.remove('bg-[#D90429]', 'shadow-xl', 'shadow-black/15');
      mobileMenu.classList.remove('bg-[#D90429]');
      navbar.classList.add('bg-transparent');
      mobileMenu.classList.add('bg-transparent', 'backdrop-blur-sm');
    }
  })
  
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
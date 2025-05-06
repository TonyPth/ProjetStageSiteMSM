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
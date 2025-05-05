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
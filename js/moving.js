    // (Optional) JavaScript approach if you want to dynamically duplicate items
    // or detect when track is half scrolled and reset, etc.

    // Example: adjust animation speed based on width
    const track = document.querySelector('.carousel-track');
    const container = document.querySelector('.carousel-container');

    function adjustAnimationDuration() {
      const trackWidth = track.getBoundingClientRect().width / 2; // half (one set)
      const speed = 60; // pixels per second (you can tweak)
      const duration = trackWidth / speed;
      track.style.animationDuration = `${duration}s`;
    }
    
// Fade-in animations on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


(function () {
  const openButtons = document.querySelectorAll(".property-btn");
  const modals = document.querySelectorAll(".prop-modal");
  const closeButtons = document.querySelectorAll(".prop-close");

  // OPEN MODAL
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-modal");
      document.getElementById(target).classList.add("active");
    });
  });

  // CLOSE BUTTON
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".prop-modal").classList.remove("active");
    });
  });

  // CLICK OUTSIDE CLOSE
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
})();

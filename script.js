document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu');
  const mobileDropdown = document.querySelector('.mobile-menu-dropdown');

  if (!menuToggle || !mobileDropdown) return; // Safety check

  // Toggle dropdown visibility
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    mobileDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (
      mobileDropdown.classList.contains('active') &&
      !mobileDropdown.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileDropdown.classList.remove('active');
    }
  });
});


// Lazy load + scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy-image");
  const fadeSections = document.querySelectorAll(".section-fade");

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px 150px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible", "loaded");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  [...lazyImages, ...fadeSections].forEach(el => observer.observe(el));
});


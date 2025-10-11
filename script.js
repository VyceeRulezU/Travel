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

if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
  const logo = document.getElementById('mainLogo');
  const sidebarLinks = document.querySelectorAll('.sidebar a'); // adjust selector if needed

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // prevent immediate nav
      const href = this.href;

      // Apply small logo transition
      logo.classList.add('logo-small');
      logo.classList.remove('logo');

      // Redirect after the transition
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match transition duration
    });
  });
}
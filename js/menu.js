const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  sidebar.classList.remove('hidden');
});

// Detect click outside the sidebar
document.addEventListener('click', (event) => {
  const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);

  if (!isClickInside && sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
  }
});

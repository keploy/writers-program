(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function setTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function toggleTheme() {
    var isDark = root.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  // Initialize UI state from current class/localStorage
  (function init() {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    } else {
      setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    }
  })();

  if (btn) {
    btn.addEventListener('click', toggleTheme);
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
})();
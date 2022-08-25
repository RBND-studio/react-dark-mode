(function () {
  var classNameDark = 'dark-mode';
  var classNameLight = 'light-mode';
  function setClassOnDocument(darkMode) {
    document.querySelector('html').classList.add(darkMode ? classNameDark : classNameLight);
    document.querySelector('html').classList.remove(darkMode ? classNameLight : classNameDark);
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;

  var mode;
  try {
    mode = localStorage.getItem('scheme-mode');
  } catch {}

  if (supportsColorSchemeQuery && mode === 'system') setClassOnDocument(mql.matches);
  else if (mode === 'light' || mode === 'dark') setClassOnDocument(modeValue === 'dark');
  else setClassOnDocument(false);
})();

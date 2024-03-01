(function () {
  var html = document.documentElement;
  var classNameDark = html.dataset.darkModeClassname || "dark-mode";
  var classNameLight = html.dataset.lightModeClassname || "light-mode";

  function setClassOnDocument(darkMode) {
    document.querySelector("html").classList.add(darkMode ? classNameDark : classNameLight);
    document.querySelector("html").classList.remove(darkMode ? classNameLight : classNameDark);
  }

  var preferDarkQuery = "(prefers-color-scheme: dark)";
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;

  var mode;
  try {
    var modeValue = localStorage.getItem("scheme-mode");
    if (modeValue) mode = JSON.parse(modeValue);
  } catch {}

  if (supportsColorSchemeQuery && mode === "system") setClassOnDocument(mql.matches);
  else if (mode === "light" || mode === "dark") setClassOnDocument(mode === "dark");
  else setClassOnDocument(false);
})();

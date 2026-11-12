(function () {
  let btn = document.getElementById("toggleDarkMode");

  // Si la página no tiene el botón (todas menos index), se crea
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "toggleDarkMode";
    btn.title = "Cambiar modo nocturno";
    btn.className =
      "fixed bottom-5 right-5 z-50 bg-rich-mahogany-800 text-champagne-mist-100 p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-xl";
    document.body.appendChild(btn);
  }

  function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-pressed", isDark);
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
  }

  // Preferencia guardada; si no hay, la del sistema
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved ? saved === "dark" : prefiereOscuro);

  btn.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("dark-mode"));
  });

  // Si cambias el tema en otra pestaña, esta se actualiza
  window.addEventListener("storage", (e) => {
    if (e.key === "theme") setTheme(e.newValue === "dark");
  });
})();

(function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menuPrincipal");
  if (!toggle || !menu) return;

  function setMenu(abierto) {
    menu.classList.toggle("max-nav:hidden", !abierto);
    toggle.setAttribute("aria-expanded", abierto);
    toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    toggle.textContent = abierto ? "✕" : "☰";
  }

  toggle.addEventListener("click", () => {
    setMenu(menu.classList.contains("max-nav:hidden"));
  });

  // Se cierra al tocar un enlace o al presionar Escape
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
})();
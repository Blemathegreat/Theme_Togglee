 const THEME_KEY = "theme-preference";
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function getPreferredTheme() {
  return localStorage.getItem(THEME_KEY) || getSystemTheme();
}
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleBtn.setAttribute("aria-pressed", theme === "dark");
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}
function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}
function toggleTheme() {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
  toggleBtn.addEventListener("click", toggleTheme);
});
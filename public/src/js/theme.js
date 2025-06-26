const THEME_KEY = "theme-preference";
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Detect system preference
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Get saved theme or system preference
function getPreferredTheme() {
  return localStorage.getItem(THEME_KEY) || getSystemTheme();
}

// Apply theme to <html>
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleBtn.setAttribute("aria-pressed", theme === "dark");
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Save theme preference
function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

// Toggle theme and persist
function toggleTheme() {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
}

// Listen for system preference changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
  toggleBtn.addEventListener("click", toggleTheme);
});
const button = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

if (button) {
  const isDark = document.body.classList.contains("dark-mode");
  button.textContent = isDark ? "Light" : "Dark";

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const nowDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    button.textContent = nowDark ? "Light" : "Dark";
  });
}

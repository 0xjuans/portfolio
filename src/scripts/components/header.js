const root = document.documentElement;
const toggleButton = document.querySelector("#theme-toggle");

const updateThemeLabel = () => {
	const isDarkMode = root.classList.contains("dark");
	toggleButton?.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
	toggleButton?.setAttribute("aria-pressed", isDarkMode ? "true" : "false");
};

const loadSavedTheme = () => {
	const savedTheme = window.localStorage.getItem("theme-mode");
	if (savedTheme === "dark") {
		root.classList.add("dark");
	}
	root.classList.add("theme-ready");
	updateThemeLabel();
};

loadSavedTheme();

toggleButton?.addEventListener("click", () => {
	root.classList.toggle("dark");
	const activeTheme = root.classList.contains("dark") ? "dark" : "light";
	window.localStorage.setItem("theme-mode", activeTheme);
	updateThemeLabel();
});

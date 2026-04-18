const root = document.documentElement;
const toggleButton = document.querySelector("#theme-toggle");
const languageToggleButton = document.querySelector("#language-toggle");
const translatableElements = Array.from(document.querySelectorAll("[data-i18n-es][data-i18n-en]"));

const updateLanguageUi = (languageCode) => {
	languageToggleButton?.setAttribute("aria-pressed", languageCode === "en" ? "true" : "false");
	languageToggleButton?.setAttribute(
		"aria-label",
		languageCode === "es" ? "Switch language to English" : "Cambiar idioma a español"
	);
	root.setAttribute("lang", languageCode);
	root.setAttribute("data-language", languageCode);

	translatableElements.forEach((translatableElement) => {
		const translatedLabel = translatableElement.getAttribute(
			languageCode === "es" ? "data-i18n-es" : "data-i18n-en"
		);
		if (translatedLabel) {
			translatableElement.textContent = translatedLabel;
		}
	});
};

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

	const savedLanguage = window.localStorage.getItem("language-mode");
	updateLanguageUi(savedLanguage === "en" ? "en" : "es");

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

languageToggleButton?.addEventListener("click", () => {
	const currentLanguage = root.getAttribute("data-language") === "en" ? "en" : "es";
	const nextLanguage = currentLanguage === "es" ? "en" : "es";
	window.localStorage.setItem("language-mode", nextLanguage);
	updateLanguageUi(nextLanguage);
});

const root = document.documentElement;
const toggleButton = document.querySelector("#theme-toggle");
const languageToggleButton = document.querySelector("#language-toggle");
const translatableElements = Array.from(document.querySelectorAll("[data-i18n-es][data-i18n-en]"));
const attributeTranslatableElements = Array.from(document.querySelectorAll("[data-i18n-attr][data-i18n-es][data-i18n-en]"));
const navLinks = Array.from(document.querySelectorAll(".nav-list a"));
const siteHeader = document.querySelector(".site-header");
const mobileMenuToggleButton = document.querySelector("#mobile-menu-toggle");

const getCurrentLanguage = () => root.getAttribute("data-language") === "en" ? "en" : "es";
const getMobileMenuLabel = (isOpen) => {
	const languageCode = getCurrentLanguage();

	if (languageCode === "en") {
		return isOpen ? "Close navigation menu" : "Open navigation menu";
	}

	return isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación";
};

const closeMobileMenu = () => {
	siteHeader?.classList.remove("mobile-open");
	mobileMenuToggleButton?.setAttribute("aria-expanded", "false");
	mobileMenuToggleButton?.setAttribute("aria-label", getMobileMenuLabel(false));
};

const toggleMobileMenu = () => {
	if (!siteHeader || !mobileMenuToggleButton) return;
	const isOpen = siteHeader.classList.toggle("mobile-open");
	mobileMenuToggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
	mobileMenuToggleButton.setAttribute("aria-label", getMobileMenuLabel(isOpen));
};

const getHeaderOffset = () => {
	const headerHeight = siteHeader?.getBoundingClientRect().height ?? 0;
	const stickyTop = 16;
	const extraSpacing = 12;
	return headerHeight + stickyTop + extraSpacing;
};

const scrollToHashTarget = (hashValue, shouldUpdateHistory = false) => {
	if (!hashValue || !hashValue.startsWith("#")) return;
	const targetElement = document.querySelector(hashValue);
	if (!targetElement) return;

	const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
	window.scrollTo({
		top: Math.max(targetTop, 0),
		behavior: "smooth"
	});

	if (shouldUpdateHistory) {
		window.history.pushState(null, "", hashValue);
	}
};

const updateLanguageUi = (languageCode) => {
	languageToggleButton?.setAttribute("aria-pressed", languageCode === "en" ? "true" : "false");
	languageToggleButton?.setAttribute(
		"aria-label",
		languageCode === "es" ? "Switch language to English" : "Cambiar idioma a español"
	);
	root.setAttribute("lang", languageCode);
	root.setAttribute("data-language", languageCode);
	mobileMenuToggleButton?.setAttribute("aria-label", getMobileMenuLabel(siteHeader?.classList.contains("mobile-open") ?? false));

	translatableElements.forEach((translatableElement) => {
		if (translatableElement.hasAttribute("data-i18n-attr")) return;

		const translatedLabel = translatableElement.getAttribute(
			languageCode === "es" ? "data-i18n-es" : "data-i18n-en"
		);
		if (translatedLabel) {
			translatableElement.textContent = translatedLabel;
		}
	});

	attributeTranslatableElements.forEach((translatableElement) => {
		const translatedLabel = translatableElement.getAttribute(
			languageCode === "es" ? "data-i18n-es" : "data-i18n-en"
		);
		const attributes = translatableElement.getAttribute("data-i18n-attr")?.split(",") ?? [];

		if (!translatedLabel) return;

		attributes.forEach((attribute) => {
			const trimmedAttribute = attribute.trim();
			if (trimmedAttribute) {
				translatableElement.setAttribute(trimmedAttribute, translatedLabel);
			}
		});
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

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", (event) => {
		const href = navLink.getAttribute("href") ?? "";
		const targetSelector = href.startsWith("#") ? href : "";
		const targetElement = targetSelector ? document.querySelector(targetSelector) : null;
		if (targetElement) {
			event.preventDefault();
			scrollToHashTarget(targetSelector, true);
		}
		closeMobileMenu();
	});
});

mobileMenuToggleButton?.addEventListener("click", () => {
	toggleMobileMenu();
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 900) {
		closeMobileMenu();
	}
});

document.addEventListener("click", (event) => {
	if (!siteHeader?.classList.contains("mobile-open")) return;
	const target = event.target;
	if (!(target instanceof Node)) return;
	if (!siteHeader.contains(target)) {
		closeMobileMenu();
	}
});

window.addEventListener("hashchange", () => {
	const currentHash = window.location.hash;
	const targetElement = currentHash ? document.querySelector(currentHash) : null;
	if (targetElement) {
		window.requestAnimationFrame(() => {
			scrollToHashTarget(currentHash);
		});
	}
});

if (window.location.hash) {
	window.requestAnimationFrame(() => {
		scrollToHashTarget(window.location.hash);
	});
}

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

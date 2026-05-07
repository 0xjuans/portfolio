const backToTopButton = document.querySelector(".back-to-top");

const updateBackToTopVisibility = () => {
	if (!backToTopButton) return;
	backToTopButton.classList.toggle("is-visible", window.scrollY > 320);
};

backToTopButton?.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();

// --- Typewriter for hero title ---
const heroTitle = document.querySelector("#hero-title");
const typedName = heroTitle?.querySelector(".typed-name");
const heroPrefix = heroTitle?.querySelector(".hero-prefix");

let typewriterTimer = null;

const typeText = (text, element, speed = 55) => {
	if (typewriterTimer) clearInterval(typewriterTimer);
	element.textContent = "";
	let i = 0;
	typewriterTimer = setInterval(() => {
		element.textContent += text[i];
		i++;
		if (i >= text.length) clearInterval(typewriterTimer);
	}, speed);
};

const updateHeroTitle = (lang) => {
	if (!heroTitle || !typedName || !heroPrefix) return;
	const prefix = heroTitle.getAttribute(lang === "en" ? "data-prefix-en" : "data-prefix-es") ?? "";
	const name = heroTitle.getAttribute("data-name") ?? "";
	heroPrefix.textContent = prefix;
	typeText(name, typedName);
};

const currentLang = () => document.documentElement.getAttribute("data-language") ?? "es";

updateHeroTitle(currentLang());

new MutationObserver(() => {
	updateHeroTitle(currentLang());
}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-language"] });

import { scrollReveal, animateOnView } from "../animate.js";

const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const certificateCards = Array.from(document.querySelectorAll(".certificate-card"));
const carouselViewport = document.querySelector("[data-carousel-viewport]");
const nextButton = document.querySelector("[data-carousel-next]");
const prevButton = document.querySelector("[data-carousel-prev]");

const scrollByCard = (direction) => {
	if (!carouselViewport) return;
	const firstVisible = certificateCards.find((c) => c.style.display !== "none");
	const cardWidth = firstVisible ? firstVisible.getBoundingClientRect().width : 320;
	carouselViewport.scrollBy({ left: direction * (cardWidth + 12), behavior: "smooth" });
};

const applyFilter = (selectedFilter) => {
	certificateCards.forEach((card) => {
		const shouldShow = selectedFilter === "Todos" || card.getAttribute("data-category") === selectedFilter;
		card.classList.toggle("is-hidden", !shouldShow);
		card.style.display = shouldShow ? "" : "none";
	});
	carouselViewport?.scrollTo({ left: 0, behavior: "smooth" });
};

filterButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		filterButtons.forEach((b) => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
		applyFilter(btn.getAttribute("data-filter") ?? "Todos");
	});
});

applyFilter("Todos");
prevButton?.addEventListener("click", () => scrollByCard(-1));
nextButton?.addEventListener("click", () => scrollByCard(1));

scrollReveal(".certificates-header", "up");
scrollReveal(".certificates-toolbar", "up");
// Carousel cards use one-shot animation (horizontal overflow scroll)
animateOnView(".certificate-card", "anim-fade-up", 70);

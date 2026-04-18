import { gsap } from "gsap";

const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const certificateCards = Array.from(document.querySelectorAll(".certificate-card"));
const countTarget = document.querySelector("[data-certificate-count]");
const carouselViewport = document.querySelector("[data-carousel-viewport]");
const nextButton = document.querySelector("[data-carousel-next]");
const prevButton = document.querySelector("[data-carousel-prev]");

const scrollByCard = (direction) => {
	if (!carouselViewport) return;
	const firstVisibleCard = certificateCards.find((certificateCard) => certificateCard.style.display !== "none");
	const cardWidth = firstVisibleCard ? firstVisibleCard.getBoundingClientRect().width : 320;
	const gap = 12;
	carouselViewport.scrollBy({
		left: direction * (cardWidth + gap),
		behavior: "smooth"
	});
};

const applyFilter = (selectedFilter) => {
	let visibleCards = 0;

	certificateCards.forEach((certificateCard) => {
		const category = certificateCard.getAttribute("data-category");
		const shouldShow = selectedFilter === "Todos" || category === selectedFilter;
		certificateCard.classList.toggle("is-hidden", !shouldShow);
		certificateCard.style.display = shouldShow ? "" : "none";
		if (shouldShow) visibleCards += 1;
	});

	if (countTarget) {
		countTarget.textContent = String(visibleCards);
	}

	if (carouselViewport) {
		carouselViewport.scrollTo({ left: 0, behavior: "smooth" });
	}
};

filterButtons.forEach((filterButton) => {
	filterButton.addEventListener("click", () => {
		const selectedFilter = filterButton.getAttribute("data-filter") ?? "Todos";

		filterButtons.forEach((button) => {
			button.setAttribute("aria-selected", button === filterButton ? "true" : "false");
		});

		applyFilter(selectedFilter);
	});
});

applyFilter("Todos");

prevButton?.addEventListener("click", () => {
	scrollByCard(-1);
});

nextButton?.addEventListener("click", () => {
	scrollByCard(1);
});

gsap.from(".certificates-header", {
	y: 16,
	opacity: 0,
	duration: 0.6,
	delay: 0.2,
	ease: "power2.out"
});

gsap.from(".certificates-toolbar", {
	y: 14,
	opacity: 0,
	duration: 0.62,
	delay: 0.3,
	ease: "power2.out"
});

gsap.from(".certificate-card", {
	y: 22,
	opacity: 0,
	duration: 0.65,
	stagger: 0.08,
	delay: 0.4,
	ease: "power2.out"
});

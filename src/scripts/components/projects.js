import { scrollReveal, animateOnView } from "../animate.js";

scrollReveal(".projects-header", "up");
// Carousel cards use one-shot animation (horizontal overflow scroll)
animateOnView(".projects-carousel .project-card", "anim-fade-up", 100);

const carousel = document.querySelector(".projects-carousel");

if (carousel) {
	const viewport = carousel.querySelector("[data-projects-viewport]");
	const cards = Array.from(carousel.querySelectorAll("[data-project-card]"));
	const dots = Array.from(carousel.querySelectorAll("[data-project-dot]"));
	const previousButton = document.querySelector("[data-projects-prev]");
	const nextButton = document.querySelector("[data-projects-next]");

	let activeIndex = 0;

	const scrollToCard = (index) => {
		const nextIndex = Math.max(0, Math.min(cards.length - 1, index));
		cards[nextIndex]?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		});
	};

	const setActiveCard = (index) => {
		activeIndex = index;

		cards.forEach((card, cardIndex) => {
			card.classList.toggle("is-active", cardIndex === activeIndex);
		});

		dots.forEach((dot, dotIndex) => {
			if (dotIndex === activeIndex) {
				dot.setAttribute("aria-current", "true");
			} else {
				dot.removeAttribute("aria-current");
			}
		});

		if (previousButton) {
			previousButton.disabled = activeIndex === 0;
		}

		if (nextButton) {
			nextButton.disabled = activeIndex === cards.length - 1;
		}
	};

	const updateActiveFromScroll = () => {
		if (!viewport || cards.length === 0) return;

		const viewportCenter = viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
		const closestIndex = cards.reduce((closestCardIndex, card, cardIndex) => {
			const cardBox = card.getBoundingClientRect();
			const cardCenter = cardBox.left + cardBox.width / 2;
			const currentDistance = Math.abs(cardCenter - viewportCenter);
			const closestCardBox = cards[closestCardIndex].getBoundingClientRect();
			const closestCardCenter = closestCardBox.left + closestCardBox.width / 2;
			const closestDistance = Math.abs(closestCardCenter - viewportCenter);

			return currentDistance < closestDistance ? cardIndex : closestCardIndex;
		}, activeIndex);

		setActiveCard(closestIndex);
	};

	previousButton?.addEventListener("click", () => scrollToCard(activeIndex - 1));
	nextButton?.addEventListener("click", () => scrollToCard(activeIndex + 1));

	dots.forEach((dot, dotIndex) => {
		dot.addEventListener("click", () => scrollToCard(dotIndex));
	});

	viewport?.addEventListener("scroll", () => {
		window.requestAnimationFrame(updateActiveFromScroll);
	});

	viewport?.addEventListener("keydown", (event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollToCard(activeIndex - 1);
		}

		if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollToCard(activeIndex + 1);
		}
	});

	window.addEventListener("resize", updateActiveFromScroll);
	setActiveCard(0);
}

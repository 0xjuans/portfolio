import { scrollReveal } from "../animate.js";

const stage = document.querySelector("[data-tech-orbit]");
const spotlight = document.querySelector("[data-tech-spotlight]");

stage?.addEventListener("pointermove", (event) => {
	if (!spotlight) return;
	const stageBounds = stage.getBoundingClientRect();
	spotlight.setAttribute(
		"style",
		`left:${event.clientX - stageBounds.left}px; top:${event.clientY - stageBounds.top}px;`
	);
});

scrollReveal(".technologies-header", "up");
scrollReveal(".technology-orbit", "scale");
scrollReveal(".tech-mobile-grid .tech-chip", "up", 18);

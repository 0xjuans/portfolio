import { gsap } from "gsap";

const stage = document.querySelector("[data-tech-orbit]");
const spotlight = document.querySelector("[data-tech-spotlight]");

stage?.addEventListener("pointermove", (event) => {
	if (!spotlight) return;
	const stageBounds = stage.getBoundingClientRect();
	const x = event.clientX - stageBounds.left;
	const y = event.clientY - stageBounds.top;
	spotlight.setAttribute("style", `left:${x}px; top:${y}px;`);
});

gsap.from(".technologies-header", {
	y: 16,
	opacity: 0,
	duration: 0.6,
	delay: 0.22,
	ease: "power2.out"
});

gsap.from(".technology-orbit", {
	y: 18,
	opacity: 0,
	duration: 0.65,
	delay: 0.32,
	ease: "power2.out"
});

gsap.from(".orbit-row", {
	y: 8,
	opacity: 0,
	duration: 0.6,
	stagger: 0.12,
	delay: 0.4,
	ease: "power2.out"
});

gsap.from(".tech-chip", {
	y: 8,
	opacity: 0,
	duration: 0.46,
	stagger: 0.02,
	delay: 0.52,
	ease: "power2.out"
});

gsap.from(".tech-mobile-grid .tech-chip", {
	y: 10,
	opacity: 0,
	duration: 0.45,
	stagger: 0.02,
	delay: 0.45,
	ease: "power2.out"
});

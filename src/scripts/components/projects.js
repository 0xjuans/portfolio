import { gsap } from "gsap";

gsap.from(".projects-header", {
	y: 18,
	opacity: 0,
	duration: 0.65,
	delay: 0.25,
	ease: "power2.out"
});

gsap.from(".projects-grid .project-card", {
	y: 28,
	opacity: 0,
	duration: 0.7,
	stagger: 0.13,
	delay: 0.35,
	ease: "power2.out"
});

gsap.from(".project-media", {
	scale: 0.92,
	opacity: 0,
	duration: 0.65,
	stagger: 0.12,
	delay: 0.45,
	ease: "power2.out"
});

gsap.to(".project-aura", {
	x: -16,
	y: -10,
	duration: 6.4,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

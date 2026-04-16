import { gsap } from "gsap";

gsap.from(".experience-header", {
	y: 20,
	opacity: 0,
	duration: 0.65,
	delay: 0.25,
	ease: "power2.out"
});

gsap.from(".experience-card", {
	x: 24,
	opacity: 0,
	duration: 0.68,
	stagger: 0.14,
	delay: 0.35,
	ease: "power2.out"
});

gsap.from(".timeline-node", {
	scale: 0.5,
	opacity: 0,
	duration: 0.45,
	stagger: 0.12,
	delay: 0.5,
	ease: "back.out(1.8)"
});

gsap.to(".experience-glow", {
	x: 14,
	y: 12,
	duration: 6,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

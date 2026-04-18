import { gsap } from "gsap";

gsap.from(".education-header", {
	y: 18,
	opacity: 0,
	duration: 0.62,
	delay: 0.2,
	ease: "power2.out"
});

gsap.from(".timeline-rail", {
	scaleY: 0,
	transformOrigin: "top center",
	duration: 0.75,
	delay: 0.24,
	ease: "power2.out"
});

gsap.from(".left-card", {
	x: -28,
	opacity: 0,
	duration: 0.68,
	stagger: 0.12,
	delay: 0.32,
	ease: "power2.out"
});

gsap.from(".right-card", {
	x: 28,
	opacity: 0,
	duration: 0.68,
	stagger: 0.12,
	delay: 0.32,
	ease: "power2.out"
});

gsap.from(".education-node", {
	scale: 0.55,
	opacity: 0,
	duration: 0.44,
	stagger: 0.1,
	delay: 0.44,
	ease: "back.out(1.8)"
});

gsap.to(".education-orbit", {
	rotation: 360,
	duration: 20,
	repeat: -1,
	ease: "none"
});

gsap.to(".education-glow", {
	x: -12,
	y: -9,
	duration: 12,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

gsap.from(".complementary-education", {
	y: 20,
	opacity: 0,
	duration: 0.7,
	delay: 0.55,
	ease: "power2.out"
});

gsap.from(".courses-cloud .static-pill", {
	y: 10,
	opacity: 0,
	duration: 0.45,
	stagger: 0.03,
	delay: 0.65,
	ease: "power2.out"
});
gsap.from(".learning-meta span", {
	y: 8,
	opacity: 0,
	duration: 0.4,
	stagger: 0.06,
	delay: 0.62,
	ease: "power2.out"
});

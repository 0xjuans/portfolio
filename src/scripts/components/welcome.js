import { gsap } from "gsap";

gsap.from(".site-header", {
	y: -30,
	opacity: 0,
	duration: 0.85,
	ease: "power3.out"
});

gsap.from(".hero > *", {
	y: 24,
	opacity: 0,
	duration: 0.8,
	stagger: 0.14,
	delay: 0.2,
	ease: "power2.out"
});

gsap.to(".orb-a", {
	y: 35,
	x: 24,
	duration: 5.8,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

gsap.to(".orb-b", {
	y: -34,
	x: -26,
	duration: 7,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

gsap.to(".orb-c", {
	y: 30,
	duration: 6.4,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut"
});

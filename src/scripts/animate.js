// Transition-based scroll reveal with entrance and exit animations.
// variant: 'up' | 'down' | 'right' | 'left' | 'scale'
export function scrollReveal(selector, variant = 'up', staggerMs = 0) {
	const els = Array.from(document.querySelectorAll(selector));
	if (!els.length) return;

	// sr-init disables transitions on the initial observation pass to prevent
	// flash-of-hidden-content for elements already in view on page load.
	els.forEach(el => el.classList.add('sr', `sr-${variant}`, 'sr-init'));

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const el = entry.target;
				const isFirstObservation = el.classList.contains('sr-init');
				el.classList.remove('sr-init');

				if (entry.isIntersecting) {
					if (staggerMs && !isFirstObservation) {
						el.style.transitionDelay = `${els.indexOf(el) * staggerMs}ms`;
					}
					el.classList.add('is-visible');
				} else {
					if (isFirstObservation) return; // don't hide elements visible on load
					if (staggerMs) el.style.transitionDelay = '0ms';
					el.classList.remove('is-visible');
					// Flip exit direction based on where the element left the viewport
					el.classList.toggle('sr-exit-up', entry.boundingClientRect.top < 0);
				}
			});
		},
		{ threshold: 0.13 }
	);

	els.forEach(el => io.observe(el));
}

// One-shot entrance animation (no exit). Used for carousel items and rail grow.
export function animateOnView(selector, cssClass, staggerMs = 0) {
	const els = Array.from(document.querySelectorAll(selector));
	if (!els.length) return;

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				if (staggerMs) {
					const i = els.indexOf(entry.target);
					entry.target.style.animationDelay = `${i * staggerMs}ms`;
				}
				entry.target.classList.add(cssClass);
				io.unobserve(entry.target);
			});
		},
		{ threshold: 0.12 }
	);

	els.forEach(el => io.observe(el));
}

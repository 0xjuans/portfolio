const canvas = document.querySelector("[data-motion-background]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (canvas && !prefersReducedMotion.matches) {
	const context = canvas.getContext("2d");
	const pointer = { x: 0, y: 0, active: false };
	const isDarkMode = () => document.documentElement.classList.contains("dark");

	let width = 0;
	let height = 0;
	let animationFrame = 0;
	let pixelRatio = 1;

	const ribbons = [
		{ y: 0.18, amplitude: 44, speed: 0.00028, thickness: 96, phase: 0 },
		{ y: 0.48, amplitude: 62, speed: 0.00022, thickness: 128, phase: 1.8 },
		{ y: 0.78, amplitude: 52, speed: 0.00024, thickness: 112, phase: 3.1 }
	];
	const codeTokens = ["{ }", "</>", "=>", "const", "API", "01", "git", "fn()", "UI", "SQL"];
	const codeStreams = [];

	const resizeCanvas = () => {
		pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = Math.floor(width * pixelRatio);
		canvas.height = Math.floor(height * pixelRatio);
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		createCodeStreams();
	};

	const createCodeStreams = () => {
		const streamCount = window.innerWidth < 720 ? 9 : 18;
		codeStreams.length = 0;

		for (let index = 0; index < streamCount; index += 1) {
			codeStreams.push({
				x: Math.random() * width,
				y: Math.random() * height,
				speed: 0.08 + Math.random() * 0.18,
				token: codeTokens[index % codeTokens.length],
				phase: Math.random() * Math.PI * 2,
				size: 10 + Math.random() * 8
			});
		}
	};

	const getColors = () => {
		if (isDarkMode()) {
			return {
				ribbon: ["rgba(56, 189, 248, 0.12)", "rgba(10, 102, 194, 0.04)"],
				line: "rgba(147, 197, 253, 0.18)",
				glow: "rgba(10, 102, 194, 0.2)",
				code: "rgba(191, 219, 254, 0.34)"
			};
		}

		return {
			ribbon: ["rgba(10, 102, 194, 0.11)", "rgba(96, 165, 250, 0.035)"],
			line: "rgba(10, 102, 194, 0.12)",
			glow: "rgba(96, 165, 250, 0.18)",
			code: "rgba(10, 102, 194, 0.28)"
		};
	};

	const getRibbonPoint = (x, ribbon, time) => {
		const wave = Math.sin(x * 0.004 + time * ribbon.speed + ribbon.phase);
		const secondaryWave = Math.cos(x * 0.0021 + time * ribbon.speed * 0.72 + ribbon.phase);

		return height * ribbon.y + wave * ribbon.amplitude + secondaryWave * ribbon.amplitude * 0.42;
	};

	const drawRibbon = (ribbon, colors, time, index) => {
		const segmentWidth = Math.max(110, width / 8);
		const gradient = context.createLinearGradient(0, 0, width, height);
		gradient.addColorStop(0, "rgba(10, 102, 194, 0)");
		gradient.addColorStop(0.32, colors.ribbon[0]);
		gradient.addColorStop(0.68, colors.ribbon[1]);
		gradient.addColorStop(1, "rgba(10, 102, 194, 0)");

		context.beginPath();
		context.moveTo(-segmentWidth, getRibbonPoint(-segmentWidth, ribbon, time));

		for (let x = -segmentWidth; x <= width + segmentWidth; x += segmentWidth) {
			const controlX = x + segmentWidth * 0.5;
			const nextX = x + segmentWidth;
			context.quadraticCurveTo(
				controlX,
				getRibbonPoint(controlX, ribbon, time),
				nextX,
				getRibbonPoint(nextX, ribbon, time)
			);
		}

		context.lineWidth = ribbon.thickness;
		context.lineCap = "round";
		context.strokeStyle = gradient;
		context.shadowBlur = 28;
		context.shadowColor = colors.ribbon[0];
		context.stroke();

		context.shadowBlur = 0;
		context.lineWidth = 1;
		context.strokeStyle = colors.line;
		context.globalAlpha = 0.42 - index * 0.08;
		context.stroke();
		context.globalAlpha = 1;
	};

	const drawCursorAurora = (colors) => {
		const x = pointer.active ? pointer.x : width * 0.74;
		const y = pointer.active ? pointer.y : height * 0.22;
		const radius = pointer.active ? 230 : 300;
		const gradient = context.createRadialGradient(x, y, 0, x, y, radius);

		gradient.addColorStop(0, colors.glow);
		gradient.addColorStop(0.42, "rgba(56, 189, 248, 0.055)");
		gradient.addColorStop(1, "rgba(10, 102, 194, 0)");
		context.fillStyle = gradient;
		context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
	};

	const drawCodeStreams = (colors, time) => {
		context.save();
		context.font = "700 14px 'Cascadia Code', 'Fira Code', Consolas, monospace";
		context.textBaseline = "middle";

		for (const stream of codeStreams) {
			stream.y -= stream.speed;
			if (stream.y < -30) {
				stream.y = height + 30;
				stream.x = Math.random() * width;
				stream.token = codeTokens[Math.floor(Math.random() * codeTokens.length)];
			}

			const alpha = (Math.sin(time * 0.001 + stream.phase) + 1) * 0.5;
			context.globalAlpha = 0.38 + alpha * 0.42;
			context.fillStyle = colors.code;
			context.fillText(stream.token, stream.x, stream.y);
		}

		context.globalAlpha = 1;
		context.restore();
	};

	const animate = (time) => {
		const colors = getColors();
		context.clearRect(0, 0, width, height);
		drawCursorAurora(colors);
		ribbons.forEach((ribbon, index) => drawRibbon(ribbon, colors, time, index));
		drawCodeStreams(colors, time);
		animationFrame = window.requestAnimationFrame(animate);
	};

	window.addEventListener("resize", resizeCanvas);
	window.addEventListener("pointermove", (event) => {
		pointer.x = event.clientX;
		pointer.y = event.clientY;
		pointer.active = true;
	});
	window.addEventListener("pointerleave", () => {
		pointer.active = false;
	});

	prefersReducedMotion.addEventListener("change", (event) => {
		if (event.matches) {
			window.cancelAnimationFrame(animationFrame);
			context.clearRect(0, 0, width, height);
		} else {
			resizeCanvas();
			animationFrame = window.requestAnimationFrame(animate);
		}
	});

	resizeCanvas();
	animationFrame = window.requestAnimationFrame(animate);
}

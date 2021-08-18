import { DemoApplication } from "./src/DemoApplication";

function autorun() {
	const instance = new DemoApplication({
		pixi: {
			antialias: true,
			autoResize: true,
			backgroundColor: 0x6495ed,
			resolution: window.devicePixelRatio,
			width: window.innerWidth,
			height: window.innerHeight,
			view: document.getElementById("renderer") as HTMLCanvasElement
		},
		world: {
			height: 10000,
			width: 10000
		}
	});

	instance.on("initialized", () => {
		console.log("Application Initialized");
	});

	window.addEventListener("resize", () => {
		instance.handleResize();
	});

	instance.load({
		cubes: [["alpha", 10000 / 2, 10000 / 2, 100]]
	});
}

if (window.addEventListener) {
	window.addEventListener("load", autorun, false);
} else {
	window.onload = autorun;
}

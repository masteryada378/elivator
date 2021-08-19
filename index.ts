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
		}
	});
    instance.on();
}

if (window.addEventListener) {
	window.addEventListener("load", autorun, false);
} else {
	window.onload = autorun;
}

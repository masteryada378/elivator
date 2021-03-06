import { DemoApplication } from "./src/DemoApplication";

function autorun() {
	const instance = new DemoApplication({
        pixi:{ 
            width: window.innerWidth, 
            height: window.innerHeight, 
            backgroundColor: 0x008000
        }
    });
    instance.on();

}

if (window.addEventListener) {
	window.addEventListener("load", autorun, false);
} else {
	window.onload = autorun;
}

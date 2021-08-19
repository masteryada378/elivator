// import TWEEN from "@tweenjs/tween.js";
import { Application } from "pixi.js";
// import EventEmitter from "eventemitter3";
import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";
import Viewport from "pixi-viewport";
// import { IWorldOptions } from "./interfaces/IWorldOptions";
// import { IWorldParameters } from "./interfaces/IWorldParameters";
// import { GameWorld } from "./GameWorld";

export class DemoApplication extends Application {


	
	constructor(options: IDemoApplicationOptions) {
		super(options.pixi);

		document.body.appendChild(this.view);
	}
	public on() {
		// this.stage.addChild(this.viewport);
		console.log('hello friend');

	}
}

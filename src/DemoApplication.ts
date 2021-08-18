import TWEEN from "@tweenjs/tween.js";
import { Application } from "pixi.js";
import EventEmitter from "eventemitter3";
import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";
import Viewport from "pixi-viewport";
import { IWorldOptions } from "./interfaces/IWorldOptions";
import { IWorldParameters } from "./interfaces/IWorldParameters";
import { GameWorld } from "./GameWorld";

export class DemoApplication extends Application {
	private emitter: EventEmitter;
	private viewport: Viewport;
	private world: GameWorld;

	constructor(options: IDemoApplicationOptions) {
		super(options.pixi);

		this.emitter = new EventEmitter();

		this.viewport = this.initializeViewport(options.world);
		this.world = new GameWorld(options.world);

		this.stage.addChild(this.viewport);
		this.viewport.addChild(this.world);

		this.ticker.add(() => {
			TWEEN.update();
		});
	}

	public on(eventName: string, callback: () => void, context?: any) {
		this.emitter.on(eventName, callback, context);
	}

	public once(eventName: string, callback: () => void, context?: any) {
		this.emitter.once(eventName, callback, context);
	}

	public emit(eventName: string, ...args: any[]) {
		this.emitter.emit(eventName, args);
	}

	public off(eventName: string, callback: () => void, context?: any) {
		this.emitter.off(eventName, callback, context);
	}

	public handleResize() {
		this.renderer.resize(window.innerWidth, window.innerHeight);
		this.viewport.resize(window.innerWidth, window.innerHeight);
	}

	public load(worldParameters: IWorldParameters) {
		this.world.load(worldParameters);
	}

	private initializeViewport(config?: IWorldOptions): Viewport {
		if (!config) {
			throw new Error("Invalid world configuration");
		}

		const viewport = new Viewport({
			screenHeight: window.innerHeight,
			screenWidth: window.innerWidth,

			worldHeight: config.height,
			worldWidth: config.width,

			interaction: this.renderer.plugins.interaction
		})
			.drag({ clampWheel: true, direction: "all", underflow: "center" })
			.pinch({ noDrag: true })
			.clamp({ direction: "all" })
			.zoom(config.width - window.innerWidth, true)
			.wheel({ smooth: 3 })
			.clampZoom({
				maxHeight: config.height,
				minHeight: window.innerHeight / 2,
				maxWidth: config.width,
				minWidth: window.innerWidth / 2
			});

		return viewport;
	}
}

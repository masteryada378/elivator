import { Container, Graphics } from "pixi.js";
import { Cube } from "./entities/cube";
import { IWorldOptions } from "./interfaces/IWorldOptions";
import { IWorldParameters } from "./interfaces/IWorldParameters";

export class GameWorld extends Container {
	private options: IWorldOptions;

	constructor(options?: IWorldOptions) {
		super();

		if (!options) {
			throw new Error("Invalid world configuration");
		}

		this.name = "GameWorld";

		this.options = options;
	}

	public load(worldParameters: IWorldParameters) {
		for (const [name, x, y, scale] of worldParameters.cubes) {
			const el = new Cube();

			el.name = name;

			el.position.set(x, y);
			el.scale.set(scale);

			this.addChild(el);
		}

		this.initializeBounds();
	}

	public initializeBounds() {
		const bounds = new Graphics();
		const width = 20;
		const halfWidth = width / 2;

		bounds.lineStyle(width, 0xcc0000, 0.6);

		bounds.moveTo(halfWidth, halfWidth);
		bounds.lineTo(this.options.width - halfWidth, halfWidth);
		bounds.lineTo(this.options.width - halfWidth, this.options.height - halfWidth);
		bounds.lineTo(halfWidth, this.options.height - halfWidth);
		bounds.lineTo(halfWidth, halfWidth);

		this.addChild(bounds);
	}
}

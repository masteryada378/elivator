import { Tween } from "@tweenjs/tween.js";
import { Graphics, Point } from "pixi.js";

export class Cube extends Graphics {
	private tweenMouseOver: Tween;
	private tweenMouseOut: Tween;

	constructor() {
		super();

		this.beginFill(0x0000cc, 0.8);
		this.drawRect(0, 0, 1, 1);
		this.endFill();

		this.alpha = 0.4;

		this.tweenMouseOver = new Tween(this);
		this.tweenMouseOut = new Tween(this);

		this.tweenMouseOver.to({ alpha: 1.0 }, 100);
		this.tweenMouseOut.to({ alpha: this.alpha }, 200).delay(200);

		this.pivot.set(0.5);

		this.interactive = true;

		this.on("click", this.onClicked, this);
		this.on("mouseover", this.onMouseOver, this);
		this.on("mouseout", this.onMouseOut, this);
	}

	public onClicked() {
		console.log(`${this.name} was clicked`);
	}

	public onMouseOver() {
		this.tweenMouseOver.start();
		this.tweenMouseOut.stop();
	}

	public onMouseOut() {
		this.tweenMouseOver.stop();
		this.tweenMouseOut.start();
	}
}

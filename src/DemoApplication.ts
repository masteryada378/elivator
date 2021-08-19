import { Application, Sprite} from "pixi.js";
import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";
let sprite = Sprite.from('sample.png');
export class DemoApplication extends Application {

	constructor(option: IDemoApplicationOptions) {
		super(option.pixi);
	}


	public on() {
		console.log('hello friend');
		document.body.appendChild(this.view);

	}
}
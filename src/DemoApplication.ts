import { Application, Sprite, Container} from "pixi.js";
import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";

export class DemoApplication {
	public appMi: Application;
	private bgFhone: Sprite;
	public containerMi: Container;

	constructor(option: IDemoApplicationOptions) {
		this.appMi = new Application(option.pixi);
		this.bgFhone = Sprite.from("stena.png");
		this.containerMi = new Container();
	}
	public on() {

		this.bgFhone.width = window.innerWidth;
		this.bgFhone.height = window.innerHeight;
		this.containerMi.x = 0;
		this.bgFhone.y = 0;		
		this.appMi.stage.addChild(this.containerMi);
		this.containerMi.addChild(this.bgFhone);
		document.body.appendChild(this.appMi.view);

		this.buildBuilding();
	}

	private buildBuilding() {

	}
	
}
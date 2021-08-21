import { Application, Sprite, Container, Graphics} from "pixi.js";
import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";
import { MiHata } from "./interfaces/MiHata";

export class DemoApplication {
	public appMi: Application;
	private bgFhone: Sprite;
	public containerMi: Container;
	private hata : Container;
	public miHataElement: MiHata;

	constructor(option: IDemoApplicationOptions) {
		this.appMi = new Application(option.pixi);
		this.bgFhone = Sprite.from("stena.png");
		this.containerMi = new Container();
		this.hata = new Container();
		this.miHataElement = {
			floor: new Graphics,
			leftWall: new Graphics,
			rightWall: new Graphics,
			ceiling: new Graphics,
			flor:[new Graphics] 
		}

	}
	public on() {

		this.bgFhone.width = window.innerWidth - 40;
		this.bgFhone.height = window.innerHeight - 40;
		this.containerMi.x = 0;
		this.bgFhone.y = 0;		
		this.appMi.stage.addChild(this.containerMi);
		this.containerMi.addChild(this.bgFhone);
		document.body.appendChild(this.appMi.view);

		this.buildBuilding();
	}

	private buildBuilding() {

		
		this.miHataElement.floor.lineStyle(40, 0x222222);
		this.miHataElement.floor.lineTo(770,0)
		this.miHataElement.floor.endFill();
		this.miHataElement.floor.x = 50;
		this.miHataElement.floor.y = window.innerHeight - 60;
		this.hata.addChild(this.miHataElement.floor);

		this.miHataElement.leftWall.lineStyle(7, 0x167244);
		this.miHataElement.leftWall.lineTo(0,-500);
		this.miHataElement.leftWall.endFill();
		this.miHataElement.leftWall.x = 54;
		this.miHataElement.leftWall.y = window.innerHeight - 70;
		this.hata.addChild(this.miHataElement.leftWall);
		
		this.miHataElement.rightWall.lineStyle(7, 0x1adc23c);
		this.miHataElement.rightWall.lineTo(0,-500);
		this.miHataElement.rightWall.endFill();
		this.miHataElement.rightWall.x = 817;
		this.miHataElement.rightWall.y = window.innerHeight - 70;
		this.hata.addChild(this.miHataElement.rightWall);
		
		this.miHataElement.ceiling.lineStyle(20, 0x222222);
		this.miHataElement.ceiling.lineTo(770,0)
		this.miHataElement.ceiling.endFill();
		this.miHataElement.ceiling.x = 50;
		this.miHataElement.ceiling.y = window.innerHeight - 570;
		this.hata.addChild(this.miHataElement.ceiling);

		this.containerMi.addChild(this.hata); //I can add it before setting position, nothing bad will happen.
	}
	
}
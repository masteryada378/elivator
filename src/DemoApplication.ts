import { Application, Sprite, Container, Graphics,filters} from "pixi.js";
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
			floors: [
				new Graphics,
				new Graphics,
				new Graphics,
				new Graphics
			],
			people:[]
		};

	}
	public on() {

		this.bgFhone.width = window.innerWidth - 40;
		this.bgFhone.height = window.innerHeight - 40;
		this.containerMi.x = 0;
		this.bgFhone.y = 0;		
		this.appMi.stage.addChild(this.containerMi);
		this.containerMi.addChild(this.bgFhone);
		document.body.appendChild(this.appMi.view);
		// const blurFilter1 = new filters.BlurFilter();
		// this.bgFhone.filters = [blurFilter1];
		// blurFilter1.blur = 5;
		this.buildBuilding();
		this.addFloors();
		this.addPiple();
	}

	private buildBuilding() {

		this.miHataElement.floor.lineStyle(40, 0x222222);
		this.miHataElement.floor.lineTo(770,0)
		this.miHataElement.floor.endFill();
		this.miHataElement.floor.x = 50;
		this.miHataElement.floor.y = window.innerHeight - 60;
		this.hata.addChild(this.miHataElement.floor);

		this.miHataElement.leftWall.lineStyle(7, 0x222222);
		this.miHataElement.leftWall.lineTo(0,-500);
		this.miHataElement.leftWall.endFill();
		this.miHataElement.leftWall.x = 54;
		this.miHataElement.leftWall.y = window.innerHeight - 70;
		this.hata.addChild(this.miHataElement.leftWall);
		
		this.miHataElement.rightWall.lineStyle(7, 0x222222);
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

		this.containerMi.addChild(this.hata);
	}

	public addFloors() {

		this.miHataElement.floors[0].lineStyle(5, 0xFF2400);
		this.miHataElement.floors[0].lineTo(770,0)
		this.miHataElement.floors[0].endFill();
		this.miHataElement.floors[0].x = 50;
		this.miHataElement.floors[0].y = window.innerHeight - 170;

		this.miHataElement.floors[1].lineStyle(5, 0xFF2400);
		this.miHataElement.floors[1].lineTo(770,0)
		this.miHataElement.floors[1].endFill();
		this.miHataElement.floors[1].x = 50;
		this.miHataElement.floors[1].y = window.innerHeight - 270;

		this.miHataElement.floors[2].lineStyle(5, 0xFF2400);
		this.miHataElement.floors[2].lineTo(770,0)
		this.miHataElement.floors[2].endFill();
		this.miHataElement.floors[2].x = 50;
		this.miHataElement.floors[2].y = window.innerHeight - 370;

		this.miHataElement.floors[3].lineStyle(5, 0xFF2400);
		this.miHataElement.floors[3].lineTo(770,0)
		this.miHataElement.floors[3].endFill();
		this.miHataElement.floors[3].x = 50;
		this.miHataElement.floors[3].y = window.innerHeight - 470;

		this.hata.addChild(this.miHataElement.floors[0]);
		this.hata.addChild(this.miHataElement.floors[1]);
		this.hata.addChild(this.miHataElement.floors[2]);
		this.hata.addChild(this.miHataElement.floors[3]);
	}
	public addPiple() {
		console.log(this.miHataElement.floors[0].y);
		this.miHataElement.people.push(new Graphics);
		this.miHataElement.people[0].beginFill(0x4B0082, 1);
		this.miHataElement.people[0].drawRect(750,this.miHataElement.floors[0].y + 15,40,70);
		this.miHataElement.people[0].endFill();
		this.miHataElement.people[0].endHole();
		this.hata.addChild(this.miHataElement.people[0]);
	}
}
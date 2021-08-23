import { Application, Sprite, Container, Graphics, Rectangle, Ticker} from "pixi.js";
import { Tween } from "@tweenjs/tween.js";

import { IDemoApplicationOptions } from "./interfaces/IDemoApplicationOptions";
import { MiHata } from "./interfaces/MiHata";

export class DemoApplication {
	public appMi: Application;
	private bgFhone: Sprite;
	public containerMi: Container;
	private hata : Container;
	public miHataElement: MiHata;
	public tweenDer: Tween;
	
	private timMgn:  any;
	public tempCounter: any = {x:0, y: 10};

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
		this.tweenDer = new Tween();
		this.timMgn = {
			xLeft: 720,
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
		// const blurFilter1 = new filters.BlurFilter();
		// this.bgFhone.filters = [blurFilter1];
		// blurFilter1.blur = 5;
		this.buildBuilding();
		this.addFloors();
		this.addPiple();
		this.initTwee();
		console.log(this.timMgn);
	}
	private updateME() {
		this.tweenDer.update();
	}
	private initTwee() {
		this.tweenDer = new Tween(this.tempCounter)
		.to({x:-this.timMgn.xLeft}, 1000)
		.onUpdate(() => {
			this.moveME();
		})
		.start(); 
	Ticker.shared.add(this.updateME, this);	
	}
	private moveME() {
		
		console.log(this.tempCounter);
		this.miHataElement.people[0].x = this.tempCounter.x;

		if (this.checkCollision(this.miHataElement.people[0], this.miHataElement.people[1])) {

		}
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
		this.miHataElement.people.push(new Graphics);
		this.miHataElement.people[0].beginFill(0x4B0082, 1);
		this.miHataElement.people[0].drawRect(750,this.miHataElement.floors[0].y + 15,40,70);
		this.miHataElement.people[0].endFill();
		this.miHataElement.people[0].endHole();
		this.hata.addChild(this.miHataElement.people[0]);

		this.miHataElement.people.push(new Graphics);
		this.miHataElement.people[1].beginFill(0x54fffd, 1);
		this.miHataElement.people[1].drawRect(700,this.miHataElement.floors[0].y + 15,40,70);
		this.miHataElement.people[1].endFill();
		this.miHataElement.people[1].endHole();
		this.hata.addChild(this.miHataElement.people[1]);
		console.log(this.miHataElement.people[1].getBounds());

	}

	public checkCollision(objA:Graphics, objB:Graphics) {
		const a:Rectangle = objA.getBounds();
    	const b:Rectangle = objB.getBounds();
		
		const rightmostLeft = a.left < b.left ? b.left : a.left;
		const leftmostRight = a.right > b.right ? b.right : a.right;
		
		if (leftmostRight <= rightmostLeft)
		{
			return false;
		}
		
		const bottommostTop = a.top < b.top ? b.top : a.top;
		const topmostBottom = a.bottom > b.bottom ? b.bottom : a.bottom;
		
		return topmostBottom > bottommostTop;
	}

}
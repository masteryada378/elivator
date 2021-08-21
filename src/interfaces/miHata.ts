import {Graphics} from "pixi.js";

export interface MiHata {
	floor: Graphics;
	leftWall: Graphics;
	rightWall: Graphics;
	ceiling: Graphics;
    floors:Graphics[];
    people:Graphics[];
}

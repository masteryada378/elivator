import { ApplicationOptions } from "pixi.js";
import { IWorldOptions } from "./IWorldOptions";

export interface IDemoApplicationOptions {
	world?: IWorldOptions;
	pixi?: ApplicationOptions;
}

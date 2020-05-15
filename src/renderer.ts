import { Application, Graphics } from "pixi.js";
import { Room } from "./types";
import { TILE_SIZE, NUM_OF_TILES } from "./config";

export function renderRoom(app: Application, room: Room): void {
  for (let i = 0; i < NUM_OF_TILES; i += 1) {
    for (let j = 0; j < NUM_OF_TILES; j += 1) {
      if (room[i][j] == 1) {
        const rectangle = new Graphics();
        rectangle.beginFill(0x0000000);
        rectangle.drawRect(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        app.stage.addChild(rectangle);
      }
    }
  }
}

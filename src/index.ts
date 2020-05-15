import { Application, Graphics } from "pixi.js";

import { baseRoom } from "./rooms";
import { TILE_SIZE, SIZE } from "./config";
import { renderRoom } from "./renderer";

const app = new Application({
  width: SIZE,
  height: SIZE,
});
app.renderer.backgroundColor = 0xdddddd;
renderRoom(app, baseRoom);

const player = new Graphics();

player.beginFill(0x444444);

player.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
player.position.set(4 * TILE_SIZE, 5 * TILE_SIZE);
app.stage.addChild(player);

setTimeout(() => {
  player.position.set(5 * TILE_SIZE, 5 * TILE_SIZE);
}, 1000);

document.body.appendChild(app.view);

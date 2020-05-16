import { Application, Graphics } from "pixi.js";

import { baseRoom } from "./rooms";
import { TILE_SIZE, SIZE } from "./config";
import { renderRoom, movePlayer } from "./renderer";
import { Direction } from "./types";

const app = new Application({
  width: SIZE,
  height: SIZE,
});
app.renderer.backgroundColor = 0xdddddd;
renderRoom(app, baseRoom);

const player = new Graphics();

player.beginFill(0x444444);
player.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
player.position.set(5 * TILE_SIZE, 4 * TILE_SIZE);
app.stage.addChild(player);

window.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "KeyW") {
      movePlayer(player, baseRoom, Direction.UP);
    }
    if (event.code === "KeyS") {
      movePlayer(player, baseRoom, Direction.DOWN);
    }
    if (event.code === "KeyA") {
      movePlayer(player, baseRoom, Direction.LEFT);
    }
    if (event.code === "KeyD") {
      movePlayer(player, baseRoom, Direction.RIGHT);
    }
  },
  false
);

document.body.appendChild(app.view);

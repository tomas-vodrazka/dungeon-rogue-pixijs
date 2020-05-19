import { Application, Graphics } from "pixi.js";

import { baseRoom } from "./rooms";
import { TILE_SIZE, SIZE } from "./config";
import { renderRoom, movePlayer } from "./renderer";
import { Direction } from "./types";
import { tileToPosition } from "./positionService";

const app = new Application({
  width: SIZE,
  height: SIZE,
});
app.renderer.backgroundColor = 0xdddddd;
renderRoom(app, baseRoom);

const player = new Graphics();

player.beginFill(0x444444);
player.drawRect(0, 0, TILE_SIZE, TILE_SIZE);
player.position.set(tileToPosition(4), tileToPosition(5));
app.stage.addChild(player);

window.addEventListener(
  "keydown",
  (event) => {
    if (["KeyW", "ArrowUp"].includes(event.code)) {
      movePlayer(player, baseRoom, Direction.UP);
    }
    if (["KeyS", "ArrowDown"].includes(event.code)) {
      movePlayer(player, baseRoom, Direction.DOWN);
    }
    if (["KeyA", "ArrowLeft"].includes(event.code)) {
      movePlayer(player, baseRoom, Direction.LEFT);
    }
    if (["KeyD", "ArrowRight"].includes(event.code)) {
      movePlayer(player, baseRoom, Direction.RIGHT);
    }
  },
  false
);

document.body.appendChild(app.view);

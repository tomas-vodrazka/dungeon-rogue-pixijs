import { Application, Graphics } from "pixi.js";
import { Room, Direction, DirectionChange, Coordinates } from "./types";
import { TILE_SIZE, NUM_OF_TILES } from "./config";
import { tileToPosition, positionToTile } from "./positionService";

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

export function movePlayer(
  player: Graphics,
  room: Room,
  direction: Direction
): void {
  const playerCoordX = positionToTile(player.position.x);
  const playerCoordY = positionToTile(player.position.y);
  const newCoords: Coordinates = {
    x: playerCoordX + DirectionChange[direction][0],
    y: playerCoordY + DirectionChange[direction][1],
  };
  if (isPositionValid(newCoords, room)) {
    player.position.x = tileToPosition(newCoords.x);
    player.position.y = tileToPosition(newCoords.y);
  }
}

export function isPositionValid(position: Coordinates, room: Room): boolean {
  return room[position.x][position.y] !== 1;
}

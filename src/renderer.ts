import { Application, Graphics } from "pixi.js";
import { Room, Direction, DirectionChange, SpriteTilePosition } from "./types";
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

export function movePlayer(
  player: Graphics,
  room: Room,
  direction: Direction
): void {
  const playerTileX = player.position.x / TILE_SIZE;
  const playerTileY = player.position.y / TILE_SIZE;
  const newPosition: SpriteTilePosition = [
    playerTileX + DirectionChange[direction][0],
    playerTileY + DirectionChange[direction][1],
  ];
  if (isPositionValid(newPosition, room)) {
    player.position.x = newPosition[0] * TILE_SIZE;
    player.position.y = newPosition[1] * TILE_SIZE;
  }
}

export function isPositionValid(
  newPosition: SpriteTilePosition,
  room: Room
): boolean {
  return room[newPosition[0]][newPosition[1]] !== 1;
}

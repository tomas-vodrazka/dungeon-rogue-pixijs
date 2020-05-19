import { TILE_SIZE } from "./config";

export function tileToPosition(number: number): number {
  return number * TILE_SIZE;
}

export function positionToTile(number: number): number {
  return number / TILE_SIZE;
}

export type Room = number[][];

export interface Coordinates {
  x: number;
  y: number;
}
export interface SpriteCoordinates {
  x: number;
  y: number;
}

export interface RoomCoordinates extends Coordinates {
  roomType: RoomType;
}

export enum RoomType {
  BASIC = 1,
}

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
export const DirectionChange = {
  [Direction.UP]: [0, -1],
  [Direction.DOWN]: [0, 1],
  [Direction.LEFT]: [-1, 0],
  [Direction.RIGHT]: [1, 0],
};

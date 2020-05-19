import { Coordinates } from "./types";

export function generateMap(mapSize: number, roomsCount: number) {
  const mapGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const adjacentAvailableRooms = [
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ];
}

export function getRandomAvailableRoom(availableRooms: [number]) {}

export function getAdjacentRooms(roomCoordinates: Coordinates): Coordinates[] {
  return [
    { x: roomCoordinates.x - 1, y: roomCoordinates.y },
    { x: roomCoordinates.x + 1, y: roomCoordinates.y },
    { x: roomCoordinates.x, y: roomCoordinates.y - 1 },
    { x: roomCoordinates.x, y: roomCoordinates.y + 1 },
  ];
}

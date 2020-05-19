import _ from "lodash";

import { RoomCoordinates, Coordinates, RoomType } from "./types";

export function generateMap(borderDistance: number, roomsCount: number) {
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

export function generateRooms(
  borderDistance: number,
  roomsCount: number
): RoomCoordinates[] {
  const selectedRooms: RoomCoordinates[] = [
    { x: 0, y: 0, roomType: RoomType.BASIC },
  ];
  let adjacentAvailableRooms: Coordinates[] = getAdjacentRooms({
    x: 0,
    y: 0,
  });

  while (selectedRooms.length < roomsCount) {
    const selectedRoom = getRandomAvailableRoom(adjacentAvailableRooms);
    if (isRoomValid(selectedRoom, borderDistance)) {
      adjacentAvailableRooms = [
        ...adjacentAvailableRooms,
        ...getAdjacentRooms(selectedRoom),
      ];
      adjacentAvailableRooms = _.uniqWith(adjacentAvailableRooms, _.isEqual);
      selectedRooms.push({ ...selectedRoom, roomType: RoomType.BASIC });
    }
  }

  return selectedRooms;
}

export function isRoomValid(
  room: Coordinates,
  borderDistance: number
): boolean {
  if (Math.abs(room.x) > borderDistance) {
    return false;
  }
  if (Math.abs(room.y) > borderDistance) {
    return false;
  }
  return true;
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomAvailableRoom(availableRooms: Coordinates[]) {
  return availableRooms[getRandomInt(availableRooms.length - 1)];
}

export function getAdjacentRooms(roomCoordinates: Coordinates): Coordinates[] {
  return [
    { x: roomCoordinates.x - 1, y: roomCoordinates.y },
    { x: roomCoordinates.x + 1, y: roomCoordinates.y },
    { x: roomCoordinates.x, y: roomCoordinates.y - 1 },
    { x: roomCoordinates.x, y: roomCoordinates.y + 1 },
  ];
}

import { generateRooms } from "../map";

describe("generateRooms", () => {
  it("returns expected number of rooms", () => {
    const actual = generateRooms(3, 4);

    expect(actual.length).toBe(4);
  });
  it("returns rooms inside grid", () => {
    const actual = generateRooms(1, 9);

    actual.forEach((room) => {
      expect(room.x).toBeGreaterThanOrEqual(-1);
      expect(room.x).toBeLessThanOrEqual(1);
      expect(room.y).toBeGreaterThanOrEqual(-1);
      expect(room.y).toBeLessThanOrEqual(1);
    });
    console.log(actual);
  });
});

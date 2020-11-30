
const position = require('../src/utility/position');


// dir = 0; // upright
// dir = 1; // forward
// dir = 2; // downright
// dir = 3; // downleft
// dir = 4; // backward
// dir = 5; // upleft

test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(5, 1, 0)).toBe(1);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(10, 20, 0)).toBe(1);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(5, -1, 0)).toBe(4);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(50, 0, 0)).toBe(4);
  });


  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(5, 1, -1)).toBe(0);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(10, 1, -1)).toBe(0);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(0, 0, 1)).toBe(2);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(0, -1, -1)).toBe(5);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(1, 0, -1)).toBe(5);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(1, 0, 1)).toBe(3);
  });

  test('direction from coordinates delta test', () => {
    expect(position.getDirectionFromDelta(1, -10, -1)).toBe(5);
  });
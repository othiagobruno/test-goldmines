const findBestSpot = require("./index.js");

describe('Test 1',() => {
  test('should decide to set up your company at (2, 2) in order to own 2 gold mine', () => {
    expect(findBestSpot(6, 4, 2, 2,
      [
        {"x": 1, "y": 0}, 
        {"x": 5, "y": 0},
        {"x": 2, "y": 2}, 
        {"x": 3, "y": 3},
      ]
    )).toEqual({"coordinates": { "x": 2, "y": 2 }, "goldMines": 2 });
  });

  test('larger exploration space', () => {
    expect(findBestSpot(6, 4, 2, 3,
      [
        {"x": 1, "y": 0}, 
        {"x": 5, "y": 0},
        {"x": 2, "y": 2}, 
        {"x": 3, "y": 3},
        {"x": 1, "y": 2},
      ]
    )).toEqual({"coordinates": { "x": 1, "y": 0 }, "goldMines": 3 });
  });
});

   
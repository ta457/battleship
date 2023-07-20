const Ship = require('../factories/Ship');
let ship = new Ship(3);

test('import successfully', () => {
  expect(ship.getShip()).toBe(3);
})
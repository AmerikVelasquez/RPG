import Dragon from './../src/dragon.js'

describe('Dragon', () => {

  test('should instantiate a dragon object', () => {
    let dragon = new Dragon();
    expect(dragon.attack).toEqual(5);
    expect(dragon.health).toEqual(10);
    expect(dragon.defense).toEqual(4);
    expect(dragon.isAlive).toEqual(true);
  });
});
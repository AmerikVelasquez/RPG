import Character from './../src/character.js'

describe('Character', () =>{

  test('should correctly create a character with appropriate properites based on the argument', () => {
    const character1 = new Character("Martial Artist");
    expect(character1.health).toEqual(5);
    expect(character1.defence).toEqual(5);
    expect(character1.attack).toEqual(5);
    expect(character1.magicAttack).toEqual(0);
    expect(character1.mana).toEqual(0);
    expect(character1.intelligence).toEqual(5);
    expect(character1.manaReplenishmentPotion).toEqual(3);
    expect(character1.attackBoostPotion).toEqual(3);
    expect(character1.healthBoostPotion).toEqual(3);
    expect(character1.level).toEqual(1);
    expect(character1.reflect).toEqual(1);
  });
});

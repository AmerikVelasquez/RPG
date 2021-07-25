import Character from './../src/character.js'

describe('Character', () =>{

    let character1;
    let character2;
    let character3;
    let character4;
    let character5;
    
  beforeEach(()=>{
    character1 = new Character("Martial Artist");
    character2 = new Character("Berserker");
    character3 = new Character("Wizard");
    character4 = new Character("Alchemist");
    character5 = new Character("Healer");
  });
  test('should correctly create a character with appropriate properites based on the argument', () => {
    expect(character1.characterType).toEqual("Martial Artist");
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
    expect(character1.skillType).toEqual("Reflect");
    expect(character1.skill).toEqual(1);
    expect(character2.characterType).toEqual("Berserker");
    expect(character2.health).toEqual(8);
    expect(character2.defence).toEqual(4);
    expect(character2.attack).toEqual(8);
    expect(character2.magicAttack).toEqual(0);
    expect(character2.mana).toEqual(0);
    expect(character2.intelligence).toEqual(2);
    expect(character2.manaReplenishmentPotion).toEqual(3);
    expect(character2.attackBoostPotion).toEqual(3);
    expect(character2.healthBoostPotion).toEqual(3);
    expect(character2.level).toEqual(1);
    expect(character2.skillType).toEqual("Fury");
    expect(character2.skill).toEqual(1);
    expect(character3.characterType).toEqual("Wizard");
    expect(character3.health).toEqual(5);
    expect(character3.defence).toEqual(3);
    expect(character3.attack).toEqual(0);
    expect(character3.magicAttack).toEqual(6);
    expect(character3.mana).toEqual(7);
    expect(character3.intelligence).toEqual(8);
    expect(character3.manaReplenishmentPotion).toEqual(3);
    expect(character3.attackBoostPotion).toEqual(3);
    expect(character3.healthBoostPotion).toEqual(3);
    expect(character3.level).toEqual(1);
    expect(character3.skillType).toEqual("Fireball");
    expect(character3.skill).toEqual(1);
    expect(character4.characterType).toEqual("Alchemist");
    expect(character4.health).toEqual(6);
    expect(character4.defence).toEqual(6);
    expect(character4.attack).toEqual(2);
    expect(character4.magicAttack).toEqual(0);
    expect(character4.mana).toEqual(2);
    expect(character4.intelligence).toEqual(9);
    expect(character4.manaReplenishmentPotion).toEqual(3);
    expect(character4.attackBoostPotion).toEqual(3);
    expect(character4.healthBoostPotion).toEqual(3);
    expect(character4.level).toEqual(1);
    expect(character4.skillType).toEqual("Item Enhancement");
    expect(character4.skill).toEqual(1);
    expect(character5.characterType).toEqual("Healer");
    expect(character5.health).toEqual(7);
    expect(character5.defence).toEqual(4);
    expect(character5.attack).toEqual(3);
    expect(character5.magicAttack).toEqual(0);
    expect(character5.mana).toEqual(6);
    expect(character5.intelligence).toEqual(6);
    expect(character5.manaReplenishmentPotion).toEqual(3);
    expect(character5.attackBoostPotion).toEqual(3);
    expect(character5.healthBoostPotion).toEqual(3);
    expect(character5.level).toEqual(1);
    expect(character5.skillType).toEqual("Self Heal");
    expect(character5.skill).toEqual(1);
  });

  test('should assess the current value of skill and respond appropriately', () => {
    character2.skill = 0;
    expect(character1.useSkill()).toEqual(0);
    expect(character2.useSkill()).toEqual("cooldown");
  });
});

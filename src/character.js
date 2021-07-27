import Dragon from './dragon.js'

export default class Character {
  constructor(type) {
    if (type === "Martial Artist") {
      this.characterType = type;
      this.health = 5;
      this.defence = 5;
      this.attack = 5;
      this.magicAttack = 0;
      this.mana = 0;
      this.intelligence = 5;
      this.manaReplenishmentPotion = 3; 
      this.attackBoostPotion = 3;
      this.healthBoostPotion = 3; 
      this.level = 1;
      this.skillType = "Reflect";
      this.skill = 1;
    } else if (type === "Berserker") {
      this.characterType = type;
      this.health = 8;
      this.defence = 4;
      this.attack = 8;
      this.magicAttack = 0;
      this.mana = 0;
      this.intelligence = 2;
      this.manaReplenishmentPotion = 3;
      this.attackBoostPotion = 3;
      this.healthBoostPotion = 3;
      this.level = 1;
      this.skillType = "Fury";
      this.skill = 1;
    } else if (type === "Wizard") {
      this.characterType = type;
      this.health = 5;
      this.defence = 3;
      this.attack = 0;
      this.magicAttack = 6;
      this.mana = 7;
      this.intelligence = 8;
      this.manaReplenishmentPotion = 3;
      this.attackBoostPotion = 3;
      this.healthBoostPotion = 3;
      this.level = 1;
      this.skillType = "Fireball";
      this.skill = 1;
    } else if (type === "Alchemist") {
      this.characterType = type;
      this.health = 6;
      this.defence = 6;
      this.attack = 2;
      this.magicAttack = 0;
      this.mana = 2;
      this.intelligence = 9;
      this.manaReplenishmentPotion = 3;
      this.attackBoostPotion = 3;
      this.healthBoostPotion = 3;
      this.level = 1;
      this.skillType = "Item Enhancement";
      this.skill = 1;
    } else {
      this.characterType = type;
      this.health = 7;
      this.defence = 4;
      this.attack = 3;
      this.magicAttack = 0;
      this.mana = 6;
      this.intelligence = 6;
      this.manaReplenishmentPotion = 3;
      this.attackBoostPotion = 3;
      this.healthBoostPotion = 3; 
      this.level = 1;
      this.skillType = "Self Heal";
      this.skill = 1;
    }
  }

  useSkill() {
  if(this.skill === 1){
      this.skill = 0;
    } else {
      return "cooldown";
    } 
  };

  selfHeal() {
    this.useSkill();
    const newHealthIncrementation = `${this.level}0`;
    const newHealthIncrement = parseInt(newHealthIncrementation);
    this.health += newHealthIncrement;
  };

  fightDragon(){
    
  }
}



export default class Character {
  constructor(type){
    if (type === "Martial Artist") {
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
      this.reflect = 1;
    } else if (type === "Berserker") {
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
      this.fury = 1;
    } else if (type === "Wizard") {
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
      this.fireball = 1;
    } else if (type === "Alchemist") {
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
      this.itemEnhancement = 1;
    } else {
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
      this.selfHeal = 1;
    }
  }
  
  
}


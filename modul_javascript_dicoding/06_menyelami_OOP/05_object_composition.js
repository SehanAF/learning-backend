class Character {
 constructor(name, health, position) {
   this.name = name;
   this.health = health;
   this.position = position;
 }

 canMove() {
   console.log(`${this.name} is moving.`);
 }
}

function canAttack(character) {
 return {
   attack: () => {
     console.log(`${character.name} is attacking.`);
   }
 };
}

function canHeal(character) {
 return {
   heal: () => {
     console.log(`${character.name} is healing.`);
   }
 };
}

function canDefend(character) {
 return {
   defend: () => {
     console.log(`${character.name} is defending.`);
   }
 };
}

function canCastSpell(character) {
 return {
   castSpell: () => {
     console.log(`${character.name} is casting a spell.`);
   }
 };
}

function createMonster(name) {
 const character = new Character(name, 200, 'Rusher');
 return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
 const character = new Character(name, 150, 'Tank');
 return Object.assign(character, canAttack(character), canDefend(character));
}

function createWizard(name) {
 const character = new Character(name, 100, 'Support');
 return Object.assign(character, canAttack(character), canCastSpell(character), canHeal(character));
}

function createWarrior(name) {
 const character = new Character(name, 100, 'Rusher');
 return Object.assign(character, canAttack(character), canDefend(character), canHeal(character));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.attack();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.attack();
wizard.castSpell();
wizard.heal();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();
warrior.heal();

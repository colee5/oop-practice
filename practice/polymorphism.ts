class Hero {
  hunger: number;
  health: number;

  attack() {
    console.log("I'm attacking");
  }

  move() {
    console.log("I'm moving");
  }
  eat() {
    console.log("I'm eatting");
  }
}

class Archer extends Hero {
  arrows: number;

  attack(): void {
    super.attack();
    console.log("Firing an arrow");
    this.arrows -= 1;
  }
}

class Mage extends Hero {
  mana: number;

  attack(): void {
    super.attack();
    console.log("Throwing a potion");
    this.mana -= 1;
  }
}

class Knight extends Hero {
  shield: number;

  attack(): void {
    super.attack();
    console.log("I'm swinging with a sword");
  }
}

// The mage is a hero, Wizard is also a hero
// Wizard IS-A Hero
class Wizard extends Mage {}

const archer: Hero = new Archer();
const mage: Hero = new Mage();
const knight: Hero = new Knight();
const wizard: Hero = new Wizard();

class Tribe {
  private heros: Hero[];

  setHeros(heros: Hero[]) {
    this.heros = heros;
  }

  attack(): void {
    for (let hero of this.heros) {
      hero.attack();
    }
  }
}

archer.attack();
mage.attack();
knight.attack();

const heros: Hero[] = [archer, mage, knight];

const tribe = new Tribe();
tribe.setHeros(heros);

tribe.attack();

// –-------------

class Thief extends Hero {
  attack() {
    super.attack();
    console.log("Pick pocket");
  }
}

const thief = new Thief();
const heros2: Hero[] = [knight, thief, mage];

const tribe2 = new Tribe();
tribe2.setHeros(heros2);

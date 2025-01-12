Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data (properties) and code (methods).

## Classes & Objects
Classes are the blueprint for creating objects, they are instances of classes with their own properties and methods. Example: A car class can have multiple car objects(toyota, honda, etc...)

```typescript showLineNumbers
class Player {
  health: number;
  velocity: number;

  greet() {
    console.log("hello world");
  }
}

const mario = new Player();

mario.health = 10;
mario.velocity = 1;
mario.greet();
```

Classes: We have superclasses and then we have subclasses, for example: Players which is a superclass, and then we have there code which most of the players share. We share this code through inheritance - means that the subclasses for example `Player Peach`  has some unique properties, we inherit the global `players` configs and then on top of those add the unique ones. We need to be careful not to reuse inheritance as it might be hurting performance.

## Object in OOP

Mental model is that for example we have `const isInvincible = true` and then we have `const hasFireAbilitiy = true`. These as we might say are two different constants, but in javascript there is just one boolean true. And everytime we declare a boolean constant its an object pointing to the same true boolean behind the scenes. So this logic we now make it as a class. example:

```typescript showLineNumbers
class Player {
  name: string;
  health: number;
  isInvincible: boolean;
  crush: Player; // player type
  
   greet() {
     console.log({`Hello, this is a class instance of ${this.name} `})
   }
   
}

const mario = new Player();
mario.name = "Mario";
mario.health = 10;
mario.isInvincible = true;

const peach = new Player();
peach.name = "Peach";
peach.health = 10;
peach.isInvincible = true;

peach.greet();
mario.greet();

mario.crush = peach;
mario.crush.health = peache's health
// Player is a blueprint of instructions.
```


![[Screenshot 2025-01-09 at 21.04.35.png|350]]

when we declare the mario instance of the Player class, we point another object to that same class. Just like the example explained with the boolean values. Where this is happening is the heap, this is where the objects are stored in Javascript.

## Encapsulation

By default all instance variables, the `health` & `speed` are public, we can add private keyword to them.
And we get two functions, setters & getters. This way incapsulate the instances and we prevent from attack setters to manually hardcode for exampel `mario.health = -8`

```typescript showLineNumbers
class Player {
  private health: number;
  private speed:number;
  
  setHealth(health: number) {
  if (health < 0) {
      console.log("You cannot set the health below zero!");
      return;
    } 
    
    this.health = health;
  }
  
  getHealth() {
    return this.health;
  }
}

const mario = new Player();
mario.setHealth(10);

console.log(`Mario has ${mario.getHealth()} health`) // 10
```


## Inheritance

Inheritance is beneficial because it removes duplication and the parent-children situation explained above, it gives you less space for you to make mistakes. 

```typescript showLineNumbers
class Animal {
  health: number;
  speed: number;
  protected coordX:  number;
  protected coordY:  number;
  
  setCoordX(x:number) {
   this.coordX = x;
  }
  
  setCoordY(y:number) {
   this.coordY = y;
  }
  
  eat() {
   console.log('I'm eating.)
  }
  
  sleep() {
  console.log('I'm sleeping.)
  }

  move() {
  console.log('I'm moving.)
  }
  
  makeNoise() {
  console.log('Make noise.)
  }
  
}

// Dog IS-A animal
// You say to your self to test it sometimes
// This Dog IS-A animal, Dog HAS-A owner etc..

class Cat extends Animal {};
class Wolf extends Animal {};

const dog = new Dog();
const wolf = new Wolf();

// The canine extends the animal, and then
// Below the Wolf extends Canine and etc...

class Canine = extends Animal {
  makeNoise(){
   console.log("Bark bark bark.)
  }
}

class Dog extends Canine {
  owner: string; // Dog HAS-A owner
  
  makeNoise() {
    console.log("Bark"); // we redaclare
  }
  returnToOwner() {
    console.log(`I'm at ${this.coordX}, returning to owner..`)
  }
}


class Wolf extends Canine {}
const wolf = new Wolf();
wolf.makeNoise()

dog.setCoordX(5);
dog.setCoordY(5);
dog.eat()...
```

To make a children, so-called subclass we use the keyword `extends`. This is basically what creates a new class instance of the superclass, and then from that you make new instances, `dog = new Dog()`.

When we use the keyword extends in there we can `redaclare` existing functions from the superclass, and we can also add `new functions`.

Superclass private variables don't get inherited within subclasses, there is another keyword we need to use called `protected`.

This explained above for example when a Subclass extends from a Superclass and it updates (overwrites) some function, this is basically what i just said - overwriting the original function with a whole new one. This problem can be endured with the keyword `super` which we use 

```typescript
class Dog extends Animal {

 makeNoise () {
   console.log("Bark bark bark")
 }

  move() {
   console.log("Getting up on all four paws...")
   super.move() // I'm moving..
  }
  // What we did is we basically first overwrote it and then used it in our new initialization but we added another console.log which super. basically combines the both
}
```

## Polymorphism
Polymorphism is a core concept which allows objects of different types to be treated of objects of a common base type. There are two types of polymorphism. - 
1. Runtime(Dynamic)
2. Compile(static)

```typescript
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

const archer: Hero = new Archer();
const mage: Hero = new Mage();
const knight: Hero = new Knight();

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
```
// we don't want to provide any code implementation
// just a template which a subclass should follow

abstract class Drunk {
  abstract howMuchDrunk(): void;
}

class Circle extends Drunk {
  howMuchDrunk(): number | null {
    return null;
  }
}

// ---------

abstract class Heroes {
  hunger: number;
  health: number;

  abstract attack(): void;

  move(): void {
    console.log("I'm Moving");
  }

  eat(): void {
    console.log("I'm Eating");
  }
}

abstract class Mages extends Heroes {
  mana: number;
}

class Wizards extends Mages {
  attack(): void {
    this.mana -= 1;
    console.log("Wizard attacks");
  }
}

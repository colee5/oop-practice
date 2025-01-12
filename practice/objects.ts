class Player {
  private health: number;
  private speed: number;

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

console.log(`Mario has ${mario.getHealth()} health`); // 10

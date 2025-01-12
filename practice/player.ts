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

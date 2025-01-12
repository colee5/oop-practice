var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("hello world");
    };
    return Player;
}());
var mario = new Player();
mario.health = 10;
mario.velocity = 1;
mario.greet();

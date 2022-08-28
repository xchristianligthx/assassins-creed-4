class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/812DBvxX+sL._AC_SX679_.png");
//./assets/player.png
    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(40);
    fill("red");
    text("EDWARD KENWAY", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320, 50, 70, 30);
    pop();
  }

  reduceLife(archerLife) {
    if (archerLife === 2) {
      this.life1 = "red";
    }

    if (archerLife === 1) {
      this.life2 = "red";
    }

    if (archerLife === 0) {
      this.life3 = "red";
    }
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 30, 50, this.width, this.height);
    pop();
  }
}

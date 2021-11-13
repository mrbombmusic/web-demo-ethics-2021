

let textBox = document.getElementById("word");
let textButton = document.getElementById("wordButton")

let textInput = "";
let words = [];

textButton.onclick = () => {
textInput = textBox.value;
let cor = document.querySelector('input[name="color"]:checked').value;
words = [];
for(let i = 0; i < 25; i++){
  words.push(new Word(textInput, random(-200, 200), random(-200, 200), random(360), cor ))
}
}

function setup(){
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas");
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for(let i = 0; i < words.length; i++) {
    words[i].display();
  }
}


class Word {
  constructor(word, x, y, angle, c) {
    this.word = word;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.c = c
  }

  display() {
    push();
    translate(200, 200);
    rotate(this.angle);
    fill(this.c)
    textSize(36);
    text(this.word, this.x, this.y);
    pop();
  }
}

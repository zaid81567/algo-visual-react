export const linearSearchSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.createCanvas(600, 200).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 12)+1);
  p5.index = 0;
  p5.target = p5.values[Math.floor(Math.random() * p5.values.length)];
  p5.found = false;
  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
  p5.goUp = false;
};

export const linearSearchDraw = (p5) => {
  p5.background(0);

  for (let i = 0; i < p5.values.length; i++) {
    if (i === p5.index) {
      p5.fill(p5.found ? 'green' : 'orange');
    } else {
      p5.fill(239);
    }

    p5.rect(i * 40 + 10, 200 - p5.values[i]*10, 30, p5.values[i]*10);
    p5.fill(255);
    p5.textAlign(p5.CENTER , p5.CENTER);
    p5.text(p5.values[i], i * 40 + 25, 200-p5.values[i]*10 - 15);
  }

  if (!p5.found && p5.index < p5.values.length) {
    if (p5.values[p5.index] === p5.target) {
      p5.found = true;
    } else {
      p5.index++;
    }
  }
};

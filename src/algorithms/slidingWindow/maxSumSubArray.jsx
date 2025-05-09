export const maxSumSubArraySetup = (p5, canvasParentRef) => {
if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300

  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15}, () => Math.floor(Math.random() * 50));
  p5.k = 5;
  p5.i = 0;
  p5.maxSum = 0;
  p5.currentSum = 0;
  p5.bestStart = 0;
  p5.frameRate(2);
};

export const maxSumSubArrayDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;
  p5.textSize(14);

  // draw array
  for (let i = 0; i < p5.values.length; i++) {
    if (i >= p5.i && i < p5.i + p5.k) {
      p5.fill("orange");
    } else if (i >= p5.bestStart && i < p5.bestStart + p5.k) {
      p5.fill("green");
    } else {
      p5.fill(255);
    }
    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);
  }

  // update sliding window logic
  if (p5.i + p5.k <= p5.values.length) {
    p5.currentSum = 0;
    for (let j = p5.i; j < p5.i + p5.k; j++) {
      p5.currentSum += p5.values[j];
    }

    if (p5.currentSum > p5.maxSum) {
      p5.maxSum = p5.currentSum;
      p5.bestStart = p5.i;
    }

    p5.i++;
  }
};

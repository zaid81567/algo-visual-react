//TWO POINTER - PAIR WITH GIVEN SUM
export const pairWithGivenSumSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)).sort((a,b)=> a - b);

  p5.p1 = 0;
  p5.p2 = p5.values.length - 1;

  p5.a = Math.floor(Math.random() * p5.values.length);
  p5.b = undefined;

  do{
    p5.b = Math.floor(Math.random() * p5.values.length);
  }while(p5.a == p5.b);

  p5.sum = p5.values[p5.a] + p5.values[p5.b];
  p5.isPairFound = false;

  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};


export const pairWithGivenSumDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;

  p5.fill(255);
  p5.text("Finding Sum: "+p5.sum, 20,20);
  if(p5.isPairFound){
      p5.fill(accent_green);
      p5.text("Pair found at: "+p5.p1+" & "+p5.p2, 20,40);
  }

  // draw array
  for (let i = 0; i < p5.values.length; i++) {

    if(!p5.isPairFound){
        if(i == p5.p1 || i == p5.p2) p5.fill("red")
        else p5.fill(255);
    }else{
        if(i == p5.p1 || i == p5.p2) p5.fill(accent_green)
        else p5.fill(255);
    }

    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p1", p5.low * side + 88, 300/2 - side/2 + 20);
    p5.text("p2", p5.high * side + 88, 300/2 - side/2 + 20);
  }

  // The Dutch National Flag Algorithm Logic
  if(!p5.isPairFound){
    let currentSum = p5.values[p5.p1] + p5.values[p5.p2];
    if(currentSum == p5.sum){
        p5.isPairFound = true;
    }else if(currentSum < p5.sum){
        p5.p1++;
    }else if(currentSum > p5.sum){
        p5.p2--;
    }
  }else{
    p5.noLoop();
  }

};

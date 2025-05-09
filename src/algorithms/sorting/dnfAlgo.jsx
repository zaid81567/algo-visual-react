//BUBBLE SORT
export const dnfAlgoSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 3));

  p5.low = 0;
  p5.mid = 0;
  p5.high = p5.values.length - 1;

  p5.hasSorted = false;
  p5.didSwapped = false;

  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};


export const dnfAlgoDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;
  p5.textSize(14);

  // draw array
  for (let i = 0; i < p5.values.length; i++) {
    if(p5.values[i] == 0){
        p5.fill("red");
    }else if(p5.values[i] == 1){
        p5.fill("white");
    }else if(p5.values[i] == 2){
        p5.fill("blue");
    }

    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);

    p5.textSize(12);
    p5.text("mid", p5.mid * side + 85, 300/2 - side/2 + 50);
    p5.fill(0)
    p5.text("low", p5.low * side + 85, 300/2 - side/2 + 20);
    p5.text("high", p5.high * side + 83, 300/2 - side/2 + 20);
  }

  // The Dutch National Flag Algorithm Logic
  if(!p5.hasSorted){
    if (p5.values[p5.mid] == 0){
        // if mid 0 | swap mid:low | increament both
        [p5.values[p5.mid], p5.values[p5.low]] = [p5.values[p5.low], p5.values[p5.mid]]
        p5.mid++;
        p5.low++;
    }else if (p5.values[p5.mid] == 1){
        // if mid 1 | increament mid
        p5.mid++;
    }else if(p5.values[p5.mid] == 2){
        // if mid 2 | swap mid:high | decreament high
        [p5.values[p5.mid], p5.values[p5.high]] = [p5.values[p5.high], p5.values[p5.mid]]
        p5.high--;
    }

    // check if sorted
    if(p5.mid > p5. high){
        p5.hasSorted = true;
    }
  }else{
    p5.noLoop();
  }

};

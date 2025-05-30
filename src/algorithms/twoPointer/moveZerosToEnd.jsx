//TWO POINTER - MOVE ZEROS TO END
export const moveZerosToEndSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 5));

  p5.p1 = 0;
  p5.p2 = p5.values.length - 1;

  p5.hasAllZerosMoved = false;

  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};


export const moveZerosToEndDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;
  
  if(!p5.hasAllZerosMoved){
      p5.fill("red");
  }else{
      p5.fill(accent_green);
  }
  p5.text("0s moved to left: "+p5.hasAllZerosMoved, 20,20);

  // draw array
  for (let i = 0; i < p5.values.length; i++) {

    if(i> p5.p2) p5.fill(accent_green)
    else if(i == p5.p1 || i == p5.p2) p5.fill("red");
    else p5.fill(255)

    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p1", p5.p1 * side + 88, 300/2 - side/2 + 20);
    p5.text("p2", p5.p2 * side + 88, 300/2 - side/2 + 20);
  }

  // The Dutch National Flag Algorithm Logic
  if(!p5.hasAllZerosMoved && p5.p1 < p5.p2){
    if(p5.values[p5.p1] == 0 && p5.values[p5.p2] != 0){
        [p5.values[p5.p1], p5.values[p5.p2]] = [p5.values[p5.p2], p5.values[p5.p1]]
        p5.p2--;
    }else if(p5.values[p5.p2] == 0){
        p5.p2--;
    }
    else{
        p5.p1++;
    }

    if(p5.p1 == p5.p2){
            p5.hasAllZerosMoved = true;
    }
  }else{
    p5.noLoop();
  }

};

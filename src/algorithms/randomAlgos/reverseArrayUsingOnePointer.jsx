// ONE POINTER - REVERSE ARRAY USING ONE POINTER
export const reverseArrayUsingOnePointerSetup = (p5, canvasParentRef) => {
    if (document.querySelector('canvas')) {
     document.querySelector('canvas').remove();
   }
 
   p5.w_canvas = 600
   p5.h_canvas = 300
 
 
   p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
   p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 20));
   p5.reversedArray = Array.from({ length: 15 }, () => (undefined));
 
   p5.p1 = p5.values.length-1;
 
   p5.hasReversed = false;
 
   p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
 };
 
 
 export const reverseArrayUsingOnePointerDraw = (p5) => {
   p5.background(0);
   let accent_green = "#bcfd49";
   let side = 30;
   
   // status
   if(!p5.hasReversed){
       p5.fill("red");
   }else{
       p5.fill(accent_green);
   }
   p5.text("Has Reversed: "+p5.hasReversed, 20,20);
 
   // draw top array
   for (let i = 0; i < p5.values.length; i++) {
 
     if(i > p5.p1) p5.fill(200)
     else if(i == p5.p1) p5.fill("red");
     else p5.fill(255)
 
     // x y w h
     p5.rect(i * side + 80, 100 - side/2, side, side);
     p5.fill(255);
     
     p5.textSize(14);
     p5.text(p5.values[i], i * side + 85, 100 - side/2 - 10);
 
     p5.textSize(12);
     p5.fill(255)
     p5.text("p1", p5.p1 * side + 88, 100 - side/2 + 20);
   }

   // draw bottom array
   for (let i = 0; i < p5.values.length; i++) {
 
    if(!p5.hasReversed){
      if(i < (p5.values.length - p5.p1 - 1)) p5.fill(accent_green)
      else p5.fill(255)
    }else{
      p5.fill(accent_green)
    }

    // x y w h
    p5.rect(i * side + 80, 200 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.reversedArray[i], i * side + 85, 200 - side/2 - 10);
  }
 
   // Reverse Array In Place
   if(!p5.hasReversed){
      if(p5.p1 >= 0){
        p5.reversedArray[p5.values.length - p5.p1 - 1] = p5.values[p5.p1];
        p5.p1--;
      }else{
        p5.hasReversed = true;
      }
   }else{
     p5.noLoop();
   }
 
 };
 
// MERGE TWO SORTED ARRAYS
export const mergeTwoSortedArraysSetup = (p5, canvasParentRef) => {
    if (document.querySelector('canvas')) {
     document.querySelector('canvas').remove();
   }
 
   p5.w_canvas = 600
   p5.h_canvas = 300
 
 
   p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
   p5.arr1 = Array.from({length: 7}, () => Math.floor(Math.random()*15)).sort((a,b)=>(a-b));
   p5.arr2 = Array.from({length: 8}, () => Math.floor(Math.random()*15)).sort((a,b)=>(a-b));
   p5.mergedArray = Array.from({ length: 15 }, () => (undefined));
 
   p5.p1 = 0;
   p5.p2 = 0;
   p5.p3 = 0;
 
   p5.hasMerged = false;
 
   p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
 };
 
 
 export const mergeTwoSortedArraysDraw = (p5) => {
   p5.background(0);
   let accent_green = "#bcfd49";
   let side = 30;
   
   // status
   if(!p5.hasMerged){
       p5.fill("red");
   }else{
       p5.fill(accent_green);
   }
   p5.text("Has Merged: "+p5.hasMerged, 20,20);
 
   // draw first array
   for (let i = 0; i < p5.arr1.length; i++) {
 
     if(i< p5.p1) p5.fill(200)
     else if(i == p5.p1) p5.fill("red");
     else p5.fill(255)
 
     // x y w h
     p5.rect(i * side + 80, 50 - side/2, side, side);
     
     p5.fill(0);
     p5.textSize(14);
     p5.text(p5.arr1[i], i * side + 90, 50 - side/2 + 20);
 
     p5.textSize(12);
     p5.fill(255)
     p5.text("p1", p5.p1 * side + 88, 50 - side/2 + 50);
    //  p5.text("p2", p5.p2 * side + 88, 100 - side/2 + 20);
   }

   // draw second array
   for (let i = 0; i < p5.arr2.length; i++) {
 
    if(i< p5.p2) p5.fill(200)
    else if(i == p5.p2) p5.fill("red");
    else p5.fill(255)

    // x y w h
    p5.rect(i * side + 80, 150 - side/2, side, side);
    p5.fill(0);
    
    p5.textSize(14);
    p5.text(p5.arr2[i], i * side + 85, 150 - side/2 + 20);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p2", p5.p2 * side + 88, 150 - side/2 + 50);
   //  p5.text("p2", p5.p2 * side + 88, 100 - side/2 + 20);
    }

   // draw merged array
   for (let i = 0; i < p5.mergedArray.length; i++) {
 
    if(!p5.hasMerged){
      if(i< p5.p3) p5.fill(accent_green)
      else p5.fill(255)
    }else{
      p5.fill(accent_green)
    }

    // x y w h
    p5.rect(i * side + 80, 250 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.mergedArray[i], i * side + 85, 250 - side/2 - 10);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p3", p5.p3 * side + 88, 250 - side/2 + 50);
  }
 
  // Logic
   if(!p5.hasMerged){
    if(p5.p1 < p5.arr1.length && p5.p2 < p5.arr2.length){
        if(p5.arr1[p5.p1] < p5.arr2[p5.p2]){
            p5.mergedArray[p5.p3] = p5.arr1[p5.p1];
            p5.p1++;
            p5.p3++;
        }else{
            p5.mergedArray[p5.p3] = p5.arr2[p5.p2];
            p5.p2++;
            p5.p3++;
        }
    }else if(p5.p1 < p5.arr1.length){
        p5.mergedArray[p5.p3] = p5.arr1[p5.p1];
        p5.p1++;
        p5.p3++;
    }else if(p5.p2 < p5.arr2.length){
        p5.mergedArray[p5.p3] = p5.arr2[p5.p2];
        p5.p2++;
        p5.p3++;
    }else if(p5.p1 == p5.arr1.length && p5.p2 == p5.arr2.length){
        p5.hasMerged = true;
    }
   }else{
     p5.noLoop();
   }
 
 };
 
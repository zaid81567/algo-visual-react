//CYCLE SORT
export const cycleSortSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 12)+1);
  p5.key = 0;
  p5.j = p5.key+1;
  p5.smallerValsIndex = [];
  p5.hasSorted = false;
  p5.frameRate(20); // default is 60fps but now with this we have 2fps, for slowing down the animation
  p5.count = 0;
};

export const cycleSortDraw = (p5) => {

  p5.background(0);
  let accent_green = "#bcfd49";

  if(p5.hasSorted === false){
    p5.fill("red");
  }else{
    p5.fill(accent_green);
  }
  p5.text("hasSorted: "+p5.hasSorted, 20,20);

  // drawing bars each frame
  for( let i = 0; i < p5.values.length; i++){
    if (i == p5.key){
        p5.fill(accent_green);
    }else if (p5.smallerValsIndex.includes(i)){
        p5.fill("red");
    }else {
        p5.fill(255);
    }
    p5.rect(i * 40 + 10, p5.h_canvas - p5.values[i]*10, 30, p5.values[i]*10);
    
    // style of values over bar
    if(p5.values[i] > 9){
      p5.text(p5.values[i], i * 40 + 17, p5.h_canvas -p5.values[i]*10 - 15);
    }else{
      p5.text(p5.values[i], i * 40 + 20, p5.h_canvas -p5.values[i]*10 - 15);
    }
  }

  // Sorting algo
  if (!p5.hasSorted && p5.key < p5.values.length){
    if (p5.j < p5.values.length){
        if (p5.values[p5.key] > p5.values[p5.j]){
            p5.smallerValsIndex.push(p5.j);
        }
        p5.j++;
    }else{
        if (p5.smallerValsIndex.length > 0){
            [p5.values[p5.key], p5.values[p5.smallerValsIndex.length + p5.key - 1]] = [p5.values[p5.smallerValsIndex.length + p5.key - 1], p5.values[p5.key]];
        }else if (p5.smallerValsIndex.length == 0){
            p5.key++;
        }
        p5.j = p5.key+1;
        p5.smallerValsIndex = [];
    }
  }else{
    p5.noLoop();
  }

};

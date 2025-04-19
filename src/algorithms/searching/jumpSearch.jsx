//JUMP SEARCH
export const jumpSearchSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 25)+1).sort((a,b)=> a - b);
  p5.target = p5.values[Math.floor(Math.random() * p5.values.length)];
  p5.skips = 3; // feat (control): add skip control option in ui
  p5.i = 0;
  p5.leftIndex = 0;
  p5.status = "false";
  p5.found = false;
  p5.startLinearSearch = false;
  p5.noLoop = false
  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};

export const jumpSearchDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";

  // p5.textAlign(p5.LEFT , p5.LEFT);
  p5.fill(255);
  p5.text("Jump Searching: "+p5.target, 20,20);
  if(p5.found === false){
    p5.fill("red");
  }else{
    p5.fill(accent_green);
  }
  p5.text("hasFound: "+p5.found, 20,40);

  // drawing bars
  for (let i = 0; i < p5.values.length; i++) {
    if (i >= p5.leftIndex && i <= p5.i) {
      p5.i == i? p5.fill(accent_green): p5.fill("orange");
    }
    else {
      p5.fill(239);
    }
    p5.rect(i * 40 + 10, p5.h_canvas - p5.values[i]*10, 30, p5.values[i]*10);


    p5.fill(255);
    if(p5.values[i] > 9){
      p5.text(p5.values[i], i * 40 + 17, p5.h_canvas -p5.values[i]*10 - 15);
    }else{
      p5.text(p5.values[i], i * 40 + 20, p5.h_canvas -p5.values[i]*10 - 15);
    }
  }

  if (p5.noLoop){
    p5.noLoop()
  }

  // searching algo
  if(!p5.found){
      if(!p5.startLinearSearch){
        //skipSearch for possible range
      if (p5.target ==  p5.values[p5.i]){
          p5.found = true;
        //   p5.status = "true";
      }else if (p5.target < p5.values[p5.i]){
          p5.startLinearSearch = true;
      }else{
          p5.leftIndex = p5.i;
          p5.i = (p5.i + p5.skips) <= p5.values.length - 1 ? (p5.i + p5.skips) : p5.values.length - 1;
          if (p5.leftIndex == p5.values.length -1 ){
            //   p5.status = "Value doesn't exist in sample."
              p5.noLoop = true
          }
      }
    }else{
        //startLinearSearch
        if(p5.values[p5.i] == p5.target){
            p5.found = true;
        }else{
            p5.i--;
            // if (p5.i < p5.leftIndex){
            //     p5.status = "Value doesn't exist in sample."
            //     noLoop();
            // }
        }
    }
  }else{
    //if found
    // p5.status = "true";
    p5.noLoop = true;
  }
}

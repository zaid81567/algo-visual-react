//EXPONENTIAL SEARCH
export const exponentialSearchSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300

  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 25)+1).sort((a,b)=> a - b);
  p5.target = p5.values[Math.floor(Math.random() * p5.values.length)];
  p5.i = 0;
  // for binary search
  p5.isFirstIteration = true;
  p5.l = 0;
  p5.h = 0;
  p5.mid = 0;
  p5.found = false;
  p5.foundAt = -1;
  p5.startBinarySearch = false;
  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};

export const exponentialSearchDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";

  p5.fill(255);
  p5.text("Exponential Searching: "+p5.target, 20,20);
  if(p5.found === false){
    p5.fill("red");
  }else{
    p5.fill(accent_green);
  }
  p5.text("hasFound: "+p5.found, 20,40);

  // drawing bars
  for (let j = 0; j < p5.values.length; j++) {
    if (p5.isFirstIteration) {
      if(j == 0){
        p5.fill("orange");
      }else{
        p5.fill("blue");
      }
    }else if (!p5.found && p5.startBinarySearch){
      if (j == p5.l || j == p5.h) {
        p5.fill("red");
      }else if(j == p5.mid) {
        p5.fill(accent_green);
      }else{
        p5.fill("blue");
      }

    }else if (p5.found){
      if (j == p5.foundAt) {
        p5.fill(accent_green);
      }else{
        p5.fill(239);
      }
    }else{
      if (j >= Math.pow(2,p5.i - 1) && j <= Math.pow(2,p5.i)) {
          p5.fill("orange");
      }
      else {
          p5.fill("blue");
      }
    }
    p5.rect(j * 40 + 10, p5.h_canvas - p5.values[j]*10, 30, p5.values[j]*10);


    p5.fill(255);
    if(p5.values[j] > 9){
      p5.text(p5.values[j], j * 40 + 17, p5.h_canvas -p5.values[j]*10 - 15);
    }else{
      p5.text(p5.values[j], j * 40 + 20, p5.h_canvas -p5.values[j]*10 - 15);
    }
  }



  // exponential algo - first find range then do binary search

  if(!p5.found){
      if (!p5.startBinarySearch && !p5.isFirstIteration){
        if (p5.target ==  p5.values[Math.min(p5.values.length - 1, Math.pow(2, p5.i))]){
            p5.found = true;
            p5.foundAt = Math.min(p5.values.length - 1, Math.pow(2, p5.i));
        }else if (p5.target < p5.values[Math.min(p5.values.length - 1, Math.pow(2, p5.i))]){
            p5.l = Math.max(0, Math.pow(2, p5.i - 1));
            p5.h = Math.min(p5.values.length - 1, Math.pow(2, p5.i));
            if (p5.l < 0) p5.l = 0;
            p5.mid = Math.floor((p5.l + p5.h) / 2);
            p5.startBinarySearch = true;
        }else{
            p5.i++;
        }
      }else if (p5.isFirstIteration) {
        if (p5.target == p5.values[0]){
            p5.found = true;
            p5.foundAt = 0;
        }
        p5.isFirstIteration = false;
      }else{
          //startBinarySearch
          if (p5.target == p5.values[p5.mid]){
              p5.found = true;
              p5.foundAt = p5.mid;
          }else if (p5.target < p5.values[p5.mid]){
              p5.h = p5.mid - 1;
          }else{
              p5.l = p5.mid + 1;
          }
          p5.mid = Math.floor((p5.l + p5.h) / 2);
      }
  }else{
    p5.noLoop = true;
  }
}

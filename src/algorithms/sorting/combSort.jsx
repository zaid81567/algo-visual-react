//COMB SORT
export const combSortSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)+1);
  p5.shrink_factor = 1.3;
  p5.gap = Math.floor(p5.values.length / p5.shrink_factor);
  p5.a = 0;
  p5.b = p5.a + p5.gap;
  p5.didSwapped = false;
  p5.hasSorted = false;
  p5.frameRate(20); // default is 60fps but now with this we have 2fps, for slowing down the animation
};

export const combSortDraw = (p5) => {
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
    

    if ( i == p5.a){
        p5.fill(accent_green);
    }else if ( i == p5.b){
      p5.fill("orange")
    }else{
        p5.fill(255)
    }
    p5.rect(i * 40 + 10, p5.h_canvas - p5.values[i]*10, 30, p5.values[i]*10);
    
    if(p5.values[i] > 9){
      p5.text(p5.values[i], i * 40 + 17, p5.h_canvas -p5.values[i]*10 - 15);
    }else{
      p5.text(p5.values[i], i * 40 + 20, p5.h_canvas -p5.values[i]*10 - 15);
    }
  }

  // sorting algo
  if (!p5.hasSorted){
    if (p5.b < p5.values.length){
        if (p5.values[p5.a] > p5.values[p5.b]){
            // swapping values
            [p5.values[p5.a], p5.values[p5.b]] = [p5.values[p5.b], p5.values[p5.a]];
            if (p5.gap == 1){
              p5.didSwapped = true;
            }
        }
        p5.a++;
        p5.b = p5.a + p5.gap;
    }else{
        if (p5.gap != 1){
          p5.gap = Math.floor(p5.gap/p5.shrink_factor);
          p5.a = 0;
          p5.b = p5.a + p5.gap;
        }else if(p5.didSwapped){
          p5.a = 0;
          p5.b = p5.a + p5.gap;
          p5.didSwapped = false;
        }else{
          // if gap ==1 and noSwapOccured
          p5.noLoop();
        }
        
        // console.log(p5.a, p5.b, p5.gap)
    }
  }

};
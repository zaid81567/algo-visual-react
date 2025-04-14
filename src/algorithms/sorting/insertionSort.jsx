//INSERTION SORT
export const insertionSortSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 12)+1);
  p5.key = 0;
  p5.j = p5.key+1;
  p5.insertingVal = 0;
  p5.hasSorted = false;
  p5.isInserting = false;
  p5.frameRate(3); // default is 60fps but now with this we have 2fps, for slowing down the animation
  p5.count = 0;
};

export const insertionSortDraw = (p5) => {
    if(p5.count%10 == 0){
    console.log(p5.count)
    p5.count++;
    }

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
    if ( i == p5.j){
        if(!p5.isInserting){
            p5.fill("orange");
        }else{
            p5.fill("red")
        }
    }else if ( i == p5.key){
      p5.fill(accent_green)
    }else{
        p5.fill(255)
    }
    p5.rect(i * 40 + 10, p5.h_canvas - p5.values[i]*10, 30, p5.values[i]*10);
    
    // style of values over bar
    if(p5.values[i] > 9){
      p5.text(p5.values[i], i * 40 + 17, p5.h_canvas -p5.values[i]*10 - 15);
    }else{
      p5.text(p5.values[i], i * 40 + 20, p5.h_canvas -p5.values[i]*10 - 15);
    }
  }

  // sorting algo
  if (!p5.hasSorted && !p5.isInserting){
    if (p5.j < p5.values.length){
        if(p5.values[p5.j] < p5.values[p5.j-1]){
            p5.isInserting = true;
            p5.insertingVal = p5.values[p5.j]
        }else{
            p5.j++;
        }

        if(p5.key == p5.values.length){
            p5.hasSorted = true;
        }
    }
  }else if(p5.isInserting){
    if (p5.j == 0){
        p5.values[p5.j] = p5.insertingVal;
        p5.isInserting = false;
        p5.key = p5.key+1;
        p5.j = p5.key+1;
    }else if (p5.values[p5.j-1] > p5.insertingVal){
        p5.values[p5.j] = p5.values[p5.j-1];
        p5.j--;
    }else if(p5.values[p5.j-1] <= p5.insertingVal){
        p5.values[p5.j] = p5.insertingVal;
        p5.isInserting = false;
        p5.key = p5.key+1;
        p5.j = p5.key+1;
    }
  }

};

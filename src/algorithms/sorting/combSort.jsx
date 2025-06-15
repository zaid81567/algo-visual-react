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

// CODE SNIPPET
export const combSortCodeSnippet = {
  python: `# Comb Sort
arr = [5, 2, 9, 1, 5, 6, 7, 8, 0, 3, 4, 11, 13, 12, 10]
shrink_factor = 1.3
gap = len(arr)
did_swapped = True

while gap > 1 or did_swapped:
    gap = max(1, int(gap // shrink_factor))
    did_swapped = False

    for i in range(len(arr) - gap):
        if arr[i] > arr[i + gap]:
            arr[i], arr[i + gap] = arr[i + gap], arr[i]
            did_swapped = True

print("Sorted array:", arr)`,

  javascript: `// Comb Sort
let arr = [5, 2, 9, 1, 5, 6, 7, 8, 0, 3, 4, 11, 13, 12, 10];
let shrinkFactor = 1.3;
let gap = arr.length;
let didSwapped = true;

while (gap > 1 || didSwapped) {
  gap = Math.floor(gap / shrinkFactor);
  if (gap < 1) gap = 1;
  didSwapped = false;

  for (let i = 0; i + gap < arr.length; i++) {
    if (arr[i] > arr[i + gap]) {
      [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
      didSwapped = true;
    }
  }
}

console.log("Sorted array:", arr);`,

  c: `// Comb Sort
#include <stdio.h>

int main() {
  int arr[] = {5, 2, 9, 1, 5, 6, 7, 8, 0, 3, 4, 11, 13, 12, 10};
  int n = sizeof(arr)/sizeof(arr[0]);
  float shrink_factor = 1.3;
  int gap = n;
  int didSwapped = 1;

  while (gap > 1 || didSwapped) {
    gap = (int)(gap / shrink_factor);
    if (gap < 1) gap = 1;
    didSwapped = 0;

    for (int i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        int temp = arr[i];
        arr[i] = arr[i + gap];
        arr[i + gap] = temp;
        didSwapped = 1;
      }
    }
  }

  printf("Sorted array: ");
  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
  return 0;
}`
}

//SELECTION SORT
export const selectionSortSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 12)+1);
  p5.key = 0;
  p5.j = p5.key+1;
  p5.hasSorted = false;
  p5.min_index = p5.key;
  p5.frameRate(20); // default is 60fps but now with this we have 2fps, for slowing down the animation
//   p5.count = 0;
};

export const selectionSortDraw = (p5) => {
    // console.log(p5.count)
    // p5.count++;

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
    if ( i < p5.key){
        p5.fill(180);
    }else if ( i == p5.j){
      p5.fill("orange")
    }else if ( i == p5.key){
      p5.fill(accent_green)
    }else if ( i == p5.min_index && i != p5.key){
      p5.fill("red")
    }
    else{
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
  if (!p5.hasSorted){
    if (p5.j < p5.values.length){
        if (p5.values[p5.min_index] > p5.values[p5.j]){
            p5.min_index = p5.j;
        }
        p5.j++;

        if(p5.j == p5.values.length){
            if(p5.min_index != p5.key){
                // swapping values
                [p5.values[p5.key], p5.values[p5.min_index]] = [p5.values[p5.min_index], p5.values[p5.key]];
            }
            p5.key = p5.key+1;
            p5.min_index = p5.key;
            p5.j = p5.key+1;
        }
        if(p5.key == p5.values.length-1){
            p5.hasSorted = true;
        }
    }
  }else{
    p5.noLoop();
  }

};


// CODE SNIPPET
export const selectionSortCode= {
  python: `# Selection Sort
arr = [5, 3, 1, 9, 2, 0, 4, 8, 7, 6, 11, 10, 12, 1, 2]
n = len(arr)

for i in range(n - 1):
    min_index = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_index]:
            min_index = j
    if min_index != i:
        arr[i], arr[min_index] = arr[min_index], arr[i]

print("Sorted array:", arr)`,

  javascript: `// Selection Sort
let arr = [5, 3, 1, 9, 2, 0, 4, 8, 7, 6, 11, 10, 12, 1, 2];

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

console.log("Sorted array:", arr);`,

  c: `// Selection Sort
#include <stdio.h>

int main() {
  int arr[] = {5, 3, 1, 9, 2, 0, 4, 8, 7, 6, 11, 10, 12, 1, 2};
  int n = sizeof(arr)/sizeof(arr[0]);

  for (int i = 0; i < n - 1; i++) {
    int min_index = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (min_index != i) {
      int temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
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

// SELECTION SORT DATA
export const selectionSortData = {
  spaceComplexityBest: "O(1)",
  spaceComplexityWorst: "O(1)",
  timeComplexityBest: "O(n^2)",
  timeComplexityWorst: "O(n^2)",
  description: "Selection Sort is a simple sorting algorithm that divides the input list into two parts: a sorted and an unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the end of the sorted part. It is not suitable for large datasets as its average and worst-case time complexity is quite high.",
};
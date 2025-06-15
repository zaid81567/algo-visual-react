//LINEAR SEARCH
export const linearSearchSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 12)+1);
  p5.index = 0;
  p5.target = p5.values[Math.floor(Math.random() * p5.values.length)];
  p5.found = false;
  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};

export const linearSearchDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";

  p5.fill(255);
  p5.text("Linear Searching: "+p5.target, 20,20);
  if(p5.found === false){
    p5.fill("red");
  }else{
    p5.fill(accent_green);
  }
  p5.text("hasFound: "+p5.found, 20,40);

  // drawing bars
  for (let i = 0; i < p5.values.length; i++) {
    if (i === p5.index) {
      p5.fill(p5.found ? accent_green : 'orange');
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

  // searching algo
  if (!p5.found && p5.index < p5.values.length) {
    if (p5.values[p5.index] === p5.target) {
      p5.found = true;
    } else {
      p5.index++;
    }
  }
};

export const linearSearchCode = {
  python: `
def linear_search(arr, target):
    for index in range(len(arr)):
        if arr[index] == target:
            return index
    return -1

# Example
arr = [5, 3, 8, 4, 2]
target = 4
result = linear_search(arr, target)
print("Found at index:" if result != -1 else "Not found", result)
`.trim(),

  javascript: `
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example
const arr = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(arr, target);
console.log(result !== -1 ? "Found at index: " + result : "Not found");
`.trim(),

  c: `
#include <stdio.h>

int linearSearch(int arr[], int size, int target) {
  for (int i = 0; i < size; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

int main() {
  int arr[] = {5, 3, 8, 4, 2};
  int target = 4;
  int size = sizeof(arr) / sizeof(arr[0]);
  int result = linearSearch(arr, size, target);
  if (result != -1)
    printf("Found at index: %d\\n", result);
  else
    printf("Not found\\n");
  return 0;
}
`.trim()
};


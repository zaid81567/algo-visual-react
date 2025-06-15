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


// CODE SNIPPET
export const exponentialSearchCode = { 
  python: `# Exponential Search
def binary_search(arr, l, h, target):
    while l <= h:
        mid = (l + h) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            l = mid + 1
        else:
            h = mid - 1
    return -1

arr = sorted([3, 6, 8, 10, 15, 18, 21, 25, 28, 30, 32, 35, 38, 40, 45])
target = 25

if arr[0] == target:
    print("Found at index 0")
else:
    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2
    result = binary_search(arr, i//2, min(i, len(arr)-1), target)
    print("Found at index:", result if result != -1 else "Not Found")`,

  javascript: `// Exponential Search
function binarySearch(arr, l, h, target) {
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else h = mid - 1;
  }
  return -1;
}

let arr = [3, 6, 8, 10, 15, 18, 21, 25, 28, 30, 32, 35, 38, 40, 45];
let target = 25;

if (arr[0] === target) {
  console.log("Found at index 0");
} else {
  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }
  let result = binarySearch(arr, Math.floor(i/2), Math.min(i, arr.length - 1), target);
  console.log("Found at index:", result !== -1 ? result : "Not Found");
}`,

  c: `// Exponential Search
#include <stdio.h>

int binarySearch(int arr[], int l, int h, int target) {
  while (l <= h) {
    int mid = (l + h) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) l = mid + 1;
    else h = mid - 1;
  }
  return -1;
}

int main() {
  int arr[] = {3, 6, 8, 10, 15, 18, 21, 25, 28, 30, 32, 35, 38, 40, 45};
  int n = sizeof(arr) / sizeof(arr[0]);
  int target = 25;

  if (arr[0] == target) {
    printf("Found at index 0\\n");
  } else {
    int i = 1;
    while (i < n && arr[i] <= target)
      i *= 2;
    int result = binarySearch(arr, i/2, i < n ? i : n - 1, target);
    if (result != -1)
      printf("Found at index: %d\\n", result);
    else
      printf("Not Found\\n");
  }

  return 0;
}`
}
// EXPONENTIAL SEARCH DATA
export const exponentialSearchData = {
  spaceComplexityBest: "O(1)",
  spaceComplexityWorst: "O(log n)",
  timeComplexityBest: "O(1)",
  timeComplexityWorst: "O(log n)",
  description: "Exponential Search is an efficient algorithm for searching in a sorted array. It first finds the range where the target element may exist by repeatedly doubling the index, and then performs a binary search within that range. It is particularly useful for unbounded or infinite lists.",
};
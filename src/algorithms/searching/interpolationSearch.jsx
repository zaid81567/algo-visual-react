//INTERPOLATION SEARCH
export const interpolationSearchSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 25)+1).sort((a,b)=> a - b);
  p5.target = p5.values[Math.floor(Math.random() * p5.values.length)];
  p5.l = 0;
  p5.h = p5.values.length - 1;
//   lo + (((hi - lo) * (data - arr[lo])) // (arr[hi] - arr[lo]));
  p5.mid = Math.floor(p5.l + (((p5.h - p5.l) * (p5.target - p5.values[p5.l])) / (p5.values[p5.h] - p5.values[p5.l])));
  p5.found = false;
  p5.frameRate(1); // default is 60fps but now with this we have 2fps, for slowing down the animation
};

export const interpolationSearchDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";

  // p5.textAlign(p5.LEFT , p5.LEFT);
  p5.fill(255);
  p5.text("Binary Searching: "+p5.target, 20,20);
  if(p5.found === false){
    p5.fill("red");
  }else{
    p5.fill(accent_green);
  }
  p5.text("hasFound: "+p5.found, 20,40);

  // drawing bars
  for (let i = 0; i < p5.values.length; i++) {
    if (i == p5.mid) {
      p5.fill(accent_green);
    } 
    else if(i>= p5.l && i<= p5.h) {
      p5.fill("blue");
    }else{
        p5.fill("white")
    }
    p5.rect(i * 40 + 10, p5.h_canvas - p5.values[i]*10, 30, p5.values[i]*10);


    p5.fill(255);
    if(p5.values[i] > 9){
      p5.text(p5.values[i], i * 40 + 17, p5.h_canvas -p5.values[i]*10 - 15);
    }else{
      p5.text(p5.values[i], i * 40 + 20, p5.h_canvas -p5.values[i]*10 - 15);
    }


  }

    if(p5.hasFound == true){
        p5.noLoop()
    }
  if(p5.target == p5.values[p5.mid]){
    p5.found = true;
    p5.l = p5.mid;
    p5.h = p5.mid;
  }else if(p5.target > p5.values[p5.mid]){
    p5.l = p5.mid+1;
    p5.mid = p5.mid = Math.floor(p5.l + (((p5.h - p5.l) * (p5.target - p5.values[p5.l])) / (p5.values[p5.h] - p5.values[p5.l])));
  }else if(p5.target < p5.values[p5.mid]){
    p5.h = p5.mid-1;
    p5.mid = p5.mid = Math.floor(p5.l + (((p5.h - p5.l) * (p5.target - p5.values[p5.l])) / (p5.values[p5.h] - p5.values[p5.l])));
  }
};


// CODE SNIPPET
export const interpolationSearchCodeSnippet = {
  python: `# Interpolation Search
arr = sorted([3, 7, 9, 12, 17, 19, 23, 26, 31, 34, 38, 42, 47, 50, 55])
target = 26
low = 0
high = len(arr) - 1
found = False

while low <= high and arr[low] <= target <= arr[high]:
    pos = low + ((high - low) * (target - arr[low])) // (arr[high] - arr[low])
    if arr[pos] == target:
        found = True
        break
    elif arr[pos] < target:
        low = pos + 1
    else:
        high = pos - 1

print("Found:", found)`,
  
  javascript: `// Interpolation Search
let arr = [3, 7, 9, 12, 17, 19, 23, 26, 31, 34, 38, 42, 47, 50, 55];
let target = 26;
let low = 0;
let high = arr.length - 1;
let found = false;

while (low <= high && arr[low] <= target && arr[high] >= target) {
  let pos = Math.floor(low + ((high - low) * (target - arr[low])) / (arr[high] - arr[low]));
  if (arr[pos] === target) {
    found = true;
    break;
  } else if (arr[pos] < target) {
    low = pos + 1;
  } else {
    high = pos - 1;
  }
}

console.log("Found:", found);`,

  c: `// Interpolation Search
#include <stdio.h>

int main() {
  int arr[] = {3, 7, 9, 12, 17, 19, 23, 26, 31, 34, 38, 42, 47, 50, 55};
  int n = sizeof(arr) / sizeof(arr[0]);
  int target = 26;
  int low = 0, high = n - 1;
  int found = 0;

  while (low <= high && arr[low] <= target && arr[high] >= target) {
    int pos = low + ((double)(high - low) * (target - arr[low])) / (arr[high] - arr[low]);
    if (arr[pos] == target) {
      found = 1;
      break;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  if (found)
    printf("Found: true\\n");
  else
    printf("Found: false\\n");

  return 0;
}`
}

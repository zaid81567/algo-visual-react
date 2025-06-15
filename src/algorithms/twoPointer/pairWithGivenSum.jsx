//TWO POINTER - PAIR WITH GIVEN SUM
export const pairWithGivenSumSetup = (p5, canvasParentRef) => {
   if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300


  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15 }, () => Math.floor(Math.random() * 20)).sort((a,b)=> a - b);

  p5.p1 = 0;
  p5.p2 = p5.values.length - 1;

  p5.a = Math.floor(Math.random() * p5.values.length);
  p5.b = undefined;

  do{
    p5.b = Math.floor(Math.random() * p5.values.length);
  }while(p5.a == p5.b);

  p5.sum = p5.values[p5.a] + p5.values[p5.b];
  p5.isPairFound = false;

  p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
};


export const pairWithGivenSumDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;

  p5.fill(255);
  p5.text("Finding Sum: "+p5.sum, 20,20);
  if(p5.isPairFound){
      p5.fill(accent_green);
      p5.text("Pair found at: "+p5.p1+" & "+p5.p2, 20,40);
  }

  // draw array
  for (let i = 0; i < p5.values.length; i++) {

    if(!p5.isPairFound){
        if(i == p5.p1 || i == p5.p2) p5.fill("red")
        else p5.fill(255);
    }else{
        if(i == p5.p1 || i == p5.p2) p5.fill(accent_green)
        else p5.fill(255);
    }

    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p1", p5.low * side + 88, 300/2 - side/2 + 20);
    p5.text("p2", p5.high * side + 88, 300/2 - side/2 + 20);
  }

  // The Dutch National Flag Algorithm Logic
  if(!p5.isPairFound){
    let currentSum = p5.values[p5.p1] + p5.values[p5.p2];
    if(currentSum == p5.sum){
        p5.isPairFound = true;
    }else if(currentSum < p5.sum){
        p5.p1++;
    }else if(currentSum > p5.sum){
        p5.p2--;
    }
  }else{
    p5.noLoop();
  }

};

// CODE SNIPPET
export const pairWithGivenSumCode = {
  python: `# Pair with Given Sum (Two Pointer)
arr = sorted([5, 2, 9, 4, 1, 0, 3, 8, 7, 6, 11, 10, 13, 12, 14])
target_sum = arr[2] + arr[11]  # example random pair for target
p1, p2 = 0, len(arr) - 1
pair_found = False

while p1 < p2:
    current_sum = arr[p1] + arr[p2]
    if current_sum == target_sum:
        print(f"Pair found: {arr[p1]} + {arr[p2]} = {target_sum}")
        pair_found = True
        break
    elif current_sum < target_sum:
        p1 += 1
    else:
        p2 -= 1

if not pair_found:
    print("No pair found.")`,

  javascript: `// Pair with Given Sum (Two Pointer)
let arr = [5, 2, 9, 4, 1, 0, 3, 8, 7, 6, 11, 10, 13, 12, 14].sort((a, b) => a - b);
let targetSum = arr[2] + arr[11]; // example pair
let p1 = 0;
let p2 = arr.length - 1;
let found = false;

while (p1 < p2) {
  let currentSum = arr[p1] + arr[p2];
  if (currentSum === targetSum) {
    console.log(\`Pair found: \${arr[p1]} + \${arr[p2]} = \${targetSum}\`);
    found = true;
    break;
  } else if (currentSum < targetSum) {
    p1++;
  } else {
    p2--;
  }
}

if (!found) {
  console.log("No pair found.");
}`,

  c: `// Pair with Given Sum (Two Pointer)
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
  return (*(int *)a - *(int *)b);
}

int main() {
  int arr[] = {5, 2, 9, 4, 1, 0, 3, 8, 7, 6, 11, 10, 13, 12, 14};
  int n = sizeof(arr)/sizeof(arr[0]);

  qsort(arr, n, sizeof(int), compare);

  int targetSum = arr[2] + arr[11]; // example pair
  int p1 = 0, p2 = n - 1;
  int found = 0;

  while (p1 < p2) {
    int sum = arr[p1] + arr[p2];
    if (sum == targetSum) {
      printf("Pair found: %d + %d = %d\\n", arr[p1], arr[p2], targetSum);
      found = 1;
      break;
    } else if (sum < targetSum) {
      p1++;
    } else {
      p2--;
    }
  }

  if (!found) {
    printf("No pair found.\\n");
  }

  return 0;
}`
}


// ALGO DATA
export const pairWithGivenSumData = {
  spaceComplexityBest: "O(1)",
  spaceComplexityWorst: "O(1)",
  timeComplexityBest: "O(1)",
  timeComplexityWorst: "O(n)",
  description: "The Pair with Given Sum algorithm uses the Two Pointer technique to find two numbers in a sorted array that add up to a given target sum. It starts with one pointer at the beginning and another at the end of the array, adjusting their positions based on the current sum until the pair is found or all possibilities are exhausted.",
};
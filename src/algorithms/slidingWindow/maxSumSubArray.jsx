export const maxSumSubArraySetup = (p5, canvasParentRef) => {
if (document.querySelector('canvas')) {
    document.querySelector('canvas').remove();
  }

  p5.w_canvas = 600
  p5.h_canvas = 300

  p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
  p5.values = Array.from({ length: 15}, () => Math.floor(Math.random() * 50));
  p5.k = 5;
  p5.i = 0;
  p5.maxSum = 0;
  p5.currentSum = 0;
  p5.bestStart = 0;
  p5.frameRate(2);
};

export const maxSumSubArrayDraw = (p5) => {
  p5.background(0);
  let accent_green = "#bcfd49";
  let side = 30;
  p5.textSize(14);

  // draw array
  for (let i = 0; i < p5.values.length; i++) {
    if (i >= p5.i && i < p5.i + p5.k) {
      p5.fill("orange");
    } else if (i >= p5.bestStart && i < p5.bestStart + p5.k) {
      p5.fill(accent_green);
    } else {
      p5.fill(255);
    }
    // x y w h
    p5.rect(i * side + 80, 300/2 - side/2, side, side);
    p5.fill(255);
    p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);
  }

  // update sliding window logic
  if (p5.i + p5.k <= p5.values.length) {
    p5.currentSum = 0;
    for (let j = p5.i; j < p5.i + p5.k; j++) {
      p5.currentSum += p5.values[j];
    }

    if (p5.currentSum > p5.maxSum) {
      p5.maxSum = p5.currentSum;
      p5.bestStart = p5.i;
    }

    p5.i++;
  }
};


// CODE SNIPPET
export const maxSumSubArrayCode = {
  python: `# Sliding Window Maximum Sum Subarray of size k
arr = [3, 7, 1, 8, 4, 10, 2, 5, 9, 6, 11, 12, 0, 13, 14]
k = 5
max_sum = 0
best_start = 0

for i in range(len(arr) - k + 1):
    current_sum = sum(arr[i:i+k])
    if current_sum > max_sum:
        max_sum = current_sum
        best_start = i

print("Max Sum:", max_sum, "Subarray:", arr[best_start:best_start+k])`,

  javascript: `// Sliding Window Maximum Sum Subarray of size k
let arr = [3, 7, 1, 8, 4, 10, 2, 5, 9, 6, 11, 12, 0, 13, 14];
let k = 5;
let maxSum = 0;
let bestStart = 0;

for (let i = 0; i <= arr.length - k; i++) {
  let currentSum = 0;
  for (let j = i; j < i + k; j++) {
    currentSum += arr[j];
  }
  if (currentSum > maxSum) {
    maxSum = currentSum;
    bestStart = i;
  }
}

console.log("Max Sum:", maxSum, "Subarray:", arr.slice(bestStart, bestStart + k));`,

  c: `// Sliding Window Maximum Sum Subarray of size k
#include <stdio.h>

int main() {
  int arr[] = {3, 7, 1, 8, 4, 10, 2, 5, 9, 6, 11, 12, 0, 13, 14};
  int n = sizeof(arr) / sizeof(arr[0]);
  int k = 5;
  int maxSum = 0, currentSum, bestStart = 0;

  for (int i = 0; i <= n - k; i++) {
    currentSum = 0;
    for (int j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
      bestStart = i;
    }
  }

  printf("Max Sum: %d\\nSubarray: ", maxSum);
  for (int i = bestStart; i < bestStart + k; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");

  return 0;
}`
}


// ALGO DATA
export const maxSumSubArrayData = {
  spaceComplexityBest: "O(1)",
  spaceComplexityWorst: "O(1)",
  timeComplexityBest: "O(n)",
  timeComplexityWorst: "O(n)",
  description: "The Sliding Window Maximum Sum Subarray algorithm finds the maximum sum of a contiguous subarray of size k in an array. It uses a sliding window technique to efficiently calculate the sum of elements in the current window and updates the maximum sum found.",
};
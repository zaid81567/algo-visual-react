//TWO POINTER - THREE SUM
export const threeSumSetup = (p5, canvasParentRef) => {
    if (document.querySelector('canvas')) {
     document.querySelector('canvas').remove();
   }
 
   p5.w_canvas = 600
   p5.h_canvas = 300
   
 
 
   p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);

   p5.three_sum_arrays = [
    [-4, -1, -1, 0, 1, 2, -2, 3, -3, 5, -5, 4, -6, 6, 7],
    [6, -2, -1, 0, 2, 1, -3, -4, 4, 5, -5, -6, 6, 7, -7],
    [0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7],
    [0, -4, -2, 0, 1, 3, -8, -3, 4, -1, 5, 2, -5, -6, 6],
    [0, -1, 1, -5, 5, -3, 3, -2, 2, 6, -6, -4, 4, 7, -7]
   ]

   p5.values = p5.three_sum_arrays[Math.floor(Math.random() * p5.three_sum_arrays.length)]

   // index(es)
   p5.i = 0;
   p5.p1 = 1;
   p5.p2 = p5.values.length - 1;
   p5.currSum = undefined;
   p5.isFound = false;
   
   p5.frameRate(4); // default is 60fps but now with this we have 2fps, for slowing down the animation
 };
 
 
 export const threeSumDraw = (p5) => {
   p5.background(0);
   let accent_green = "#bcfd49";
   let side = 30;
 
   p5.fill(255);
   p5.text(`Current Sum: ${p5.currSum}`, 20,20);
   if(p5.isFound){
     p5.fill(accent_green);
   }
   p5.text(`Finding in Position: [i, p1, p2] = [${p5.i}, ${p5.p1}, ${p5.p2}]`, 20,40);
 
   // draw array
   for (let i = 0; i < p5.values.length; i++) {
 
     if(!p5.isPairFound){
         if(i == p5.p1 || i == p5.p2) p5.fill("red")
         else if(i == p5.i) p5.fill("blue")
         else p5.fill(255);
         
     }else{
         if(i == p5.p1 || i == p5.p2 || i == p5.i) p5.fill(accent_green)
         else p5.fill(255);
     }
 
     // x y w h
     p5.rect(i * side + 80, 300/2 - side/2, side, side);
     p5.fill(255);
     
     p5.textSize(14);
     p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);
 
     p5.textSize(12);
     p5.fill(255)
     p5.text("i", p5.i * side + 88, 300/2 - side/2 + 20);
     p5.text("p1", p5.p1 * side + 88, 300/2 - side/2 + 20);
     p5.text("p2", p5.p2 * side + 88, 300/2 - side/2 + 20);
   }
 
   // Logic
   if(!p5.isPairFound){
    // 2 conditions for discontinuation of current loop
    let p1_p2_sideBySide = p5.p1 == p5.p2 -1;
    let p1_i_p2_sideBySide = p5.p1 == p5.p2-2 && p5.p1 == p5.i-1;
    let isLastIteration = p1_i_p2_sideBySide || p5.i == p5.values.length - 1;

     if(!(p1_p2_sideBySide || p1_i_p2_sideBySide)){
        p5.currSum = p5.values[p5.i] + p5.values[p5.p1] + p5.values[p5.p2];
        if(p5.currSum == 0){
            p5.isFound = true;
        }else if(p5.currSum > 0){
            if(p5.p2 != p5.i + 1){
              p5.p2--;
            }else{
              p5.p2 -= 2;
            }
        }else if(p5.currSum < 0){
          if(p5.p1 != p5.i - 1){
            p5.p1++;
          }else{
            p5.p1 += 2;
          }
        }
     }else{
      // if current loop discontinues then ..
        if(p5.i != p5.values.length){
            p5.i++;
            p5.p1 = 0;
            if(p5.i != p5.values.length - 1){
                p5.p2 = p5.values.length - 1;
            }else{
                p5.p2 = p5.values.length - 2;
            }
        }else{
            // if no matches after completion
            p5.noLoop();
        }
     }
   }else{
     // if found
     p5.noLoop();
   }
 
 };
 

 // CODE SNIPPET
 export const threeSumCode = {
  python: `# Three Sum (Two Pointer)
arr = [-4, -1, -1, 0, 1, 2, -2, 3, -3, 5, -5, 4, -6, 6, 7]
arr.sort()
n = len(arr)
found = False

for i in range(n):
    p1 = i + 1
    p2 = n - 1
    while p1 < p2:
        total = arr[i] + arr[p1] + arr[p2]
        if total == 0:
            print(f"Triplet Found: {arr[i]}, {arr[p1]}, {arr[p2]}")
            found = True
            break
        elif total < 0:
            p1 += 1
        else:
            p2 -= 1
    if found:
        break
if not found:
    print("No triplet found that sums to 0.")`,

  javascript: `// Three Sum (Two Pointer)
let arr = [-4, -1, -1, 0, 1, 2, -2, 3, -3, 5, -5, 4, -6, 6, 7];
arr.sort((a, b) => a - b);
let found = false;

for (let i = 0; i < arr.length; i++) {
  let p1 = i + 1;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    let total = arr[i] + arr[p1] + arr[p2];
    if (total === 0) {
      console.log(\`Triplet Found: \${arr[i]}, \${arr[p1]}, \${arr[p2]}\`);
      found = true;
      break;
    } else if (total < 0) {
      p1++;
    } else {
      p2--;
    }
  }

  if (found) break;
}

if (!found) {
  console.log("No triplet found that sums to 0.");
}`,

  c: `// Three Sum (Two Pointer)
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int main() {
    int arr[] = {-4, -1, -1, 0, 1, 2, -2, 3, -3, 5, -5, 4, -6, 6, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
    int found = 0;

    qsort(arr, n, sizeof(int), compare);

    for (int i = 0; i < n; i++) {
        int p1 = i + 1;
        int p2 = n - 1;

        while (p1 < p2) {
            int total = arr[i] + arr[p1] + arr[p2];
            if (total == 0) {
                printf("Triplet Found: %d, %d, %d\\n", arr[i], arr[p1], arr[p2]);
                found = 1;
                break;
            } else if (total < 0) {
                p1++;
            } else {
                p2--;
            }
        }

        if (found) break;
    }

    if (!found) {
        printf("No triplet found that sums to 0.\\n");
    }

    return 0;
}`
}

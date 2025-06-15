// MERGE TWO SORTED ARRAYS
export const mergeTwoSortedArraysSetup = (p5, canvasParentRef) => {
    if (document.querySelector('canvas')) {
     document.querySelector('canvas').remove();
   }
 
   p5.w_canvas = 600
   p5.h_canvas = 300
 
 
   p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
   p5.arr1 = Array.from({length: 7}, () => Math.floor(Math.random()*15)).sort((a,b)=>(a-b));
   p5.arr2 = Array.from({length: 8}, () => Math.floor(Math.random()*15)).sort((a,b)=>(a-b));
   p5.mergedArray = Array.from({ length: 15 }, () => (undefined));
 
   p5.p1 = 0;
   p5.p2 = 0;
   p5.p3 = 0;
 
   p5.hasMerged = false;
 
   p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
 };
 
 
 export const mergeTwoSortedArraysDraw = (p5) => {
   p5.background(0);
   let accent_green = "#bcfd49";
   let side = 30;
   
   // status
   if(!p5.hasMerged){
       p5.fill("red");
   }else{
       p5.fill(accent_green);
   }
   p5.text("Has Merged: "+p5.hasMerged, 20,20);
 
   // draw first array
   for (let i = 0; i < p5.arr1.length; i++) {
 
     if(i< p5.p1) p5.fill(200)
     else if(i == p5.p1) p5.fill("red");
     else p5.fill(255)
 
     // x y w h
     p5.rect(i * side + 80, 50 - side/2, side, side);
     
     p5.fill(0);
     p5.textSize(14);
     p5.text(p5.arr1[i], i * side + 90, 50 - side/2 + 20);
 
     p5.textSize(12);
     p5.fill(255)
     p5.text("p1", p5.p1 * side + 88, 50 - side/2 + 50);
    //  p5.text("p2", p5.p2 * side + 88, 100 - side/2 + 20);
   }

   // draw second array
   for (let i = 0; i < p5.arr2.length; i++) {
 
    if(i< p5.p2) p5.fill(200)
    else if(i == p5.p2) p5.fill("red");
    else p5.fill(255)

    // x y w h
    p5.rect(i * side + 80, 150 - side/2, side, side);
    p5.fill(0);
    
    p5.textSize(14);
    p5.text(p5.arr2[i], i * side + 85, 150 - side/2 + 20);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p2", p5.p2 * side + 88, 150 - side/2 + 50);
   //  p5.text("p2", p5.p2 * side + 88, 100 - side/2 + 20);
    }

   // draw merged array
   for (let i = 0; i < p5.mergedArray.length; i++) {
 
    if(!p5.hasMerged){
      if(i< p5.p3) p5.fill(accent_green)
      else p5.fill(255)
    }else{
      p5.fill(accent_green)
    }

    // x y w h
    p5.rect(i * side + 80, 250 - side/2, side, side);
    p5.fill(255);
    
    p5.textSize(14);
    p5.text(p5.mergedArray[i], i * side + 85, 250 - side/2 - 10);

    p5.textSize(12);
    p5.fill(255)
    p5.text("p3", p5.p3 * side + 88, 250 - side/2 + 50);
  }
 
  // Logic
   if(!p5.hasMerged){
    if(p5.p1 < p5.arr1.length && p5.p2 < p5.arr2.length){
        if(p5.arr1[p5.p1] < p5.arr2[p5.p2]){
            p5.mergedArray[p5.p3] = p5.arr1[p5.p1];
            p5.p1++;
            p5.p3++;
        }else{
            p5.mergedArray[p5.p3] = p5.arr2[p5.p2];
            p5.p2++;
            p5.p3++;
        }
    }else if(p5.p1 < p5.arr1.length){
        p5.mergedArray[p5.p3] = p5.arr1[p5.p1];
        p5.p1++;
        p5.p3++;
    }else if(p5.p2 < p5.arr2.length){
        p5.mergedArray[p5.p3] = p5.arr2[p5.p2];
        p5.p2++;
        p5.p3++;
    }else if(p5.p1 == p5.arr1.length && p5.p2 == p5.arr2.length){
        p5.hasMerged = true;
    }
   }else{
     p5.noLoop();
   }
 
 };
 

 // CODE SNIPPET
 export const mergeTwoSortedArraysCode = {
  python: `# Merge two sorted arrays
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8, 10]

merged = []
i = j = 0

while i < len(arr1) and j < len(arr2):
    if arr1[i] < arr2[j]:
        merged.append(arr1[i])
        i += 1
    else:
        merged.append(arr2[j])
        j += 1

while i < len(arr1):
    merged.append(arr1[i])
    i += 1

while j < len(arr2):
    merged.append(arr2[j])
    j += 1

print("Merged array:", merged)`,
  
  javascript: `// Merge two sorted arrays
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 10];
let merged = [];

let i = 0, j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]);
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}

while (i < arr1.length) {
  merged.push(arr1[i]);
  i++;
}

while (j < arr2.length) {
  merged.push(arr2[j]);
  j++;
}

console.log("Merged array:", merged);`,

  c: `// Merge two sorted arrays
#include <stdio.h>

int main() {
  int arr1[] = {1, 3, 5, 7};
  int arr2[] = {2, 4, 6, 8, 10};
  int merged[9];
  int i = 0, j = 0, k = 0;
  int n1 = 4, n2 = 5;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j])
      merged[k++] = arr1[i++];
    else
      merged[k++] = arr2[j++];
  }

  while (i < n1)
    merged[k++] = arr1[i++];

  while (j < n2)
    merged[k++] = arr2[j++];

  printf("Merged array: ");
  for (int m = 0; m < n1 + n2; m++)
    printf("%d ", merged[m]);

  return 0;
}`
}

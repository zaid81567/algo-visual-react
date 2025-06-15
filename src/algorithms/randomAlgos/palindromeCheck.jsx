//TWO POINTER - MOVE ZEROS TO END
export const palindromeCheckSetup = (p5, canvasParentRef) => {
    if (document.querySelector('canvas')) {
     document.querySelector('canvas').remove();
   }
 
   p5.w_canvas = 600
   p5.h_canvas = 300
 
 
   p5.createCanvas(p5.w_canvas, p5.h_canvas).parent(canvasParentRef);
   p5.test_cases = [
    "racecar",
    "redevider",
    "malayalam",
    "reddefer",
    "level",
    "tettarrattat",
    "aibohphobia",
   ]
   p5.values = p5.test_cases[Math.floor(Math.floor(Math.random()*p5.test_cases.length))].split('');
 
   p5.p1 = 0;
   p5.p2 = p5.values.length - 1;
   
   p5.status = "checking .."
   p5.isPalindrome = false;
   p5.hasMisMatchOccured = false;
 
   p5.frameRate(2); // default is 60fps but now with this we have 2fps, for slowing down the animation
 };
 
 
 export const palindromeCheckDraw = (p5) => {
   p5.background(0);
   let accent_green = "#bcfd49";
   let side = 30;
   
   if(!p5.isPalindrome){
       p5.fill("red");
   }else{
       p5.fill(accent_green);
   }
   p5.text("isPalindrome: "+p5.status, 20,20);
 
   // draw array
   for (let i = 0; i < p5.values.length; i++) {
     if(!p5.isPalindrome){
        if(i> p5.p2 || i<p5.p1) p5.fill(accent_green);
        else if(i == p5.p1 || i == p5.p2) {
            if(!p5.hasMisMatchOccured) p5.fill("blue");
            else p5.fill("red");
        }
        else p5.fill(255);
     }else p5.fill(accent_green);
 
     // x y w h
     p5.rect(i * side + 80, 300/2 - side/2, side, side);
     p5.fill(255);
     
     p5.textSize(14);
     p5.text(p5.values[i], i * side + 85, 300/2 - side/2 - 10);
 
     p5.textSize(12);
     p5.fill(255)
     p5.text("p1", p5.p1 * side + 88, 300/2 - side/2 + 20);
     p5.text("p2", p5.p2 * side + 88, 300/2 - side/2 + 20);
   }
 
   // Palindrome Logic
   if(!p5.isPalindrome && !p5.hasMisMatchOccured){
    if(p5.values[p5.p1] == p5.values[p5.p2]){
        if(p5.values.length%2 == 0){
            if(p5.p1 == p5.p2 -1){
                p5.isPalindrome = true;
                p5.status = "true";
            }else{
                p5.p1++;
                p5.p2--;
            }
        }else{
            if(p5.p1 == p5.p2 -2){
                p5.isPalindrome = true;
                p5.status = true;
            }else{
                p5.p1++;
                p5.p2--;
            }
        }
        
    }else{
        p5.hasMisMatchOccured = true;
        p5.status = "false";
    }
   }else{
     p5.noLoop();
   }
 
 };
 

 // CODE SNIPPET
export const palindromeCheckCode = {
  python: `# Palindrome check using two pointers
s = "racecar"
left = 0
right = len(s) - 1

is_palindrome = True

while left < right:
    if s[left] != s[right]:
        is_palindrome = False
        break
    left += 1
    right -= 1

print("Is palindrome:", is_palindrome)`,
  
  javascript: `// Palindrome check using two pointers
const s = "racecar";
let left = 0;
let right = s.length - 1;

let isPalindrome = true;

while (left < right) {
  if (s[left] !== s[right]) {
    isPalindrome = false;
    break;
  }
  left++;
  right--;
}

console.log("Is palindrome:", isPalindrome);`,

  c: `// Palindrome check using two pointers
#include <stdio.h>
#include <string.h>

int main() {
  char s[] = "racecar";
  int left = 0;
  int right = strlen(s) - 1;

  int isPalindrome = 1;

  while (left < right) {
    if (s[left] != s[right]) {
      isPalindrome = 0;
      break;
    }
    left++;
    right--;
  }

  if (isPalindrome)
    printf("Is palindrome: true\\n");
  else
    printf("Is palindrome: false\\n");

  return 0;
}`
}

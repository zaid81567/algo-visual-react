// searching algos
import { linearSearchSetup, linearSearchDraw } from "./searching/linearSearch";
import { jumpSearchSetup, jumpSearchDraw } from "./searching/jumpSearch"; // faster version of linear search
import { binarySearchSetup, binarySearchDraw } from "./searching/binarySearch";
import { interpolationSearchSetup, interpolationSearchDraw } from "./searching/interpolationSearch"; // faster version of binary search
import { exponentialSearchSetup, exponentialSearchDraw } from "./searching/exponentialSearch"; 

// sorting algos
import { bubbleSortSetup, bubbleSortDraw } from "./sorting/bubbleSort";
import { combSortSetup, combSortDraw } from "./sorting/combSort"; // varient of bubble sort
import { selectionSortSetup, selectionSortDraw } from "./sorting/selectionSort";
import { insertionSortSetup, insertionSortDraw } from "./sorting/insertionSort";
import { cycleSortSetup, cycleSortDraw } from "./sorting/cycleSort";
import { dnfAlgoSetup, dnfAlgoDraw } from "./sorting/dnfAlgo";

// sliding window algos
import { maxSumSubArraySetup, maxSumSubArrayDraw } from "./slidingWindow/maxSumSubArray"; // find the maximum sum of a subarray of size k


// two pointer
import { pairWithGivenSumSetup, pairWithGivenSumDraw } from "./twoPointer/pairWithGivenSum";
import { moveZerosToEndSetup, moveZerosToEndDraw } from "./twoPointer/moveZerosToEnd";
import { reverseArrayUsingTwoPointersSetup, reverseArrayUsingTwoPointersDraw } from "./twoPointer/reverseArrayUsingTwoPointers";

// random algos
import { reverseArrayUsingOnePointerSetup, reverseArrayUsingOnePointerDraw } from "./randomAlgos/reverseArrayUsingOnePointer";
import { mergeTwoSortedArraysSetup, mergeTwoSortedArraysDraw } from "./randomAlgos/mergeTwoSortedArrays";

export const ALGORITHMS = {
    // SEARCHING
    linearSearch: {
        key:"linearSearch",
        name: "Linear Search",
        setup: linearSearchSetup,
        draw: linearSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Linear search implementation... [under work]"
    },
    jumpSearch: {
        key:"jumpSearch",
        name: "Jump Search",
        setup: jumpSearchSetup,
        draw: jumpSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Linear search implementation... [under work]"
    },
    binarySearch: {
        key:"binarySearch",
        name: "Binary Search",
        setup: binarySearchSetup,
        draw: binarySearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Linear search implementation... [under work]"
    },
    interpolationSearch: {
        key:"interpolationSearch",
        name: "Interpolation Search",
        setup: interpolationSearchSetup,
        draw: interpolationSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Linear search implementation... [under work]"
    },
    exponentialSearch: {
        key:"exponentialSearch",
        name: "Exponential Search",
        setup: exponentialSearchSetup,
        draw: exponentialSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Exponential search implementation... [under work]"
    },
    // SORTING
    bubbleSort: {
        key:"bubbleSort",
        name: "Bubble Sort",
        setup: bubbleSortSetup,
        draw: bubbleSortDraw,
        description: "Repeatedly swaps adjacent elements... [under work]",
        code: "// Bubble sort implementation... [under work]"
    },
    combSort: {
        key:"combSort",
        name: "Comb Sort",
        setup: combSortSetup,
        draw: combSortDraw,
        description: "Repeatedly swaps adjacent elements... [under work]",
        code: "// Bubble sort implementation... [under work]"
    },
    selectionSort: {
        key:"selectionSort",
        name: "Selection Sort",
        setup: selectionSortSetup,
        draw: selectionSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: "// Selection sort implementation... [under work]"
    },
    insertionSort: {
        key:"insertionSort",
        name: "Insertion Sort",
        setup: insertionSortSetup,
        draw: insertionSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: "// Selection sort implementation... [under work]"
    },
    cycleSort: {
        key:"cycleSort",
        name: "Cycle Sort",
        setup: cycleSortSetup,
        draw: cycleSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: "// Selection sort implementation... [under work]"
    },
    dnfAlgo: {
        key:"dnfAlgo",
        name: "DNF Algorithm : [sort - 0s, 1s, 2s]",
        setup: dnfAlgoSetup,
        draw: dnfAlgoDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: "// Dnf Algorithm implementation... [under work]"
    },
    // SLIDING WINDOW
    maxSumSubArray: {
        key:"maxSumSubArray",
        name: "Max Sum Sub Array",
        setup: maxSumSubArraySetup,
        draw: maxSumSubArrayDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    },
    // TWO POINTER
    pairWithGivenSum:{
        key:"pairWithGivenSum",
        name:"Piar With Given Sum",
        setup: pairWithGivenSumSetup,
        draw: pairWithGivenSumDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    },
    moveZerosToEnd:{
        key:"moveZerosToEnd",
        name:"Move Zeros To End",
        setup: moveZerosToEndSetup,
        draw: moveZerosToEndDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    },
    reverseArrayUsingTwoPointers:{
        key:"reverseArrayUsingTwoPointers",
        name:"Reverse Array Using Two Pointers",
        setup: reverseArrayUsingTwoPointersSetup,
        draw: reverseArrayUsingTwoPointersDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    },
    // RANDOM ALGOS
    reverseArrayUsingOnePointer:{
        key:"reverseArrayUsingOnePointer",
        name:"Reverse Array Using One Pointer",
        setup: reverseArrayUsingOnePointerSetup,
        draw: reverseArrayUsingOnePointerDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    },
    mergeTwoSortedArrays:{
        key:"mergeTwoSortedArrays",
        name:"Merge Two Sorted Arrays",
        setup: mergeTwoSortedArraysSetup,
        draw: mergeTwoSortedArraysDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: "// Max sum subarray implementation... [under work]"
    }
}
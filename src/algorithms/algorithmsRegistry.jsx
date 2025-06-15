// searching algos
import { linearSearchSetup, linearSearchDraw, linearSearchCode, linearSearchData } from "./searching/linearSearch";
import { jumpSearchSetup, jumpSearchDraw, jumpSearchCode, jumpSearchData } from "./searching/jumpSearch"; // faster version of linear search
import { binarySearchSetup, binarySearchDraw, binarySearchCode, binarySearchData } from "./searching/binarySearch";
import { interpolationSearchSetup, interpolationSearchDraw, interpolationSearchCode, interpolationSearchData } from "./searching/interpolationSearch"; // faster version of binary search
import { exponentialSearchSetup, exponentialSearchDraw, exponentialSearchCode, exponentialSearchData } from "./searching/exponentialSearch"; 

// sorting algos
import { bubbleSortSetup, bubbleSortDraw, bubbleSortCode, bubbleSortData } from "./sorting/bubbleSort";
import { combSortSetup, combSortDraw, combSortCode, combSortData} from "./sorting/combSort"; // varient of bubble sort
import { selectionSortSetup, selectionSortDraw, selectionSortCode, selectionSortData } from "./sorting/selectionSort";
import { insertionSortSetup, insertionSortDraw, insertionSortCode, insertionSortData } from "./sorting/insertionSort";
import { cycleSortSetup, cycleSortDraw, cycleSortCode, cycleSortData } from "./sorting/cycleSort";
import { dnfAlgoSetup, dnfAlgoDraw, dnfAlgoCode, dnfAlgoData } from "./sorting/dnfAlgo";

// sliding window algos
import { maxSumSubArraySetup, maxSumSubArrayDraw, maxSumSubArrayCode, maxSumSubArrayData } from "./slidingWindow/maxSumSubArray"; // find the maximum sum of a subarray of size k


// two pointer
import { pairWithGivenSumSetup, pairWithGivenSumDraw, pairWithGivenSumCode, pairWithGivenSumData } from "./twoPointer/pairWithGivenSum";
import { moveZerosToEndSetup, moveZerosToEndDraw, moveZerosToEndCode, moveZerosToEndData } from "./twoPointer/moveZerosToEnd";
import { reverseArrayUsingTwoPointersSetup, reverseArrayUsingTwoPointersDraw, reverseArrayUsingTwoPointersCode, reverseArrayUsingTwoPointersData } from "./twoPointer/reverseArrayUsingTwoPointers";
import { threeSumDraw, threeSumSetup, threeSumCode, threeSumData } from "./twoPointer/threeSum";

// random algos
import { reverseArrayUsingOnePointerSetup, reverseArrayUsingOnePointerDraw, reverseArrayUsingOnePointerCode, reverseArrayUsingOnePointerData } from "./randomAlgos/reverseArrayUsingOnePointer";
import { mergeTwoSortedArraysSetup, mergeTwoSortedArraysDraw, mergeTwoSortedArraysCode, mergeTwoSortedArraysData } from "./randomAlgos/mergeTwoSortedArrays";
import { palindromeCheckDraw, palindromeCheckSetup, palindromeCheckCode, palindromeCheckData } from "./randomAlgos/palindromeCheck";

export const ALGORITHMS = {
    // SEARCHING
    linearSearch: {
        key:"linearSearch",
        name: "Linear Search",
        setup: linearSearchSetup,
        draw: linearSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: linearSearchCode,
        data: linearSearchData
    },
    jumpSearch: {
        key:"jumpSearch",
        name: "Jump Search",
        setup: jumpSearchSetup,
        draw: jumpSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: jumpSearchCode,
        data: jumpSearchData
    },
    binarySearch: {
        key:"binarySearch",
        name: "Binary Search",
        setup: binarySearchSetup,
        draw: binarySearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: binarySearchCode,
        data: binarySearchData
    },
    interpolationSearch: {
        key:"interpolationSearch",
        name: "Interpolation Search",
        setup: interpolationSearchSetup,
        draw: interpolationSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: interpolationSearchCode,
        data: interpolationSearchData
    },
    exponentialSearch: {
        key:"exponentialSearch",
        name: "Exponential Search",
        setup: exponentialSearchSetup,
        draw: exponentialSearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: exponentialSearchCode,
        data: exponentialSearchData
    },
    // SORTING
    bubbleSort: {
        key:"bubbleSort",
        name: "Bubble Sort",
        setup: bubbleSortSetup,
        draw: bubbleSortDraw,
        description: "Repeatedly swaps adjacent elements... [under work]",
        code: bubbleSortCode,
        data: bubbleSortData
    },
    combSort: {
        key:"combSort",
        name: "Comb Sort",
        setup: combSortSetup,
        draw: combSortDraw,
        description: "Repeatedly swaps adjacent elements... [under work]",
        code: combSortCode,
        data: combSortData
    },
    selectionSort: {
        key:"selectionSort",
        name: "Selection Sort",
        setup: selectionSortSetup,
        draw: selectionSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: selectionSortCode,
        data: selectionSortData
    },
    insertionSort: {
        key:"insertionSort",
        name: "Insertion Sort",
        setup: insertionSortSetup,
        draw: insertionSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: insertionSortCode,
        data: insertionSortData
    },
    cycleSort: {
        key:"cycleSort",
        name: "Cycle Sort",
        setup: cycleSortSetup,
        draw: cycleSortDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: cycleSortCode,
        data: cycleSortData
    },
    dnfAlgo: {
        key:"dnfAlgo",
        name: "DNF Algorithm : [sort - 0s, 1s, 2s]",
        setup: dnfAlgoSetup,
        draw: dnfAlgoDraw,
        description: "Repeatedly swaps min elements... [under work]",
        code: dnfAlgoCode,
        data: dnfAlgoData
    },
    // SLIDING WINDOW
    maxSumSubArray: {
        key:"maxSumSubArray",
        name: "Max Sum Sub Array",
        setup: maxSumSubArraySetup,
        draw: maxSumSubArrayDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: maxSumSubArrayCode,
        data: maxSumSubArrayData
    },
    // TWO POINTER
    pairWithGivenSum:{
        key:"pairWithGivenSum",
        name:"Piar With Given Sum",
        setup: pairWithGivenSumSetup,
        draw: pairWithGivenSumDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: pairWithGivenSumCode,
        data: pairWithGivenSumData
    },
    moveZerosToEnd:{
        key:"moveZerosToEnd",
        name:"Move Zeros To End",
        setup: moveZerosToEndSetup,
        draw: moveZerosToEndDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: moveZerosToEndCode,
        data: moveZerosToEndData
    },
    reverseArrayUsingTwoPointers:{
        key:"reverseArrayUsingTwoPointers",
        name:"Reverse Array Using Two Pointers",
        setup: reverseArrayUsingTwoPointersSetup,
        draw: reverseArrayUsingTwoPointersDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: reverseArrayUsingTwoPointersCode,
        data: reverseArrayUsingTwoPointersData
    },
    threeSum:{
        key:"threeSum",
        name:"Three Sum: Sum to Zero",
        setup: threeSumSetup,
        draw: threeSumDraw,
        description: "Finds the three num sum to 0... [under work]",
        code: threeSumCode,
        data: threeSumData
    },
    // RANDOM ALGOS
    reverseArrayUsingOnePointer:{
        key:"reverseArrayUsingOnePointer",
        name:"Reverse Array Using One Pointer",
        setup: reverseArrayUsingOnePointerSetup,
        draw: reverseArrayUsingOnePointerDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: reverseArrayUsingOnePointerCode,
        data: reverseArrayUsingOnePointerData
    },
    mergeTwoSortedArrays:{
        key:"mergeTwoSortedArrays",
        name:"Merge Two Sorted Arrays",
        setup: mergeTwoSortedArraysSetup,
        draw: mergeTwoSortedArraysDraw,
        description: "Finds the maximum sum of a subarray of size k... [under work]",
        code: mergeTwoSortedArraysCode,
        data: mergeTwoSortedArraysData
    },
    palindromeCheck:{
        key:"palindromeCheck",
        name:"Palindrome Check",
        setup: palindromeCheckSetup,
        draw: palindromeCheckDraw,
        description: "check for palindrome... [under work]",
        code: palindromeCheckCode,
        data: palindromeCheckData
    },
}
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


export const ALGORITHMS = {
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
    }
}
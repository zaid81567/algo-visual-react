// searching algos
import { linearSearchSetup, linearSearchDraw } from "./searching/linearSearch";
import { binarySearchSetup, binarySearchDraw } from "./searching/binarySearch";

// sorting algos
import { bubbleSortSetup, bubbleSortDraw } from "./sorting/bubbleSort";
import { combSortSetup, combSortDraw } from "./sorting/combSort";
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
    binarySearch: {
        key:"binarySearch",
        name: "Binary Search",
        setup: binarySearchSetup,
        draw: binarySearchDraw,
        description: "Finds elements by checking each one sequentially...[under work]",
        code: "// Linear search implementation... [under work]"
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
// searching algos
import { linearSearchSetup, linearSearchDraw } from "./searching/linearSearch";

// sorting algos
import { bubbleSortSetup, bubbleSortDraw } from "./sorting/bubbleSort";

export const ALGORITHMS = {
    linearSearch: {
        key:"linearSearch",
        name: "Linear Search",
        setup: linearSearchSetup,
        draw: linearSearchDraw,
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
    }
}
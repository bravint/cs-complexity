/*
Conceptual description:
Time Complexity:  worst case: quadratic, O(n²), avg: O(n²)
Space Complexity: O(1) – constant space as sorting is done in place
*/
export const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let j
        for (j = i - 1; j >= 0 && array[j] > array[i]; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = array[i]
      }
      return array
} 



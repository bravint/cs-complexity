/*
Conceptual description:
Time Complexity: O(n²), faster than bubble Sort, slower than insertion sort
Space Complexity: O(1), constant number of variables created reguardless of list size

Find the smallest element from starting position i to the end of the array n-1
Swap the smallest element into the first position
Find the next smallest element, starting from the second positionto the end of the array.
Swap the next smallest element into the second position•
Repeat until we reach the last but one array element

*/

export const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let lowest = i

        for (let j = 0; j < array[i].length; j++) {
            if (array[j] < array[i]) {
                lowest = j
            }
        }
        if (lowest !== i) {
            const temp = arr[i];
            arr[lowest] = arr[i];
            arr[j] = temp;
        }
    }
    return array
} 


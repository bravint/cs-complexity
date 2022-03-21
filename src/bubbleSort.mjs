/*
Conceptual description: loops over list sorting adjacent elements and swapping if unordered, inplace, stable
Time Complexity: O(n²)
Space Complexity: O(1) – constant space as sorting is done in place
*/

export const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
    return array;
};

// const swap = (arr, indexOne, indexTwo) => {
//     const temp = arr[indexTwo];
//     arr[indexTwo] = arr[indexOne];
//     arr[indexOne] = temp;
//   }

/*
Conceptual description: in place sorting

split the initial unsorted data set into a left partition and a right partition
sort each partition recursively until there is only one element left
return the sorted array

Time Complexity: worst case runtime of O(N^2), average runtime = O(N*log N) if partition sizes are roughly equal.
Space Complexity: O(log(n))
*/
export const quickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
      const pivotIndex = partition(array, leftBound, rightBound);
      quickSort(array, leftBound, pivotIndex - 1);
      quickSort(array, pivotIndex, rightBound);
    }
    return array;
  }
  
  const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivot) {
        leftIndex++;
      }
      while (array[rightIndex] > pivot) {
        rightIndex--;
      }
      if (leftIndex <= rightIndex) {
        swap(array, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      }
    }
    return leftIndex;
  }

  const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  }

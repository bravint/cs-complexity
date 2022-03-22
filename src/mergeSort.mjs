/*
Conceptual description: contiously break list down into smaller elements that are more easily sorted, then merge back into sorted single list

Split the input array
Merge sorted arrays 

Time Complexity: O(N log N)
Space Complexity: O(n)
*/

export const mergeSort = (array) => {
    const length = array.length;
    if (length === 1) return array;

    const mid = Math.floor(length / 2);

    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, length);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray[0]);
        leftArray.shift();
      } else {
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    }
    
    return sortedArray.concat(leftArray).concat(rightArray);
}
  




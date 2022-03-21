/*
Conceptual description: non-comparison sorting algo, stable
Time Complexity: O(n + k) n = size of input list, k = max value in list
Space Complexity:
*/
export const countingSort = (array) => {
    const max = Math.max(...array);
    const auxArray = new Array(max + 1);
    
    for (let i = 0; i < auxArray.length; i++) {
        auxArray[i] = 0;
    }

    for (let i = 0; i < auxArray.length; i++) {
        auxArray[array[i-1]] += 1;
    }

    let index = 0;

    for (let i = 0; i < auxArray.length; i++) {
        if (auxArray[i] > 0) {
            for (let j = 0; j < auxArray[i]; j++ ) {
                array[index] = i
                index++
            }
        }
    }

    return array;
} 



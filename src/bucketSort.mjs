/*
Conceptual description:
Time Complexity: worst case: quadratic, O(n²), avg: O(n+k)
Space Complexity: O(n+k)
*/

export const bucketSort = (array) => {
    let buckets = new Array(array.length);

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        let bucketIndex = Math.floor(array[i] / buckets.length);

        buckets[bucketIndex].push(array[i]);
    }

    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
    }

    let index = 0;

    for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            array[index++] = buckets[i][j];
        }
    }

    return array;
};

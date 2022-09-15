import { CHANGE_VALUE } from '../helper/constants.js';

// merge sort returns container with index, value, boolean
// and list of range
export const mergeSort = async (array, length) => {
    let arr = [];
    await divide(array, arr, 0, length - 1);
    return arr;
};

const divide = async (array, arr, start, end) => {
    if (start < end) {
        let mid = Math.floor((end + start) / 2);
        await divide(array, arr, start, mid);
        await divide(array, arr, mid + 1, end);
        await merge(array, arr, start, mid, end);
    }
};

const merge = async (array, arr, start, mid, end) => {
    let sortedArray = [];
    let i = start, j = mid + 1;
    while (i <= mid && j <= end) {
        if (array[i] <= array[j]) sortedArray.push(array[i++]);
        else sortedArray.push(array[j++]);
    }
    while (i <= mid) {
        sortedArray.push(array[i++]);
    }
    while (j <= end) {
        sortedArray.push(array[j++]);
    }

    let indexes = [];
    for (let i = start; i <= end; ++i) {
        indexes.push(i);
    }

    for (let i = start; i <= end; ++i) {
        array[i] = sortedArray[i - start];
        arr.push([i, array[i], CHANGE_VALUE, indexes]);
    }
};
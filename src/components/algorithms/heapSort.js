import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// heap sort returns container with 2 indexes and boolean
// describing to swap or not
export const heapSort = async (array, length) => {
    let arr = [];
    for (let index = Math.ceil(length / 2) - 1; index >= 0; --index) {
        await heapify(arr, array, length, index);
    }
    for (let index = length - 1; index >= 0; --index) {
        arr.push([index, 0, SWAP]);
        await swap(array, index, 0);
        await heapify(arr, array, index, 0);
    }
    return arr;
};

const heapify = async (arr, array, length, index) => {
    let largest = index;
    let left = 2 * index + 1, right = 2 * index + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        arr.push([index, largest, SWAP]);
        await swap(array, index, largest);
        await heapify(arr, array, length, largest);
    }
};
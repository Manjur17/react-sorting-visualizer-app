import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// quick sort returns container with 2 indexes and boolean
// describing to swap or not
export const quickSort = async (array, length) => {
    let arr = [];
    await divider(arr, array, 0, length - 1);
    return arr;
};

const divider = async (arr, array, start, end) => {
    if (start < end) {
        let pivot = await partition(arr, array, start, end);
        await divider(arr, array, start, pivot - 1);
        await divider(arr, array, pivot + 1, end);
    }
};

const partition = async (arr, array, start, end) => {
    let prevIndex = start - 1;
    for (let index = start; index < end; ++index) {
        if (index !== end) {
            arr.push([index, end, !SWAP]);
        }
        if (array[index] < array[end]) {
            ++prevIndex;
            await swap(array, index, prevIndex);
            arr.push([index, prevIndex, SWAP]);
        }
    }
    await swap(array, prevIndex + 1, end);
    arr.push([end, prevIndex + 1, SWAP]);
    return prevIndex + 1;
};
import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// bubble sort returns container with 2 indexes and boolean
// describing to swap or not
export const bubbleSort = async (array, length) => {
    let arr = [];
    for (let i = 0; i < length - 1; ++i) {
        for (let j = 0; j < length - i - 1; ++j) {
            if (array[j] > array[j + 1]) {
                await swap(array, j, j + 1);
                arr.push([j, j + 1, SWAP]);
            }
            else {
                arr.push([j, j + 1, !SWAP]);
            }
        }
    }
    return arr;
};
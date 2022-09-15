import { SWAP } from '../helper/constants.js';
import { swap } from '../helper/swap.js';

// insertion sort returns container with 2 indexes and boolean
// describing to swap or not
export const insertionSort = async (array, length) => {
    let arr = [];
    for (let i = 0; i < length - 1; ++i) {
        let j = i;
        while (j >= 0 && array[j] > array[j + 1]) {
            await swap(array, j, j + 1);
            arr.push([j, j + 1, SWAP]);
            --j;
        }
    }
    return arr;
};

/*
            int j = i - 1;
            int temp = arr[i];
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j]; //making the space for smallest element
                j--;
            }
            arr[j + 1] = temp; //j+1 is the correct index for temp
*/
export const getKeysCopy = async(array, length) => {
    let arr = [];
    for(let i = 0 ; i < length ; ++i) {
        arr.push(Number(array[i].key));
    }
    return arr;
};
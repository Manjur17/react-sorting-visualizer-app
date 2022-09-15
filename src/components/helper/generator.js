const generator = (length) => {
    let arr = [];
    let min = 1, max = 100;
    for (let counter = 0; counter < length ; ++counter) {
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push({key: parseInt(num), classType: 0});
    }
    return arr;
};

export default generator;
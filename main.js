// array dublicate values count

let count = [];
let array = [1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6, 7, 7, 8, 9];

let value = array.forEach(function (e) {
    count[e] = (count[e] || 0) + 1;
});
console.log(count)
var subtract = function(arr) {
    var      i = 0,
        result = 0;
    while (i < arr.length) {
        result = result - arr[i];
        i = i + 1;

    }
    return result;
};


var myTotal = subtract([10,10,10]);
console.log(myTotal);

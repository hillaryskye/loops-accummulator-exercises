var smallest = function(arr) {

    var      i = 0,
        result = arr[0];
    while (i < arr.length) {

        if (arr[i] < result) {
            result = arr[i];
        }
        i = i + 1;
    }
    return result;
};
    var myTotal = smallest([1,9,7]);
    console.log(myTotal);

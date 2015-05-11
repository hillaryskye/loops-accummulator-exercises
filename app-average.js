var arr = [1,2,3];
var sum = function(num) {
       var i = 0;
       var result = 0;
       while (i < num.length) {
        result = result + num[i];
        i = i + 1;
        }
        return result;
    };

    myTotal = sum([8,5,3]);


    var myAverage = (myTotal / arr.length);
    console.log(myAverage);

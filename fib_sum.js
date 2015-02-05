var i = 1,
    j = 2;
var sum = 0;
var limit = 4e6;
var temp;
do {
    if (j % 2 === 0) {
        sum += j;
    }
    temp = i + j;
    i = j;
    j = temp;
} while (j <= limit);
alert(sum);
var max = 600851475143;
var primeFactor = 0;
for (i = 1; i < target; i++) {
    if (target % i === 0) {
        primeFactor = i;
    }
}
console.log(primeFactor);
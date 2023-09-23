// ex2
function makeCounter(x) {
var count = x;

    function counter() {
        count = count + 1;
    return count 
    } return counter
}
var counter1 = makeCounter(100);
var counter2 = makeCounter();
// ex3
function pow(exponent) {
    return function(square) {
         return exponent*exponent
         },
         return function(square) {
            return exponent*exponent
            }
        }
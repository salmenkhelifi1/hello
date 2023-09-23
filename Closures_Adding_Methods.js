// ex1
function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         }, checkBalance: function(){ return "your is "+ balance}
    }
}
var acount= makeAccount(100)

// ex2
function makeCounter(x) {
    var count = x;
    return {
        counterUp:function() {
            count = count + 1;
        return count },
        
         counterDown:function() {
            count = count - 1;
        return count 
        }}}
    
    var counter = makeCounter(100);
    
// ex3

function makeCounter(x) {
    var count = x;
    return {
        counterUp:function() {
            count = count + 1;
        return count },
        
         counterDown:function() {
            count = count - 1;
        return count 
        },
         reset:function(){
            return count=x
        }
    }
    }
    
    var counter = makeCounter(100);

    // More Practice

    // ex5
    function randInt(n) {
        return Math.floor(Math.random() * (n + 1));
        }
        var upperBound = 5;
         function guessMyNumber(n) {
        // if (n > upperBound) {
        //      return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
        // } else if (n === randInt(upperBound)) {
        //      return 'You guessed my number!';
        //      }
        // return 'Nope! That wasn t it!';

        upperBound:function(n){
           if (n > upperBound)
           return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
        }


        }
// ex1
function MakeAccount(initial) {
    
    return {
        balance:initial,
        withdraw:withdraw,
        deposit:deposit
    }
}


var withdraw= function(amount) {
   
      if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
           return 'Here is your money: $' + amount;
      }
 return 'Insufficient funds.';
 }

 var deposit= function(amount) {
  
    this.balance = this.balance + amount;
         return 'Your balance is: $' +this.balance;
    
};
var myaccount1 = MakeAccount(100)

// ec2


function MakeStopwatch() {
var x={}

x.start=start
x.stop=stop
x.reset=reset
x.time=timee
var timee=0
var stopii
return x
}



var start = function() {
    
    this.stopii= setInterval(function() {
    this.time = this.time + 1;
    console.log('Elapsed time: ' + this.time + 's.');
}, 1000)

var stop = function() {
    clearInterval(this.stopii);
}
var reset= function() {
    clearInterval(this.stop1);
    this.time = 0;
}
};
var makeStopwatch1 = MakeStopwatch()
makeStopwatch1.start()


// var makestopwatch={}
// makestopwatch.stop1;
// makestopwatch.time = 0;
//      makestopwatch.start=start; 
// makestopwatch.stop=stop;
// makestopwatch.reset=reset;
// return makestopwatch;
// }
// var start= function() {
//           this.stop1 = setInterval(function() {
//           this.time = this.time + 1;
//           console.log('Elapsed time: ' + this.time + 's.');
//      }, 1000);};
// var stop= function() {
//           clearInterval(this.stop1);
//      };
//    var  reset= function() {
//           clearInterval(this.stop1);
//           this.time = 0;
//      }
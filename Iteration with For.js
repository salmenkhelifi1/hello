// Sprint Material Part 1
// ex1
function sumOfN(n) {
  var sum=0;
  for (i=0;i<n+1;i++) {
sum+=i;

  }
  return sum
}
// ex2

function factorialOfN(n) {
var sum=1;
for (i=1;i<n+1;i++){
    sum=sum*i
}
return sum

}
// ex3
function repeatString(string, num) {
    var result="";
    for(i=0;i<num;i++){
        result+=string
    }
    return result
}
// ex4   ---------
function countMinMax(min, max) {
    //Write your code here 
    return Math.abs(min-max)
 }  

//  ex5
function sumMinToMax(min, max) {
    var x=0;
    for(i=min;i<max;i++){
        x+=i;
    }
return x
 }  
//  ex6
function productMinToMax(min, max) {
    //Write your code here 
    var x=1;
    for(i=min;i<max;i++){
        x*=i;
    } 
    return x
 }  
//  ex7
function multiplyBy10NTimes(num, n) {
    //Write your code here 
    var y=num;
    for(i=1;i<n;i++){
        y*=10**i  
    }
    return y
 }  
//  ex8

function countCharAtIndex(string1, index, string2) {

}
// More Practice ex1

function reverseString(string) {
    //Write your code here 
    var x="";
    for(i=string.length;i>=0;i--){
        
        x+=string.charAt(i)
    }
return x
}  
//  ex2
function getIndexOf(string, char) {
    //Write your code here 
    for(i=0;i<string.indexOf(char);i++){
    }
    return i }  
    // Sprint Material Part 2
    // ex2
function primeCounter(number) {
   var x=1;
   var sum=0;
   for(i=1;i<number;i++){
if(i%2===0){
    return sum=x++
}return sum
   }}
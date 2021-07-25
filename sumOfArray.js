//Anonymous Function

var Sum = function(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
}
var a = [1,2,3,4,5];
Sum(a);

//IIFE function
(function(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
})([1,2,3,4,5]);

//Arrow function
var SumOfArray = (arr) => {
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
}
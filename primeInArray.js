//Anonymous Function
    
var isPrime = function(arr){

    for(var i = 2; i<arr;i++)
    {
        if(arr%i==0)
        {
            return false;
        }
    }return true;
}
  
var array = [3,4,5,6,7,11];
console.log(array.filter(isPrime));

//IIFE function
(function(arr){
    for(var i = 2; i<arr;i++)
    {
        if(arr%i==0)
        {
            return false;
        }
    }return true;
})([3,4,5,6,7,11]);

//Arrow Function
var prime = (arr) =>{
    for(var i = 2; i<arr;i++)
    {
        if(arr%i==0)
        {
            return false;
        }
    }return true;
}

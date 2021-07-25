//Anonymous Function

var odd = function(arr){
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
        else{
            continue;
        }
    }
}

var a = [15,17,45,44,84,99];
odd(a);

//IIFE funtion
(function(arr){
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
        else{
            continue;
        }
    }

})([15,17,45,44,84,99]);

// arrow functions
var oddN = (arr) => {
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
        else{
            continue;
        }
    }
}
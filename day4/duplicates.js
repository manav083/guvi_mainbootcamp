// Anonymous Function

var duplicate = function(arr){
    
    for(var i = 0;i<arr.length;i++)
    {
        for(var j =0;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                var index = arr.indexOf(arr[j]);
                arr.splice(index,1);
            }
        }
    }
    return arr;
};

var array = [1,1,1,2,2,3,4,5,6,6,6,6,7,7]
console.log(duplicate(array));

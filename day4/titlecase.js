//Anonymous Function

var titleCase = function(str) {

    str = str.toLowerCase().split(' ');     // conert string array to lowercase and split the string wherever space is present.

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  //convert the character at 0 position of each string to Upper case and concatenate with remaining part of string
    }

    console.log(str.join(' ')); // printing the whole string by joining splitted string with space.
  }

  var strr = "guvi geek zen class";
  titleCase(strr);

  //IIFE function

  (function(str){
    str = str.toLowerCase().split(' ');     

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    }

    console.log(str.join(' ')); 
  })("guvi geek zen class");

  //arrow function

  var titlecase = (str) => {
    str = str.toLowerCase().split(' ');     

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    }

    console.log(str.join(' ')); 
  }
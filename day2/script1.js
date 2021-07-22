var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]
 // for of loop
  for (let x of obj) {
      console.log(x.age)
  }

  // for loop
  for(i = 0; i<obj.length;i++)
  {
      console.log(obj[i].age);
  }

  // for in loop
  for (let y in obj) {
      console.log(obj[y].age);
  }

  //forEach loop
  obj.forEach(myFunction);
  function myFunction(item)
  {
      console.log(item.age);
  }

  //xmlhttprequest
  
var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.eu/rest/v2/all");
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    foo(data);
    
  };
  xhr.send();

  function foo(y)
  {
     for (let a in y) {
        console.log(y[a].subregion);
        console.log(y[a].flag);
        console.log(y[a].name);
        console.log(y[a].region);
        console.log(y[a].population);
     }
  }

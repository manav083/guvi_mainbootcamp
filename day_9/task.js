// Asian Countries using Filter Function

// let obj = fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((region) => region.filter((asian) => asian.region === "Asia"))
//   .then((a) => console.log(a));

// Countries with population less than 2 Lakhs

// let obj2 = fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((population) => population.filter((popl) => popl.population < 200000))
//   .then((a) => console.log(a));

// name, capital, flag using foreach

// let obj3 = fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((details) =>
//     details.forEach((element) => {
//       console.log(element.name, element.capital, element.flag);
//     })
//   );

// Print total population of countries using reduce function

// function totalPopulation(prev, current) {
//     return prev + current;
// }

// let obj3 = fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((totalPop) => {return totalPop});

//   let pop = () => {
//       obj3.then(totalpop.reduce(pop = () => {

//       }))
//       .then((a) => console.log(a));
//   }

// Print the country which uses US Dollars as currency

// let obj4 = fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((currency) => currency.filter((USdollars) => USdollars.currency === "US Dollars"))
//   .then((a) => console.log(a));

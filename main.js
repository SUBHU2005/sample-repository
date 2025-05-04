
//function testAlert(message) {
//    alert(message);
//}

//testAlert("test123");

//testAlert(4 + 5);
//console.log(7+8);

//document.getElementById('greeting').innerHTML="hello World";
document.querySelector("#open-nav-menu").addEventListener("click", function(){
   document.querySelector("header nav .wrapper").classList.add("nav-open")
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
 });
 
 const customer = "sara";
 let balance = 20000;
 console.log("Hello, " + customer + " your balanace is USD "+balance)

balance = balance +200

console.log("Hello, " + customer + " your new balanace is USD "+balance)

// Greeting section

const greetingText="Good Morning";
const weatherCondition="sunny";
const userLocation="New York";
let temperature = 22.437;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
console.log(weatherText)

document.querySelector("#greeting").innerHTML=greetingText
document.querySelector("p#weather").innerHTML=weatherText
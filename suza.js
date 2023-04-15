console.log("VARIABLES");
let name = "yamungu";
let id = 2.67;
let youMarried = false;
console.log(name + " its type is "+ typeof name);
console.log(id + " its type is "+ typeof id);
console.log(youMarried+ " its type is "+ typeof youMarried);
console.log("");


console.log("OBJECTS");
let state = {
    name: "mwajabu",
    age: 34,
    level: "two",
    address: "fuoni"
};
console.log(state.age);
console.log(state);
 console.log(Object.values(state));

 console.log("");

 let home = {
    stuname: "hana",
    stucampus: "pawaga",
    address: {
        zipcode: 45,
        street: "maungani",
        state: "zanzibar"
    }
 }
 console.log(home);
 console.log(Object.values(home));
 console.log(home.address)
 console.log("")

 console.log("ARRAYS");
 let cities = ["dar",30.5,"mwanza","mbeya",67];//u may add int and 
 //string in the same array
 console.log(cities);
 console.log(cities[1]);
 console.log(cities.length);
 console.log("LOOPING ARRAY");
 for (let n of cities){
    console.log(n);
 }

 cities.forEach(function(n,i){//majina halafu index zao zinafata
    console.log(i + "-" + n);
 })
 console.log("");
 console.log("FUNCTION");

 function myfunction(a,b){
    console.log(a+b)
 }
 myfunction(4,5);

 function mysecond(c,d){
    let multiplication = (c*d);
     return multiplication
    // return true
 }
 let multiplication = mysecond(8,7);
 console.log(multiplication);

 let myobj = {
   name: 'john doe',
   age: 30,
   iscool: true,
   myfunction: function(name){
      console.log(this.name = name);
   }
 };

 console.log("LOOPS")
 for(let i=1; i<=10; i+=1){
   console.log(i);
 }

 x = 1;
 while(x<10){
   console.log(x);
   x+=1
 }

 console.log("CLASSES");
 class Dai{
   name = "happifany haule"
   constructor(){
  console.log('${name}')
   }
 }
 let Dai = new Dai();
 function myname(){
   document.getElementById
 }

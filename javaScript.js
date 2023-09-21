// let data = new Date("sep 16, 2023")
// console.log(data); 

// let promise = new Promise(function(resolve, reject){
//     let name1 = "badal";
//     let name2 = "badal";
//     if(name1 === name2){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// promise.then(function(){
//     console.log("sessusfully compleate");
// }).catch(function(){
//     console.log("error");
// })


// let promise = new Promise(function(resolve,reject){
//     resolve("badal kumar")
// })

// promise.then(function(sessusfully){
//     console.log(sessusfully);
// }).catch(function(errr){
//     console.log(errr);
// })

// let arr = [2,8,4,5,7,1,3,2]

// arr.sort()
// console.log(arr);

// function gfg(){
//     console.log(Boolean(10));
// }
// gfg()

// console.log(Boolean(0));
// console.log(Boolean(1));

// function init(){
//     let name = "badal";
//     function inertFuctiion(){
//         console.log(name);
//         console.log("hello");
//     }
//     inertFuctiion()
    
// }
// init()

//clouser is a combination of function which is work in the inner of function

// function addNumber(num1){
//     return function(num2){
//         return num1 + num2;

//     }
    
       
//     }
    
// let add1 = addNumber(10);
// let add2 = addNumber(15)


// console.log(add1(12));
// console.log(add2(15));


// function add(a,b,c){
//     return a+b+c;
// }
// let number = [2,3,4]
// console.log(add(...number));

// const arr = [2,3,4,5]

// const object = [...arr]
// console.log(object);

// let num = 2;
// let num1 = 2;

// console.log(num == num1);
// console.log(num === num1);

// for(let i = 0; i<5; i++){
//     console.log("hell badal");
// }

// let i = 0;

// do{
//     i += 1;
//     console.log(i);
// }
// while(i <5);

// let details = {
//     name: "badal",
//     course: "dsa"
// }

// const prox = new Proxy(details, {});

// console.log(prox.name);
// console.log(prox.course);

// let details = {
//     name: "badal",
//     course: "dsa"
// }

// const prox = new Proxy(details,{get: function(){
//     return "unauthorized"
// }})

// console.log(prox.name);
// console.log(prox.course);

// let details = {
//     name: "raj",
//     course: "dsa"
// }

// const proxy = new Proxy(details,{
//     get: function(tar,pro){
//         if(pro === "1course"){
//             return undefined;

//         }
//         return tar[pro]
        
//     }
    
   
// });
// console.log(proxy.name);
// console.log(proxy.course);

// const name = "badal"


// function fun(){
//     let name = "kumar"
//     console.log(name);
// }
// fun()
// console.log(name);

// let a, b, rest;

// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest]= [10,20,30,40,50];

// console.log(rest);

let a = 10;
let b = 20;

[a, b] = [b,a]

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
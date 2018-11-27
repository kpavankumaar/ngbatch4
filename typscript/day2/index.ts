// let const and var 
let b = 30;
const name_1 = 'ravi';
// name_1 = "pavan";
const obj = {
    name:'ravi'
}
obj = '';
obj.name = 'pavan';
obj.age = 20;
delete obj.name;
console.log(obj);
const arr = [1,2,3];
arr = []
arr.push(10);
console.log(arr)
function run(){
    let a = 10;
    console.log(b);
    function test(){
        console.log(a);
    }
    test();
}
run();

// console.log(a)

// arrow functions
// var sum = function(){
//     console.log('function sum');
// } 
let  sum = (a,b) => {
    console.log(this);

    return  a+b;
 };
 
 let obj_1 = {
     name: 'ravi',
     getSum: ()=>{
         console.log(this);
     }
 }
 let add = sum(10,9);
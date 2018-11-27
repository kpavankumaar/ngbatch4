var _this = this;
// let const and var 
var b = 30;
var name_1 = 'ravi';
// name_1 = "pavan";
var obj = {
    name: 'ravi'
};
obj = '';
obj.name = 'pavan';
obj.age = 20;
delete obj.name;
console.log(obj);
var arr = [1, 2, 3];
arr = [];
arr.push(10);
console.log(arr);
function run() {
    var a = 10;
    console.log(b);
    function test() {
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
var sum = function (a, b) {
    console.log(_this);
    return a + b;
};
let obj_1 = {
    name: 'ravi',
    getSum: ()=>{
        console.log(this);
    }
}
obj_1.getSum();
var add = sum(10, 9);

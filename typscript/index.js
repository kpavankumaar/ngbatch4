var a = 10;
var _loop_1 = function (j) {
    setTimeout(function () {
        console.log(j);
    }, 1000);
};
// let and const
// function cb(i){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// for(var i = 0 ; i < 10 ; i++){
//     cb(i)
// }
for (let j = 0; j < 10; j++) {
    setTimeout(function(){
        console.log(j);
    },1000)
}
console.log(j);
interface Table {
    make : string;
    work: (a:number,b:string) => number;
    test?:number;
    
}
let table:Table;
table = {
    make: '',
    work:function(x,y){
        return 20;
    },
    name:'pavan'
}

table.make = 'change';
table.work(10,'20');
interface CustomerData{
    [index: number]: string | number | number[];
}

let arr_1:CustomerData = ['ravi','pavan',20,[3,4],{}];

class Mobile_1 {
    constructor(brand){
        console.log(brand);
    }
}

let samsungMobile = new Mobile_1('samsung');
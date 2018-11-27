

class Mobile {
    constructor(model){
        console.log(model);
        this.model = model
    }
    brand = 'samsung';
    model:string;
    run(){
        console.log('test');
    }
}

let samsung = new Mobile('note9');
samsung.run();
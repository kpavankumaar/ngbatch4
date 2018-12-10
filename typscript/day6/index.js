class engine {
    private data;
    constructor(data){

    }
    get engineType(){
        
        return this.data;
    }
    set engineType(type){
        this.data = type
    }
}
var test = new engine(10)
test.data = 50;
console.log(test.data);
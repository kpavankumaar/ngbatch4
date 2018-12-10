
interface television {
    screen;
    shape?:string;
    sample:()=> number;
}
interface plasma extends television{
    colorunit;
}
class Television implements plasma {
    screen:string;
    // shape:string;
    colorunit:string;
    constructor(private panel,protected brand:string,public musicsystem){
        // this.shape = panel;
        console.log(panel);
    }
    
    public get value() : string {
        return this.panel;
    }
    
    public set value(v : string) {
        this.panel = v;
    }
    
    
    sample():number{
        console.log(this.brand);
        console.log(this.panel);
        return 10;
    }
}
class Lcd extends Television{
    constructor(p1,p2,p3){
        super(p1,p2,p3);
    }
    wifi(){
        console.log(this.brand)
        // console.log(this.panel);
     }
}
class Led extends Lcd{
    constructor(p1,p2,p3){
        
        super(p1,p2,p3);
        this.brand;
    }
    test(){
        console.log(this.musicsystem);
        console.log(this.brand);
    }
}
let tv = new Lcd('rectangle','samsung','bose');
tv.value = 'frame panel'
console.log(tv.value);

class radio{
    static play(){
        console.log('play radio');

        return {name:'ravi'};
    }
}
let testObj = radio.play();
// Television.sample()
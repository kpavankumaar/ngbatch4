import {Engine} from './index'
import { Clutch } from './index';
export module BasicEngine {
    
    export class DieselEngine extends Engine{
        vehicletype;
        static test(){
            
        }
    }
}
var dieselCar = new BasicEngine.DieselEngine();
console.log(dieselCar.clutchtype);
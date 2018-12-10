import { BasicEngine } from "./basics";
interface shockabsorbers{
    frontshockabsorbers;
    rearshockabsorbers;
}

interface Exhaust{
    twinExhaust
    singleExhaust;
}
export class Clutch{
    clutchtype;
}
export class Engine implements shockabsorbers, Exhaust{
    enginetype;
    twinExhaust
    singleExhaust;
    frontshockabsorbers;
    rearshockabsorbers;
}
let newContent = new BasicEngine.DieselEngine.test();
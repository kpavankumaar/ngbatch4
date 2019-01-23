import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";

const ordersRoute:Routes = [
    {path:'', component:OrdersComponent}
]

@NgModule({
    imports:[RouterModule.forChild(ordersRoute)],
    exports:[RouterModule]
})
export class OrdersRoutingModule{

}
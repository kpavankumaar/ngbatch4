import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customerscomponent";
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';


const customersRoute:Routes = [
    {path:'', component:CustomersComponent}
]
@NgModule({
    imports:[RouterModule.forChild(customersRoute)],
    exports:[RouterModule]
})
export class CustomersRoutingModule{
    static components = [CustomersComponent,CustomerscardviewComponent, CustomerslistviewComponent]
}
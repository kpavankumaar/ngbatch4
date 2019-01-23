import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customerscomponent";
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';
import { CoreModule } from "../core/core.module";


const customersRoute:Routes = [
    {path:'customers',component:CustomersComponent}
]
@NgModule({
    imports:[RouterModule.forChild(customersRoute),CoreModule],
    declarations: [CustomersComponent,CustomerscardviewComponent, CustomerslistviewComponent],
    exports:[RouterModule]
})
export class CustomersRoutingModule{

}
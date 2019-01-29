import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customerscomponent';



const customersRoute: Routes = [
    {path: '', component: CustomersComponent}
];
@NgModule({
    imports: [RouterModule.forChild(customersRoute)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {

}

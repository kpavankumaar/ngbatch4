import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
    {path: '' , redirectTo: 'customers', pathMatch: 'full'},
    {path: 'customers/:id', loadChildren: './customer/customer.module#CustomerModule' },
    {path: 'customers' , loadChildren: './customers/customers.module#CustomersModule'},
    {path: 'order', loadChildren: './orders/orders.module#OrdersModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class RoutingModule {
}

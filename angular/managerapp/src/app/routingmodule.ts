import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
    {path: '' , redirectTo:'customers', pathMatch:'full'},
    {path: 'customers' , loadChildren: './customers/customers.module#CustomersModule'},
    { path: 'order', loadChildren: './orders/orders.module#OrdersModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class RoutingModule {
}

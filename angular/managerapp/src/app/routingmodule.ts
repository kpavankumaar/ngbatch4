import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
    {path: '' , redirectTo:'customers', pathMatch:'full'},
    {path: 'customers' , loadChildren: './customers/customers.module#CustomersModule'},
    {path: 'order', loadChildren: './orders/orders.module#OrdersModule' },
    {path: 'customer', loadChildren: './customer/customer.module#CustomerModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})

export class RoutingModule {
    
}
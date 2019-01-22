import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers/customerscomponent';
import { OrdersComponent } from './orders/orders/orders.component';
import { LoginComponent } from './login/login/login.component';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';

const route: Routes = [
    {path: '' , redirectTo:'customers', pathMatch:'full'},
    {path: 'customers' , loadChildren: './customers/customers.module#CustomersModule'},
    { path: 'order', component: OrdersComponent },
    { path: 'login', component: LoginComponent },
    {path: '**' , component: CustomersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(route), CoreModule, CustomersModule, OrdersModule, LoginModule],
    exports: [RouterModule, CoreModule, CustomersModule, OrdersModule, LoginModule]
})

export class RoutingModule {
    
}
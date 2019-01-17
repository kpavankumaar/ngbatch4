import { Routes } from "@angular/router";
import { CustomersComponent } from "./customers/customerscomponent";
import { OrdersComponent } from "./orders/orders/orders.component";
import { LoginComponent } from "./login/login/login.component";
export const route:Routes = [
    {path:'customers',component: CustomersComponent},
    {path:'orders',component: OrdersComponent},
    {path:'login',component: LoginComponent},
]
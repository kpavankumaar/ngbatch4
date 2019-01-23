import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './ordersroutingmodule';

@NgModule({
  imports: [
    CommonModule, OrdersRoutingModule
  ],
  declarations: [OrdersComponent],
  
})
export class OrdersModule { }

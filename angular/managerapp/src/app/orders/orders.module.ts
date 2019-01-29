import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './ordersroutingmodule';
import { DataService } from '../core/services/data.service';

@NgModule({
  imports: [
    CommonModule, OrdersRoutingModule
  ],
  providers:[],
  declarations: [OrdersComponent],
  
})
export class OrdersModule {
  constructor(){
    console.log('Orders Module loaded ')
  }
 }

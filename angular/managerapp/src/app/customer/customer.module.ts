import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerDetailsComponent } from './customer-details.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    CustomerOrdersComponent,
    CustomerEditComponent,
    CustomerDetailsComponent
  ]
})
export class CustomerModule { }

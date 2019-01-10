import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';
import { CustomersComponent } from './customerscomponent';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersComponent,CustomerscardviewComponent, CustomerslistviewComponent],
  exports:[CustomersComponent]
})
export class CustomersModule { }

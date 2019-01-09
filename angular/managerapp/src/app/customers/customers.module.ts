import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerscardviewComponent, CustomerslistviewComponent],
  exports:[CustomerscardviewComponent]
})
export class CustomersModule { }

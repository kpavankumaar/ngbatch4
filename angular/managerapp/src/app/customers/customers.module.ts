import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerscardviewComponent } from './customerscardview/customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview/customerslistview.component';
import { CoreModule } from '../core/core.module';
import { CustomersRoutingModule } from './customersrouting.module';
import { CustomersComponent } from './customerscomponent';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, CoreModule],
  declarations: [CustomersComponent, CustomerscardviewComponent, CustomerslistviewComponent],
})
export class CustomersModule { }

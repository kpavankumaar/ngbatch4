import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CustomersRoutingModule } from './customersrouting.module';
import { CustomersComponent } from './customerscomponent';
import { DataService } from '../core/services/data.service';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, CoreModule],
  providers: [DataService],
  declarations: [CustomersRoutingModule.components],
})
export class CustomersModule {
  constructor() {
    console.log('Customers Module loaded ')
  }
 }

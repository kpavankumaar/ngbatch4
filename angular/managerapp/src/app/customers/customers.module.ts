import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { CustomersRoutingModule } from './customersrouting.module';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, CoreModule],
  declarations: [CustomersRoutingModule.components]
})
export class CustomersModule {
  constructor(){
    console.log('Customers Module loaded ')
  }
 }

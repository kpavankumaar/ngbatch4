import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routingmodule';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer/customer-edit.component';
import { CustomerOrdersComponent } from './customer/customer-orders.component';
import { CustomerDetailsComponent } from './customer/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerOrdersComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routingmodule';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { DataService } from './core/services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule, // main routes for application
    LoginModule,
    CoreModule, // eager loading as the selector for app menu is needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

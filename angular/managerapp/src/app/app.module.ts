import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routingmodule';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { LoginModule } from './login/login.module';
import { DataService } from './core/services/data.service';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,  
    CoreModule, // eager loading  
    RoutingModule, // routing of our application
    LoginModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { OrdersModule } from 'src/app/orders/orders.module';
import { LoginModule } from 'src/app/login/login.module';

@Injectable({
  providedIn: LoginModule
})
export class DataService {
  data;
  constructor() { }
  getData(){
    return this.data= [1,2,3,4,5]
  }
}

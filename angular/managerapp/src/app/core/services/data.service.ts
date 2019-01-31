import { Injectable } from '@angular/core';
import { OrdersModule } from 'src/app/orders/orders.module';
import { LoginModule } from 'src/app/login/login.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  data;
  baseUrl = '/api/customers'
  constructor(private http:HttpClient) { }

  getData(){
    return this.data= [1,2,3,4,5]
  }
  getCustomersPage(page:number,pageSize:number){
    return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`);
  }
}

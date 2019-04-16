import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CustomersnavComponent } from './customersnav/customersnav.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  providers:[DataService],
  declarations: [MenuComponent, CustomersnavComponent],
  exports: [MenuComponent,CustomersnavComponent]
})
export class CoreModule {
  constructor(){
    console.log('CoreModule');
  }
 }

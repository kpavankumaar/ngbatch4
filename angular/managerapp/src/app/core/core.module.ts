import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { CustomersnavComponent } from './customersnav/customersnav.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [MenuComponent, CustomersnavComponent],
  exports: [MenuComponent,CustomersnavComponent]
})
export class CoreModule { }

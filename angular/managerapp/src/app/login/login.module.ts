import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './loginroutingmodule';

@NgModule({
  imports: [
    CommonModule, LoginRoutingModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }

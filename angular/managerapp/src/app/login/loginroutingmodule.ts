import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const loginRoute:Routes = [
    {path:'login',component:LoginComponent}
]
@NgModule({
    imports:[RouterModule.forChild(loginRoute)],
    exports:[RouterModule]
})
export class LoginRoutingModule{

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './myComponents/logIn.component';
import { RegistComponent } from './myComponents/regist.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"login",component:LoginComponent},
    {path:"regist",component:RegistComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

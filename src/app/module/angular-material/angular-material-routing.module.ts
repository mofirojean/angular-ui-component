import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [{
  path: '', component: AngularMaterialComponent ,
  children: [
    {component: HomeComponent, path: "home"},
    {component: ServiceComponent, path: "service"}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }

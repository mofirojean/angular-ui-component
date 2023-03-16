import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { AngularMaterialComponent } from './angular-material.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AngularMaterialComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    SharedModule
  ]
})
export class AngularMaterialModule { }

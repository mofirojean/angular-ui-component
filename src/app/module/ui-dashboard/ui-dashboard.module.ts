import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDashboardRoutingModule } from './ui-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UiDashboardRoutingModule,
    SharedModule
  ]
})
export class UiDashboardModule { }

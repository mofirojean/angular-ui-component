import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDashboardRoutingModule } from './ui-dashboard-routing.module';
import { UiDashboardComponent } from './ui-dashboard.component';


@NgModule({
  declarations: [
    UiDashboardComponent
  ],
  imports: [
    CommonModule,
    UiDashboardRoutingModule
  ]
})
export class UiDashboardModule { }

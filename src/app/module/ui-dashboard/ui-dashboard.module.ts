import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDashboardRoutingModule } from './ui-dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavComponent } from './component/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './component/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
  DashboardComponent,
  NavComponent,
  AddressFormComponent,
  DragDropComponent
],
  imports: [
    CommonModule,
    UiDashboardRoutingModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports: [
    
  ]
})
export class UiDashboardModule { }

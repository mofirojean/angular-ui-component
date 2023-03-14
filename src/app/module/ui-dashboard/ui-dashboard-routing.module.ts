import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDashboardComponent } from './ui-dashboard.component';

const routes: Routes = [{ path: '', component: UiDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiDashboardRoutingModule { }

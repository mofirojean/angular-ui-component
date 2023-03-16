import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavComponent } from './component/nav/nav.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { DragDropComponent } from './component/drag-drop/drag-drop.component';

const routes: Routes = [
  {
    path: '', component: NavComponent,
    children: [
      {path: "home", component: DashboardComponent},
      {component: AddressFormComponent, path: "address"},
      {component: DragDropComponent, path: "drag-drop"},
      {path: "", redirectTo: "/home", pathMatch: "full"}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiDashboardRoutingModule { }

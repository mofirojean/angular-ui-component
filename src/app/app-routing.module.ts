import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPointComponent } from './components/access-point/access-point.component';

const routes: Routes = [
  {path: '', component: AccessPointComponent },

  { path: 'ui-dashboard', 
  loadChildren: () => import('./module/ui-dashboard/ui-dashboard.module').then(m => m.UiDashboardModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

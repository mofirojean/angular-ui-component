import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessPointComponent } from './components/access-point/access-point.component';
import { ElementsComponent } from './components/elements/elements.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccessTileComponent } from './components/access-point/access-tile/access-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessPointComponent,
    ElementsComponent,
    AccessTileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

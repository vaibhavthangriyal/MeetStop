import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MapAreaComponent } from './map-area/map-area.component';

import { AgmCoreModule } from '@agm/core';
import { MapsService } from './shared/maps.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MapAreaComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCV74NeVUIthKv4J7bl2udorPFBVkf0KCs',
      libraries: ["places"]
    })
  ],
  providers: [ MapsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

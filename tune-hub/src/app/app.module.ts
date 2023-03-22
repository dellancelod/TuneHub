import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuningComponent } from './tuning/tuning.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarTogglerComponent } from './nav-bar-toggler/nav-bar-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    TuningComponent,
    NavBarComponent,
    NavBarTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NavButtonComponent } from './nav-button/nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    NavButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

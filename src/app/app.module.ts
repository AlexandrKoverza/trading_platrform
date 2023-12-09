import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingModule } from './landing/landing.module';
import { CabinetModule } from './cabinet/cabinet.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    CabinetModule
  ],
  exports: [NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

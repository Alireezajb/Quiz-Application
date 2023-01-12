import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';
import { QuiestionMainComponent } from './quiestion-main/quiestion-main.component';
import { HttpClientModule } from '@angular/common/http';
import { BgChangerDirective } from './bg-changer.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    WelcomeMainComponent,
    QuiestionMainComponent,
    BgChangerDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

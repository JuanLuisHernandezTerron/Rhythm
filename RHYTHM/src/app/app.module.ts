import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { MainComponent } from './pages/main/main.component';
import { PoliticaPrivacidadComponent } from './pages/avisoLegal/politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './pages/avisoLegal/aviso-legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './pages/avisoLegal/politica-cookies/politica-cookies.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
    MainComponent,
    PoliticaPrivacidadComponent,
    AvisoLegalComponent,
    PoliticaCookiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

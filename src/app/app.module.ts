import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    Componente02Component
  ],
  imports: [
    BrowserModule,
    CompartilhadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

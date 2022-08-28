import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { ListagemComponent } from './equipamento/listagem/listagem.component';
import { CadastroComponent } from './equipamento/cadastro/cadastro.component';
import { DetalheComponent } from './equipamento/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    Componente02Component,
    EquipamentoComponent,
    ListagemComponent,
    CadastroComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    CompartilhadoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

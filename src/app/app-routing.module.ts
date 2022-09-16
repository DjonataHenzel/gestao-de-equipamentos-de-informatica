import { DetalheComponent } from './equipamento/detalhe/detalhe.component';
import { ListagemComponent } from './equipamento/listagem/listagem.component';
import { CadastroComponent } from './equipamento/cadastro/cadastro.component';
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', component: EquipamentoComponent
},

{ path: 'cadastro', component: CadastroComponent
},

{ path: 'listagem', component: ListagemComponent
},

{ path: 'detalhe/:id', component: DetalheComponent
},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

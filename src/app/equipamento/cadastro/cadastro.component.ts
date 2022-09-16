import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/model/equipamento';
import { EquipamentoService } from '../equipamento.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    numeroAtivo=""
    tipoEquipamento=""
    modelo=""
    marca=""
    configuracao=""
    observacao=""
    voltagem=""

  equipamento!: Equipamento;

  listaEquipamentos:any= []

  constructor(private equipamentoService: EquipamentoService) { }

  ngOnInit(): void {
    this.listEquipamentos();
    this.equipamento = new Equipamento('','','','','','','');
  }

  limpar():void{
    this.equipamento.numeroAtivo="",
    this.equipamento.tipoEquipamento="",
    this.equipamento.modelo="",
    this.equipamento.marca="",
    this.equipamento.configuracoes="",
    this.equipamento.observacao="",
    this.equipamento.voltagem=""
  }

  // apresentar lista de cadastros
  listEquipamentos(){
    this.equipamentoService.list().subscribe((response)=>{
      this.listaEquipamentos = response;
    });
  }

  // função para realizar o cadastro
  onSubmit(){
    this.equipamentoService.create(this.equipamento).subscribe((response)=>{
      this.listEquipamentos();
      this.limpar();
    },(error=>{}));
  }

}

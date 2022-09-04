import { Component, OnInit } from '@angular/core';

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

  listaEquipamentos = [
    {
      id: 1,
      numeroAtivo: '12345',
      tipoEquipamento: 'Computador desktop',
      modelo: 'AFD-34',
      marca: 'dell',
      voltagem: '127V',
      configuracoes: 'SSD 240GB, 8GB de RAM, I3 10ªG',
      observacao: 'apresentando problemas na fonta'
    }]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void { }

  limpar():void{
    this.numeroAtivo="",
    this.tipoEquipamento="",
    this.modelo="",
    this.marca="",
    this.configuracao="",
    this.observacao="",
    this.voltagem=""
  }

}

import { IEquiResposta } from './../../equipamento.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  @Input() listaEquipamentos!:IEquiResposta[];

  constructor() { }

  ngOnInit(): void {
  }

}

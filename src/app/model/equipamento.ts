export class Equipamento {
  public numeroAtivo: string;
  public id!: number;
  public tipoEquipamento: string;
  public modelo: string;
  public marca: string;
  public voltagem: string;
  public configuracoes: string;
  public observacao: string;


  constructor(
  numeroAtivo: string,
   tipoEquipamento: string,
   modelo: string,
   marca: string,
   voltagem: string,
   configuracoes: string,
   observacao: string,
  )

  {
    this.numeroAtivo = numeroAtivo;
    this.tipoEquipamento = tipoEquipamento;
    this.modelo = modelo;
    this.marca = marca;
    this.voltagem = voltagem;
    this.configuracoes = configuracoes;
    this.observacao = observacao;
  }
}

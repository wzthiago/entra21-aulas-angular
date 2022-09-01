import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  nome: string = "Thiago"
  sobrenome: string = "Souza"
  idade: string = "31"
  email: string = "wzthiago@gmail.com"
  vota: boolean = true
  enderecoImagem: string = 'https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-1080x675.png'
  padrao: string = "48"
  google: string = "https://google.com"
  alvo: string = "_blank"
  tabela: string = "table table-bordered table-striped"

  constructor() { }

  ngOnInit(): void {
  }

}

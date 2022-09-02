import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota: "vaiPagina",
      textContent: "Página",
      cor: "nav-icon far fa-circle text-success"
    });

    this.links.push({
      rota: "outroComponente",
      textContent: "Outro",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "inicioComponente",
      textContent: "Inicio Componente",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "property",
      textContent: "Property",
      cor: "nav-icon far fa-circle text-warning"
    });
    this.links.push({
      rota: "event",
      textContent: "Event",
      cor: "nav-icon far fa-circle text-light"
    });
    this.links.push({
      rota: "mao-dupla",
      textContent: "Mão Dupla",
      cor: "nav-icon far fa-circle text-warning"
    });
    this.links.push({
      rota: ["receber", "Thiago", 31, "Fpolis"],
      textContent: "Receber",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "enviar",
      textContent: "Enviar Componet",
      cor: "nav-icon far fa-circle text-success",
      hexa: "#FF0000"
    });
    this.links.push({
      rota: "diretivaIf",
      textContent: "Diretiva If",
      cor: "nav-icon far fa-circle text-danger"
    });
    this.links.push({
      rota: "diretivaFor",
      textContent: "Diretiva For",
      cor: "nav-icon far fa-circle text-danger"
    });
  }
}


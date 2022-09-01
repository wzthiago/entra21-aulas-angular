import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  minhaFunc() {
    alert("Mensagem da funcão com click")
  }

  somar() {
    // alert("1+2 =" + (1 + 2))
    this.resultado = 1 + 2
  }

  subtrair(a: number, b: number) {
    // alert(`${a}-${b}=${(a - b)}`)
    this.resultado = a - b
  }

  multiplicar() {
    let a: number = Number(prompt("Informe o primeiro número"))
    let b: number = Number(prompt("Informe o segundo número"))
    this.resultado = a * b
  }

  dividir(a: number, b: number) {
    // let a: number = Number(prompt("Informe o primeiro número"))
    // let b: number = Number(prompt("Informe o segundo número"))
    this.resultado = a / b
  }

  aumentar() {
    this.tamanho += 10
  }

  diminuir() {
    this.tamanho -= 5
  }

}

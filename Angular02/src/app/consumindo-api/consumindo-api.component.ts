import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {
  pokemon!: string

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }

  buscarPokemon(): void {
    this.service.quemEhEssePokemon(this.pokemon)
      .pipe(
        catchError(
          (error) => {
            let lista = (["Pikachu", "Dragonite", "Charmander"])
            return of(lista)
          }
        )
      )
      .subscribe((response) => {
        console.log("Deu certo!", response)

      })
  }

  buscarTypes(): void {
    this.service.quaisOsTipos().pipe(
      catchError((error) => {
        return of(["Evento de Erro!", "Evento de Erro! Evento de Erro!"])
      })
    )
      .subscribe((response) => {
        console.log("Processando...", response);

      })
  }
}

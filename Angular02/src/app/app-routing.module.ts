import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { EnviarComponent } from './enviar/enviar.component';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertyComponent } from './property/property.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  {path: "vaiPagina", component: PaginaComponent, canActivate:[SegurancaService]},
  {path: "outroComponente", component: OutroComponent, canActivate:[SegurancaService]},
  {path: "", component: LoginComponent},
  // {path: "**", component: LoginComponent},
  {path: "inicio", component: InicioComponent, canActivate:[SegurancaService]},
  {path: "property", component: PropertyComponent, canActivate:[SegurancaService]},
  {path: "event", component: EventComponent, canActivate:[SegurancaService]},
  {path: "mao-dupla", component: MaoDuplaComponent, canActivate:[SegurancaService]},
  {path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent, canActivate:[SegurancaService]},
  {path: "enviar", component: EnviarComponent, canActivate:[SegurancaService]},
  {path: "diretivaIf", component: DiretivaIfComponent, canActivate:[SegurancaService]},
  {path: "diretivaFor", component: DiretivaForComponent, canActivate:[SegurancaService]},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

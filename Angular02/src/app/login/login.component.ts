import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // entrou!: boolean;

  constructor(private router: Router, private seguranca: SegurancaService) { }

  ngOnInit(): void {
    this.seguranca.entrou = false;
  }

  entrar(): void {
    this.seguranca.entrou = true;
    this.router.navigateByUrl("inicio")
  }
}

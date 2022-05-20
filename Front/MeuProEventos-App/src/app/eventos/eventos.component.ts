import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;
  public dados: any = [
    {
      id : 1,
      Image : 'foto1.png',
      Tema : 'Tema 1',
      Local : 'Bahia',
      Data : '19/05/2022',
      QtdPessoas : 50,
      Lote : 7,
      Options : 'Deletar',
    },
    {
      id : 2,
      Image : 'foto2.png',
      Tema : 'Tema 2',
      Local : 'Santa Cartarina',
      Data : '19/05/2022',
      QtdPessoas : 250,
      Lote : 15,
      Options : 'Atualizar',
    },
    {
      id : 3,
      Image : 'foto3.png',
      Tema : 'Tema 3',
      Local : 'Acre',
      Data : '19/05/2022',
      QtdPessoas : 150,
      Lote : 3,
      Options : 'Adicionar',
    }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response =>this.eventos = response,
      error => console.log(error),

    );

  }

}

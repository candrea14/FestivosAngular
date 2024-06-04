import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Festivo } from "../../core/entidades/Festivo.1";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }
  public listar(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}verificar/${ano}/${mes}/${dia}`);
  }

  public buscar(nombre: string): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}obtener/${ano}`);
  }

}

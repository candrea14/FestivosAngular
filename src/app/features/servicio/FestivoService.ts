import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Festivo } from '../../core/entidades/Festivo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FestivoService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }
  public verificar(
    ano: number,
    mes: number,
    dia: number
  ): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(
      `${this.url}verificar/${ano}/${mes}/${dia}`
    );
  }

  public obtener(ano: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}obtener/${ano}`);
  }
  public crearFestivo(
    id: number,
    nombre: string,
    ano: number,
    mes: number,
    dia: number
  ): Festivo {
    const fecha = new Date(ano, mes - 1, dia);
    return {
      id,
      nombre,
      ano,
      mes,
      dia,
      fecha,
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Servico } from '../models/servico.model';
import { ListResponse } from '../models/generic/list.response';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServicosService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + "servicos/Lista";
  }

  public Listar(){
    return this.http.get<ListResponse<Servico>>(this.url);
  }
}

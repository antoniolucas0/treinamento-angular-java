import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`;
  constructor(private http: HttpClient) { }


  allClients() {
    return this.http.get<Cliente[]>(this.api)
  }

  createClient(cliente: Cliente) {
    return this.http.post<Cliente>(this.api, cliente)
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.api}${id}`)
  }
}

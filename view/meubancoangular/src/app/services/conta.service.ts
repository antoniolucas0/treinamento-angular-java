import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../interfaces/conta';
import { HttpClient } from '@angular/common/http';
import { SaqueDeposito } from '../interfaces/saque-deposito';
import { Transferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  api = `${environment.api}/contas/`;
  constructor(private http: HttpClient) { }


  allContas() {
    return this.http.get<Conta[]>(this.api)
  }

  createConta(conta: Conta) {
    return this.http.post<Conta>(this.api, conta)
  }

  saque(saque: SaqueDeposito) {
    return this.http.post<Conta>(`${this.api}saque/`, saque)
  }

  deposito(deposito: SaqueDeposito) {
    return this.http.post<Conta>(`${this.api}deposito/`, deposito)
  }

  transferencia(transferencia: Transferencia) {
    return this.http.post<Conta>(`${this.api}transferencia/`, transferencia)
  }


}

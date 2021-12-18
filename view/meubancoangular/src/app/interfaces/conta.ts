import { Cliente } from "./cliente";

export interface Conta {
  agencia: "string",
  cliente: Cliente,
  id: number,
  numero: "string",
  saldo: number
}

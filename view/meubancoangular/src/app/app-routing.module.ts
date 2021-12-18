import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarClienteComponent } from './pages/clientes/cadastrar-editar-cliente/cadastrar-editar-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarEditarContaComponent } from './pages/contas/cadastrar-editar-conta/cadastrar-editar-conta.component';
import { ContasComponent } from './pages/contas/contas.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'saque', component: SaqueComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/cadastrar', component: CadastrarEditarClienteComponent },
  { path: 'contas/cadastrar', component: CadastrarEditarContaComponent },
  { path: 'clientes/editar/:id', component: CadastrarEditarClienteComponent },
  { path: 'contas', component: ContasComponent },
  { path: 'transferencia', component: TransferenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

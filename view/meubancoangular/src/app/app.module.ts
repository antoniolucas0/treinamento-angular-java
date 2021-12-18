import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { HomeComponent } from './pages/home/home.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastrarEditarClienteComponent } from './pages/clientes/cadastrar-editar-cliente/cadastrar-editar-cliente.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { CadastrarEditarContaComponent } from './pages/contas/cadastrar-editar-conta/cadastrar-editar-conta.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExtratoComponent,
    SaqueComponent,
    DepositoComponent,
    HomeComponent,
    ClientesComponent,
    ContasComponent,
    CadastrarEditarClienteComponent,
    TransferenciaComponent,
    CadastrarEditarContaComponent,
    LabelInputComponent,
    CheckboxComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

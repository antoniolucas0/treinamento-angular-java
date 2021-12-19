import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/interfaces/cliente';
import { Conta } from 'src/app/interfaces/conta';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContaService } from 'src/app/services/conta.service';
import { ClientesComponent } from '../../clientes/clientes.component';
@Component({
  selector: 'app-cadastrar-editar-conta',
  templateUrl: './cadastrar-editar-conta.component.html',
  styleUrls: ['./cadastrar-editar-conta.component.css']
})
export class CadastrarEditarContaComponent implements OnInit {
  clientes: Cliente[] = [];

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    cliente: new FormControl('', Validators.required),
    id: new FormControl(null),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
  });

  getCLientById() {
    let id = this.formGroup.get('cliente')?.value
    let cliente
    for (let element of this.clientes) {
      if (element.id == id) {
        cliente = element;
        break;
      }
    }
    return cliente
  }
  constructor(private contaService: ContaService, private router: Router, private clienteService: ClienteService) { }
  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clienteService.allClients().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }
  cadastrar() {
    let conta: Conta = this.formGroup.value;
    conta.cliente = this.getCLientById()!
    this.contaService.createConta(conta).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        text: 'Efetuado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(contaApi);
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Erro, tente novamente!','error');
    })
  }

}

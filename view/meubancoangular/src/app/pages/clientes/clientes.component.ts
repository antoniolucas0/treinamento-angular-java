import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];


  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clienteService.allClients().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }

  deletar(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteClient(id).subscribe(clientesApi => {
          Swal.fire(
            'Deletado',
            'Cliente deletado com sucesso',
            'success'
          );
          this.listarTodosClientes()
        }, error => {
          Swal.fire({
            icon: 'error',
            text: 'Não é possível deletar o usuário',
          })
        })

      }
    })
  }

}

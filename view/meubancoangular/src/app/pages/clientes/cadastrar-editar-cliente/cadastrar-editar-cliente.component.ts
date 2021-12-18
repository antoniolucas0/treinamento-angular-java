import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-editar-cliente',
  templateUrl: './cadastrar-editar-cliente.component.html',
  styleUrls: ['./cadastrar-editar-cliente.component.css']
})
export class CadastrarEditarClienteComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    observacoes: new FormControl(''),
    ativo: new FormControl(true)
  });


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  enviar() {
    const cliente: Cliente = this.formGroup.value;
    this.clienteService.createClient(cliente).subscribe(clienteApi => {
      Swal.fire({
        icon: 'success', text: 'Cadastrado com sucesso', showConfirmButton: false, timer: 1500 })
      console.log(clienteApi);
      this.router.navigate(['/clientes']);
    }, error => {
      console.error(error)
    })
  }

}

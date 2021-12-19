import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SaqueDeposito } from 'src/app/interfaces/saque-deposito';
import { ContaService } from 'src/app/services/conta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  depositar() {
    const deposito: SaqueDeposito = this.formGroup.value;
    this.contaService.deposito(deposito).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        text: 'Efetuado Com Sucesso',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire('Erro, tente novamente!','error');
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/interfaces/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contaService.allContas().subscribe(contasApi => {
      this.contas = contasApi;
    });
  }

}

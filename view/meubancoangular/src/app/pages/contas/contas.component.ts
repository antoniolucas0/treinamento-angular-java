import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/interfaces/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: any[] = [];

  constructor(private contasService: ContaService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contasService.allContas().subscribe(contasApi => {
      this.contas = contasApi;
    });


  }
}

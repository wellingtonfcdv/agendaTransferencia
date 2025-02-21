import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from "../services/TransferenciaService";

@Component({
  selector: 'app-extrato',
  templateUrl: './ExtratoComponent.html',
  styleUrls: []
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.listarTransferencias().subscribe(
      data => {
        this.transferencias = data;
      },
      error => {
        alert('Erro ao carregar extrato: ' + error.message);
      }

    );

  }
  onSubmit(): void {
    console.log("Formulário enviado!");
    // Aqui pode ser implementada a lógica de filtro ou outra ação
  }
}

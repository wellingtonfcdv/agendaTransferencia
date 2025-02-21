import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from "../services/TransferenciaService";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
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
}

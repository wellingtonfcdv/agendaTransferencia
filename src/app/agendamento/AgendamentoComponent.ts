import { Component } from "@angular/core";
import { TransferenciaService } from "../services/TransferenciaService";

@Component({
    selector: 'app-agendamento',
    templateUrl: './agendamento.component.html',
    styleUrls: ['./agendamento.component.css']
})

export class AgendamentoComponent{
    transferencia = {
        contaOrigem: '',
        contaDestino: '',
        valor: null,
        dataTransferencia: ''
    };

    constructor(private transferenciaService: TransferenciaService){}

    onSubmit(){
        this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
            response => {
                alert('Transferência agendada com sucesso!');
            },

        )
    }
}

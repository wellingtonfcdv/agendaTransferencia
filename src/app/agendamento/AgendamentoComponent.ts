import { Component } from "@angular/core";
import { TransferenciaService } from "../services/TransferenciaService";

@Component({
    selector: 'app-agendamento',
    templateUrl: './AgendamentoComponent.html',
    styleUrls: []
})

export class AgendamentoComponent{
    transferencia = {
        contaOrigem: '',
        contaDestino: '',
        valorTransferencia: null,
        dataTransferencia: ''
    };

    constructor(private transferenciaService: TransferenciaService){}

    onSubmit(){
        this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
            response => {
                alert('Transferência agendada com sucesso!');
            },
            error =>{
              alert('Erro ao agendar transferência: ' + error.message);
            }
        );
    }
}

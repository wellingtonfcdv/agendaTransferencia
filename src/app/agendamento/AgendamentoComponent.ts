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

    errorMessage: string | null = null;

    constructor(private transferenciaService: TransferenciaService){}

    onSubmit(){
        this.errorMessage = null;
            
        this.transferenciaService.agendarTransferencia(this.transferencia).subscribe({
            next: (response) => {
                alert('Transferência agendada com sucesso!');
            },
            error: (err) => {
                const errorMsg = err.error?.message || err.error || 'Erro desconhecido ao agendar transferência.';

                this.errorMessage = errorMsg.replace('java.lang.IllegalArgumentException: ', '');
            }
        });
    }
        


}

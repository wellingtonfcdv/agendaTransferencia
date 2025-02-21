import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TransferenciaService{
    private baseUrl = 'http://localhost:8080/api'; 
    private agendamentoUrl = `${this.baseUrl}/transferencia`; 
    private listagemUrl = `${this.baseUrl}/agendamentos`; 

    constructor(private http: HttpClient){}

    agendarTransferencia(transferencia: any): Observable<any>{
        return this.http.post(this.agendamentoUrl, transferencia);

    }

    listarTransferencias(): Observable<any>{
        return this.http.get(this.listagemUrl);
    }
}

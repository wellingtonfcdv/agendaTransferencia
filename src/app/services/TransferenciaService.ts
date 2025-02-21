import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TransferenciaService{
    private apiUrl = 'http://localhost:8080/api/transferencia';

    constructor(private http: HttpClient){}

    agendarTransferencia(transferencia: any): Observable<any>{
        return this.http.post(this.apiUrl, transferencia);

    }

    listarTransferencias(): Observable<any>{
        return this.http.get(this.apiUrl);
    }
}

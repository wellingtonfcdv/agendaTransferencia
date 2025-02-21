import { Routes } from "@angular/router";
import { AgendamentoComponent } from "./agendamento/AgendamentoComponent";
import { ExtratoComponent } from "./extrato/ExtratoComponent";

export const routes: Routes = [
  { path: '', redirectTo: '/agendamento', pathMatch: 'full' },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'extrato', component: ExtratoComponent }

];

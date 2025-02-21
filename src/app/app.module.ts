import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agendamento/AgendamentoComponent';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { ExtratoComponent } from './extrato/ExtratoComponent';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

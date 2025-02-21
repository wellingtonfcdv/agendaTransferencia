package com.br.tokio.transferencia.controller;

import com.br.tokio.transferencia.model.TransfereAgendamento;
import com.br.tokio.transferencia.services.TransfereAgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransfereAgendamentoController {
    @Autowired
    private TransfereAgendamentoService agendamentoService;

    @PostMapping("/transferencia")
    public TransfereAgendamento transfereAgendamento(@RequestBody TransfereAgendamento agendamento){
        return agendamentoService.transfereAgendamento(agendamento);
    }

    @GetMapping("/agendamentos")
    public List<TransfereAgendamento> getAgendamentos(){
        return agendamentoService.getAgendamentos();
    }
}

package com.br.tokio.transferencia.services;

import com.br.tokio.transferencia.model.TransfereAgendamento;
import com.br.tokio.transferencia.repositories.TransfereAgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
public class TransfereAgendamentoService {

    @Autowired
    private TransfereAgendamentoRepository repository;

    public TransfereAgendamento transfereAgendamento(TransfereAgendamento agendamento){
        BigDecimal taxa = calculoTaxa(agendamento.getDataTransferencia());
        if (taxa == null){
            throw new IllegalArgumentException("Não tem taxa a ser aplicada para a data informada");
        }
        agendamento.setTaxa(agendamento.getValorTransferencia().multiply(taxa));
        return repository.save(agendamento);
    }

    private BigDecimal calculoTaxa(LocalDate dataTransferencia) {
        
    }
}

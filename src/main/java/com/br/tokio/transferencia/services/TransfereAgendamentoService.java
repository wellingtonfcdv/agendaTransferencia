package com.br.tokio.transferencia.services;

import com.br.tokio.transferencia.model.TransfereAgendamento;
import com.br.tokio.transferencia.repositories.TransfereAgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

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
            Long diasTransferencia = ChronoUnit.DAYS.between(LocalDate.now(),dataTransferencia);
            if (diasTransferencia <= 0)
                return new BigDecimal("0.025");
            
        return null;
    }
}

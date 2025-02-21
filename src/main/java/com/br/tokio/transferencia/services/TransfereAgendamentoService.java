package com.br.tokio.transferencia.services;

import com.br.tokio.transferencia.model.TransfereAgendamento;
import com.br.tokio.transferencia.repositories.TransfereAgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransfereAgendamentoService {

    @Autowired
    private TransfereAgendamentoRepository repository;

    public TransfereAgendamento transfereAgendamento(TransfereAgendamento agendamento){
        BigDecimal taxa = verificaTaxa(agendamento.getDataTransferencia());
        if (taxa == null){
            throw new IllegalArgumentException("Não tem taxa a ser aplicada para a data informada");
        }


        agendamento.setTaxa(taxa);
        agendamento.setDataAgendamento(LocalDate.now());
        return repository.save(agendamento);
    }

    private BigDecimal verificaTaxa(LocalDate dataTransferencia) {
        Long diasTransferencia = ChronoUnit.DAYS.between(LocalDate.now(),dataTransferencia);
        if (diasTransferencia == 0)
            return new BigDecimal("0.025");
        if(diasTransferencia < 0)
            return null;
        if (diasTransferencia > 0 && diasTransferencia <= 10)
            return null;
        if (diasTransferencia > 10 && diasTransferencia <= 20)
            return new BigDecimal("0.082");
        if (diasTransferencia > 20 && diasTransferencia <= 30)
            return new BigDecimal("0.069");
        if (diasTransferencia > 30 && diasTransferencia <= 40)
            return new BigDecimal("0.047");
        if (diasTransferencia > 40 && diasTransferencia <= 50)
            return new BigDecimal("0.017");
        return null;
    }

    public List<TransfereAgendamento> getAgendamentos(){
        List<TransfereAgendamento> lista = new ArrayList<>();
        repository.findAll().forEach(lista::add);
        return lista;
    }
}

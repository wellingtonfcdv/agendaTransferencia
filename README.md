# Backend - Sistema de Agendamento de Transferências Financeiras

Este é o backend do sistema de agendamento de transferências financeiras, desenvolvido com **Spring Boot 2.7.18** e **Java 11**. O objetivo é permitir o agendamento de transferências com cálculo de taxas baseado em datas e fornecer um extrato das transferências agendadas.

## Arquitetura

O backend segue uma arquitetura baseada em **MVC (Model-View-Controller)** com camadas adicionais para separação de responsabilidades e manutenção do código. Abaixo está a descrição das camadas principais:

### 1. Camada de Modelo (Model)
- **Função**: Representa os dados e a lógica de domínio do sistema.
- **Componentes**: 
  - Entidades JPA como `TransfereAgendamento`, que mapeiam as tabelas do banco de dados.
  - Contém atributos como `contaOrigem`, `contaDestino`, `valorTransferencia`, `taxa`, `dataTransferencia` e `dataAgendamento`.
- **Tecnologia**: Hibernate/JPA para mapeamento objeto-relacional.

### 2. Camada de Repositório (Repository)
- **Função**: Responsável pela persistência e acesso aos dados.
- **Componentes**: 
  - Interfaces como `TransferScheduleRepository`, que extendem `CrudRepository` do Spring Data JPA.
- **Tecnologia**: Spring Data JPA com banco de dados em memória H2.

### 3. Camada de Serviço (Service)
- **Função**: Contém a lógica de negócio, como validação de datas, cálculo de taxas e manipulação de dados.
- **Componentes**: 
  - Classe `TransferScheduleService`, que implementa métodos como `transfereAgendamento` e `getAllTransferencias`.
  - Validações específicas:
    - Data de transferência não pode ser anterior à data atual.
    - Intervalos de 1 a 10 dias não são permitidos para agendamento.
    - Cálculo de taxas baseado em intervalos de dias (0, 11-20, 21-30, 31-40, 41-50).
- **Tecnologia**: Spring Framework com injeção de dependências.

### 4. Camada de Controlador (Controller)
- **Função**: Expõe os endpoints RESTful para interação com o frontend.
- **Componentes**: 
  - Classe `TransfereAgendamentoController`, que define endpoints como:
    - `POST /api/transferencia`: Agenda uma nova transferência.
    - `GET /api/agendamentos`: Lista todas as transferências agendadas.
  - Trata exceções como `IllegalArgumentException` para retornar mensagens de erro ao cliente.
- **Tecnologia**: Spring Web MVC.

### 5. Camada de Configuração
- **Função**: Define configurações globais do sistema.
- **Componentes**: 
  - Classe `WebConfig` para configuração de CORS, permitindo requisições do frontend (ex.: `http://localhost:4200`).
- **Tecnologia**: Spring Configuration.

## Tecnologias Utilizadas
- **Java 11**: Linguagem de programação.
- **Spring Boot 2.7.18**: Framework para construção da aplicação.
- **Spring Data JPA**: Para persistência de dados.
- **H2 Database**: Banco de dados em memória para desenvolvimento.
- **Maven**: Gerenciamento de dependências.

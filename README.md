# Aplicação de Gerenciamento de Tarefas

## Visão Geral

Esta é uma aplicação de Gerenciamento de Tarefas desenvolvida em React, que permite aos usuários criar, editar e excluir tarefas. A aplicação utiliza componentes do Material-UI (MUI) para uma interface limpa e responsiva.

## Funcionalidades

- Criar novas tarefas
- Editar tarefas existentes
- Excluir tarefas
- Visualizar lista de todas as tarefas
- Categorizar tarefas por status e recurso
- Definir datas de início e fim para as tarefas

## Componentes

### ListarTarefa
- Componente principal que exibe uma tabela de tarefas
- Fornece botões para criar, editar e excluir tarefas
- Utiliza Modal para criar e editar tarefas

### CriarTarefa
- Formulário modal para criação de novas tarefas
- Permite inserir:
  - Título da tarefa
  - Descrição da tarefa
  - Data de início
  - Data de fim
  - Recurso
  - Status

### EditarTarefa
- Formulário modal para edição de tarefas existentes
- Preenche previamente o formulário com as informações atuais da tarefa selecionada
- Permite modificação de todos os detalhes da tarefa

## Tecnologias Utilizadas

- React
- Material-UI (MUI)
- React Hooks (useState, useEffect)

## Configuração Inicial

A aplicação vem com algumas tarefas iniciais para demonstrar funcionalidade:
- 6 tarefas predefinidas com diversos status e recursos
- Tarefas possuem IDs únicos, títulos, descrições, datas, status e recursos

## Gerenciamento de Estado

A aplicação utiliza React Hooks `useState` e `useEffect` para:
- Gerenciar a lista de tarefas
- Controlar estados de abertura/fechamento de modais
- Rastrear a tarefa atualmente selecionada para edição

## Primeiros Passos

1. Clone o repositório
2. Instale as dependências
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento
   ```
   npm start
   ```

## Melhorias Potenciais

- Adicionar validação de formulário
- Implementar armazenamento persistente (localStorage/backend)
- Adicionar capacidades de filtragem e ordenação
- Aprimorar tratamento de erros
- Implementar rastreamento de tarefas mais detalhado

## Licença

[Insira sua licença aqui]

## Contato

Renan Matheus Linhares Abrantes

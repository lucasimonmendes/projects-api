# API de Projetos Pessoais

![Linguagem mais utilizada](https://img.shields.io/github/languages/top/:nomedeusuario/:nomedorepositorio)
![Último commit](https://img.shields.io/github/last-commit/:nomedeusuario/:nomedorepositorio)
![README bem legal](https://img.shields.io/badge/readme-bem_legal-8A2BE2)

## Índice

- [**Introdução**](#introdução)
  - [Objetivos da API](#objetivos-da-api)
  - [Escopo da Documentação](#escopo-da-documentação)
- [**Recursos da API**](#recursos-da-api)
  - [Descrição Geral](#descrição-geral)
  - [Endpoints Disponíveis](#endpoints-disponíveis)
  - [Autenticação e Autorização](#autenticação-e-autorização)
- [**Exemplos de Solicitações e Respostas**](#exemplos-de-solicitações-e-respostas)
  - [Métodos HTTP](#métodos-http)
  - [Parâmetros de Solicitação](#parâmetros-de-solicitação)
  - [Formato de Resposta](#formato-de-resposta)
- [**Autenticação e Autorização**](#autenticação-e-autorização)
  - [Métodos de Autenticação Suportados](#métodos-de-autenticação-suportados)
  - [Como Obter Chaves de API](#como-obter-chaves-de-api)
  - [Exemplos de Fluxos de Autorização](#exemplos-de-fluxos-de-autorização)
- [**Status de Erro**](#status-de-erro)
  - [Códigos de Status HTTP](#códigos-de-status-http)
  - [Mensagens de Erro](#mensagens-de-erro)
  - [Resolução de Problemas Comuns](#resolução-de-problemas-comuns)
- [**Fluxos de Trabalho Típicos**](#fluxos-de-trabalho-típicos)
  - [Exemplos de Uso](#exemplos-de-uso)
  - [Sequências de Chamadas](#sequências-de-chamadas)
  - [Melhores Práticas](#melhores-práticas)

## Introdução

Api de Projetos Pessoais, utilizada em ferramentas e no portfólio.

### Objetivos da API

- [ ] Listar projetos e seus status, além dos links.

### Escopo da Documentação

Documentação de requisitos e do desafio.

## Recursos da API

### Descrição Geral

API com o objetivo de retornar
os projetos de portfólio e os
projetos pessoais tendo como modelo a api do Github

### Endpoints Disponíveis

- `projects/`
  Lista todos os projetos salvos na api.

- `projects/personal/`
  Lista todos os projetos pessoais salvos na api.

- `projects/personal/{id}`
  Lista projeto pessoal específico com os seus detalhes.

- `projects/portfolio/`
  Lista todos os projetos de portfolio salvos.

- `projects/portfolio/{id}`
  Lista projeto de portfólio específico com seus detalhes.

### Autenticação e Autorização

Provavelmente será via token jwt.

## Exemplos de Solicitações e Respostas

### Métodos HTTP

- **Métodos Get:**

  - Retorna os projetos em formato json.
  - Edpoints:
    - `projects/personal/{id}`
    - `projects/portfolio/{id}`

- **Método Post:**

  - Adiciona Projetos na API.
  - Endpoints:
    - `projects/personal/`
    - `projects/portfolio/`

- **Método Delete:**

  - Deleta projetos da API, via id.
  - Endpoints:
    - `projects/personal/{id}`
    - `projects/portfolio/{id}`

- **Método Put:**
  - Atualiza projetos na api, via id.
  - Endpoints:
    - `projects/personal/{id}`
    - `projects/portfolio/{id}`

### Parâmetros de Solicitação

### Formato de Resposta

Resposta em formato JSON, tendo como referência a API do Github.

- Formato da Resposta em JSON:

```json
{
  "sucesso": true,
  "mensagem": "Requisição bem-sucedida",
  "dados": {
    /* Dados específicos da resposta */
  }
}
```

- **sucesso:** Um indicador booleano que indica se a requisição foi bem-sucedida ou não.
- **mensagem:** Uma mensagem opcional que fornece informações adicionais sobre o resultado da requisição.
- **dados:** Um objeto contendo os dados específicos da resposta, como projetos, detalhes do projeto, etc.

- Exemplo de Sucesso:

```json
{
  "sucesso": true,
  "mensagem": "Lista de projetos recuperada com sucesso",
  "dados": [
    {
      "id": 1,
      "nome": "Projeto 1",
      "descricao": "Descrição do Projeto 1",
      "data_criacao": "2024-04-06",
      "status": "Em Andamento"
    },
    {
      "id": 2,
      "nome": "Projeto 2",
      "descricao": "Descrição do Projeto 2",
      "data_criacao": "2024-04-05",
      "status": "Concluído"
    }
  ]
}
```

- Exemplo de Erro:

```json
{
  "sucesso": false,
  "mensagem": "Projeto não encontrado",
  "dados": null
}
```

## Autenticação e Autorização

### Métodos de Autenticação Suportados

Autenticação via token jwt.

### Como Obter Chaves de API

### Exemplos de Fluxos de Autorização

## Status de Erro

### Códigos de Status HTTP

- **400 Bad Request**: A solicitação do cliente é inválida.
- **401 Unauthorized**: A solicitação não foi autorizada devido à falta de autenticação.
- **403 Forbidden**: O acesso ao recurso é proibido.
- **404 Not Found**: O recurso solicitado não foi encontrado.
- **405 Method Not Allowed**: O método HTTP usado não é suportado para o recurso especificado.
- **500 Internal Server Error**: Erro genérico no servidor.
- **503 Service Unavailable**: O servidor está temporariamente incapaz de processar a solicitação.

### Mensagens de Erro

A API pode retornar as seguintes mensagens de erro em resposta a solicitações inválidas ou falhas no processamento:

- **400 Bad Request**:
  - "Parâmetros inválidos: {detalhes adicionais}"
  - "Algum campo obrigatório está ausente"
- **401 Unauthorized**:
  - "Autenticação necessária. Por favor, forneça credenciais válidas."
  - "Token de acesso inválido ou expirado"
- **403 Forbidden**:
  - "Você não tem permissão para acessar este recurso"
  - "Acesso negado devido a políticas de segurança"
- **404 Not Found**:
  - "O recurso solicitado não foi encontrado"
  - "Não existe nenhum projeto com o ID especificado"
- **405 Method Not Allowed**:
  - "O método HTTP especificado não é permitido para este recurso"
  - "Use um método diferente para esta solicitação"
- **500 Internal Server Error**:
  - "Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde."
  - "Falha ao processar a solicitação devido a um erro no servidor"
- **503 Service Unavailable**:
  - "O serviço não está disponível no momento devido a manutenção. Por favor, tente novamente mais tarde."
  - "O servidor está sobrecarregado no momento e não pode processar sua solicitação"

### Resolução de Problemas Comuns

## Fluxos de Trabalho Típicos

### Exemplos de Uso

### Sequências de Chamadas

### Melhores Práticas

# AgilStore – Sistema de Gerenciamento de Produtos

## 1. Visão Geral do Projeto
O projeto AgilStore consiste no desenvolvimento de uma aplicação em Node.js, executada via terminal, voltada para o gerenciamento de inventário de uma loja de eletrônicos.

A solução foi criada para substituir controles manuais em planilhas, que são suscetíveis a erros, baixa escalabilidade e dificuldade de manutenção, oferecendo uma alternativa automatizada, organizada e persistente.

---

## 2. Objetivo
O objetivo do projeto é demonstrar capacidade de:
- estruturar uma solução funcional a partir de um problema real;
- aplicar lógica de programação e controle de fluxo;
- organizar código de forma clara e reutilizável;
- garantir persistência de dados;
- pensar em escalabilidade e evolução do sistema.

---

## 3. Funcionalidades Implementadas
A aplicação implementa um CRUD completo (Create, Read, Update, Delete), incluindo:

### Adicionar Produto
Permite o cadastro de novos produtos, solicitando nome, categoria, quantidade em estoque e preço. Cada produto recebe um identificador único gerado automaticamente.

### Listar Produtos
Exibe todos os produtos cadastrados em formato tabular no terminal, facilitando a visualização e conferência do inventário.

### Atualizar Produto
Permite a atualização seletiva de produtos existentes por meio do ID, mantendo os valores anteriores caso o usuário não deseje alterá-los.

### Excluir Produto
Remove produtos do inventário a partir do ID informado, garantindo a atualização do arquivo de persistência.

### Buscar Produto
Permite a busca de produtos por ID ou por parte do nome, exibindo os dados completos dos itens encontrados.

---

## 4. Persistência de Dados
Os dados são armazenados em um arquivo JSON (`produtos.json`), utilizando o módulo nativo `fs` do Node.js.

Essa abordagem garante:
- preservação dos dados após o encerramento da aplicação;
- simplicidade de leitura e manutenção;
- independência de banco de dados externo para o escopo atual do projeto.

---

## 5. Decisões Técnicas
O projeto foi desenvolvido utilizando apenas JavaScript e módulos nativos do Node.js, sem frameworks externos, com o objetivo de demonstrar domínio dos fundamentos da linguagem e da plataforma.

O uso do módulo `readline` permite interação direta via terminal, simulando sistemas administrativos internos comuns em ambientes corporativos.

A organização do código prioriza:
- separação entre utilidades, menu e regras de negócio;
- funções coesas e bem definidas;
- fluxo de navegação controlado, retornando ao menu principal após cada operação.

---

## 6. Atendimento aos Requisitos do Enunciado
- Adição de produtos com ID automático ✔
- Listagem completa do inventário ✔
- Atualização de produtos existentes ✔
- Exclusão de produtos por ID ✔
- Busca por ID ou nome ✔
- Persistência de dados em JSON (requisito extra) ✔

---

## 7. Possibilidades de Evolução
O projeto foi estruturado para permitir futuras expansões, tais como:
- integração com banco de dados relacional ou NoSQL;
- criação de interface web ou desktop;
- autenticação de usuários e níveis de acesso;
- relatórios de estoque e alertas de baixo inventário;
- integração com sistemas de vendas ou APIs externas.

---

## 8. Considerações Finais
O AgilStore demonstra a capacidade de transformar um problema prático em uma solução funcional, organizada e extensível, servindo como base para aplicações mais robustas em contextos reais de negócio.

# 📘 Projeto de Automação de Testes com Cypress

Este repositório contém os testes automatizados end-to-end desenvolvidos com Cypress para o e-commerce **Swag Labs**.  
O objetivo é validar alguns cenários dos fluxos de compra de forma automatizada.

---

## ✅ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) 

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/sergiosgrisante/SwagLabs.git
cd SwagLabs
```

2. Instale as dependências (recomendado usar npm):

```bash
npm install

```
3. Instale o Cypress Versão 14.0.3

```bash
npm install cypress@14.0.3 --save-dev
```


---

## 🚀 Executando os Testes

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Para rodar os testes no terminal (modo headless):

```bash
npx cypress run

## 📂 Estrutura de Pastas

```
cypress/
├── downloads/    # Arquivos baixados durante os testes
├── e2e/          # Testes automatizados (specs)
├── fixtures/     # Dados estáticos simulados (ex: JSON)
├── support/      # Comandos customizados e configuração global
```

---

## ⚙️ Outras Configurações

- O arquivo de configuração principal está em `cypress.config.js`
- As URLs base e outros ajustes podem ser definidos lá ou via variáveis de ambiente
- Logs, capturas de tela e outras integrações podem ser adicionadas conforme necessário

---

## 👨‍💻 Desenvolvedor

- Sérgio Grisante

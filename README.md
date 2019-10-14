# Descrição

API Rest desenvolvida exclusivamente para o teste de seleção da Incodde.

## Instruções de execução

- `npm install`

#### Credenciais para banco de dados

Crie o arquivo `.env` de acordo com o `.env.example` preenchendo as credenciais do banco
Ou use as que já estão setadas:

- Banco (DB_NAME): `test`
- Usuário (DB_USER): `test`
- Senha (DB_PASSWORD): `test`

#### Gerar migrations do sequelize

- `sequelize-cli db:migrate`

#### Iniciar aplicação

- `npm start`

## About The Project

This is a REST API created for serving a <b>To Do List</b> application. It was used as a test in a selection process.

### Build With

*  Node
*  Express
*  MySQL
*  Sequelize

## Getting Started

This is an example of how you can run the project locally.

### Instalation

1. Clone the repo
```sh
git clone https://github.com/ebarross/todo-app-api.git
```

2. Install NPM packages
```sh
npm install
```

3. Create `.env` from `.env.example` inserting the database credentials
```sh
DB_NAME=test
DB_USER=test
DB_PASSWORD=test
```

4. Generate Sequelize migrations
```sh
sequelize-cli db:migrate
```

### Running

```sh
npm start
```

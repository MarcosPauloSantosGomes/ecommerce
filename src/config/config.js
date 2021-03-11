// DEFINE A CONEXÃO COM O BANCO DE DADOS

module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'root',
            password: '250802'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
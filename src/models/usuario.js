// DEFINE A UTILIZAÇÃO DO SEQUELIZE

const Sequelize = require('sequelize');

// OBTEM CONEXÃO ENTRE SEQUELIZE E BANCO DE DADOS MYSQL

const sequelize = require('../database/database.js');

// CRIA TABELA NO BD E SEUS CAMPOS

const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});

module.exports = Usuario;
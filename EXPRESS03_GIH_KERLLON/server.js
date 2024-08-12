//criar uma quiry(consulta) simple
const express =  require('express');
const mysql = require('mysql2');
const { Connection } = require('mysql2/typings/mysql/lib/Connection');

const app = express();

app.listen(3000, ()=>{
    console,log("servidor em execução");
})

//criação da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user:'user_bd_tasks',
    password:'QLOP4TDcQGB2R97Djet7vXYHggatTSZE4',
    database:'nodejs_tasks'
})

//testar conexão

connection.connect(error =>{
    if(error){
        console.log('Erro na conexão ao MySql:'+error.message)
        return
    }
    console.log('Conexão realizada com sucesso')
})

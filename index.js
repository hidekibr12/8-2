/*configurações do servidor*/
// carregar o módulo express
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em htpp://localhost:3050")
})
/* configurações do servidor - fim*/

/* configuração do banco de dados - inicio */
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:kogama2005@fiaptecnico.6rxza.mongodb.net/?retryWrites=true&w=majority')
}

/*configuração do banco de dados - fim */

/* rota para requisão / */
app.get('/',(req,res)=>{
    conexao()
    //res.send('Funcionando')
    res.render('index.ejs',{nome:"Alunos feiosos",turma:"2EMIA",disciplina:"LP2"})
})
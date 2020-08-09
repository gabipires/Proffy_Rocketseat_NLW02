//Servidor

const express = require('express')
const server = express()
//require('express')() -> refatoramos, atribuindo a variáveis

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração dos Servidor
server

//receber os dados do req body, invés de receber pelo req.query (mostra os dados na url)
.use(express.urlencoded({ extended:true }))

// estamos configurando o servidor para que ele enxergue a pasta public, arquivos estáticos
.use(express.static("public")) 

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//Start do Servidor
.listen(5500)
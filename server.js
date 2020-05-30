// Importando dependencias
const express = require('express') // Express vai nos ajudar a construir um servidor enxuto
const nunjucks = require('nunjucks') // Template engine para reuso de codigo
const videos = require('./data') // Importando algo que nao esta no node_modules. Importando o array de dados para usar em classes.njk
const courses = require('./data2') // Importando algo que nao esta no node_modules. Importando o array de dados para usar em content.njk

// Armazenando a funcao express em server
const server = express()

// Configurando o express para usar arquivos estaticos da pasta public
server.use(express.static('public'))

// Configuracao da template engie nunjucks (njk sao arquivos do nunjucks)
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false, // Permite mandar html por variavel
    noCache: true
})

// Rotas
server.get('/', function (req, res) {
    
    const data_index = {    // Outra maneira de simular um servidor fronecendo dados
        avatar_url: "https://avatars2.githubusercontent.com/u/62068773?s=460&u=46d1fb5d480e4c6b50312d35c6dc524267bc4d95&v=4",
        name: "Pedro Afonso",
        role: "Full Stack Developer",
        description: 'Web and Mobile Developer looking for new challanges. Want to see my work? <a target="_blank" href="https://github.com/pedroafonso23">GitHub',
        links: [
            { name: "Facebook", url: "https://www.facebook.com/pedroafonso.ferraz.7/" }, 
            { name: "LinkedIn", url: "https://www.linkedin.com/in/pedroafonsoferraz/" }, 
            { name: "Instagram", url: "https://www.instagram.com/pedroafonsocfl/?hl=pt-br" }
        ]
    }

    return res.render('index', { data_index }) // Quando a chave eh igual ao valor em um objeto em JS, pode simplificar assim
})

server.get('/classes', function (req, res) {
    return res.render('classes', {items: videos} ) // Enviando os dados de data.js para classes.njk usar
})

server.get('/about', function (req, res) {

    const data_about = {
        img_src: "data:image/jpeg;base64,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",
        name: "RocketSeat",
        designation: "Coding School",
        description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        links: [
            { name: "GitHub", url: "https://github.com/pedroafonso23" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/pedroafonsoferraz/" },
            { name: "Instagram", url: "https://www.instagram.com/pedroafonsocfl/?hl=pt-br" }
        ]
    }

    return res.render('about', { data_about })
})

server.get('/content', function (req, res) {
    return res.render('content', { items: courses }) // Enviando os dados de data.js para content.njk usar
})

// Usando query string para front requisitar o id do video para o back que vai enviar por url
server.get('/video', function (req, res) {
    const id = req.query.id; // A variavel id recebe o que vier depois de ?id= na url

    const video = videos.find(function(video) { // Metodo find vai varrer o array videos e executar a function para cada elemento
        return video.id == id // Aqui vai retornar true ou false. Se os ids forem iguais, retorna true e armazana o id na variavel video
    })

    // Se nao encontrou o id do video:
    if (!video) {
        return res.send('Video not found!')
    }
    
    // Se encountrou o id do video, renderiza a pagina video com o video correspondente 
    return res.render('video', { item: video })
})

// Usando route params para trocar info entre back e front end
server.get('/course/:id', function (req, res) {
    const id = req.params.id // id vai receber o que vier depois de /course/ na url

    const course = courses.find(function(course) {
        return course.id == id
    })
    
    if (!course) {
        return res.send('Course not found!')
    }

    return res.render('course', { item: course })
})

// Para capturar requisicao do erro 404, add depois de todas as rotas:
server.use(function (req, res) {
    res.status(404).render("not-found")
})

// Servidor ouvindo porta 5000 e callback function 
server.listen(5000, function () {
    console.log('Server is running')
})
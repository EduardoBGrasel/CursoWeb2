const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrino
fs.readFile(caminho, 'utf-8', (err, cont) => {
    const config = JSON.parse(cont)
    console.log(config.db.host)
})
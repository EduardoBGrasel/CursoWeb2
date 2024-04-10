function tratarErro(e) {
    throw new Error('...')
}

function imprimir_nome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e) {
        tratarErro(e) 
    }
    
}

const obj = {nome: 'dudu'}

imprimir_nome(obj)
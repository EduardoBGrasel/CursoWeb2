function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promisse')
            resolve('vishhh')
        }, tempo)
    })
}


esperarPor(3000)
    .then(text => console.log(text))
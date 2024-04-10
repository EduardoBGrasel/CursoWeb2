function falarDepoisDe(segundos, text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, segundos*1000)
    })
}

falarDepoisDe(3, 'assim')
    .then(frase => frase.concat('!?!?'))
    .then(outraFrase => console.log(outraFrase))

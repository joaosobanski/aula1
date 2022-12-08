const fs = require('fs');

console.log('Olá, ')

console.log('Irei carregar as informações contidas no arquivo exemplo.txt')

console.log('Aguarde um momento ...')

fs.readFile('./exemplo.txt', (err, data) => {
    if (err)
        console.error(err.message)
    if (data)
        console.log(String(data))
})

console.log('Obrigado por esperar! e até a próxima.')

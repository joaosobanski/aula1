const fs = require('fs');

const readFile = path => new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            rej(err)
        }
        if (data)
            res(String(data))
    })
})

async function main() {
    console.log('Olá, ')

    console.log('Irei carregar as informações contidas no arquivo exemplo.txt')

    console.log('Aguarde um momento ...')

    await readFile('./exemplo.txt')
        .then(data => console.log(data))
        .catch(err => console.error(err.message))

    console.log('Obrigado por esperar! e até a próxima.')
}

main()

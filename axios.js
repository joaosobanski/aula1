const axios = require('axios');
const apiBinance = 'https://api1.binance.com/api/v3/exchangeInfo';
async function main() {
    try {
        console.log('Olá, ')
        console.log('Irei trazer a lista de moedas que são possiveis de comprar' +
            ' a partir do BRL(Real Brasileiro) na corretora Binance.')
        console.log('Aguarde um momento ...')

        const assets = await axios.get(apiBinance).then(res => {
            return res.data.symbols
        }).catch(err => {
            throw (err)
        })

        const moedas = assets.filter(e => e.quoteAsset === 'BRL')
            .map(e => { return e.baseAsset })
        console.log(`Moedas Listadas com paridade ao BRL são: ${moedas}`)
    } catch (err) {
        console.error(`Falha na requisição: ${err.message}`)
    } finally {
        console.log('Obrigado por esperar! e até a próxima.')
    }
}
main()

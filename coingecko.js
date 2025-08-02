async function buscarPrecosUSD() {
    try {
        const resposta = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron,usd&vs_currencies=usd');
        const dados = await resposta.json();

        const precoTRX = dados.tron.usd;
        const precoUSD = dados.usd.usd; // Isso será sempre 1, pois é USD para USD

        console.log(`TRX: US$ ${precoTRX.toFixed(4)}`);
        console.log(`Dólar: US$ ${precoUSD.toFixed(2)}`);
    } catch (erro) {
        console.error('Erro ao buscar preços:', erro);
    }
}

buscarPrecosUSD();
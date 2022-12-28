async function converterAPI () {
    const API = 'https://api.adviceslip.com/advice';
    const conselho = await fetch(API);
    const conselhoConvertido = await conselho.json();

    console.log(conselhoConvertido)
}

converterAPI()
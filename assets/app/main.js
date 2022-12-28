const btn = document.querySelector('[data-btn]');

    async function buscarConselho () {
        const API = 'https://api.adviceslip.com/advice';
        const conselho = await fetch(API);
        const conselhoConvertido = await conselho.json();

            escreverConselho(conselhoConvertido);

            return conselhoConvertido;
    }

    function escreverConselho(objConselho) {
        const num = document.querySelector('[data-num]');
        const conselho = document.querySelector('[data-advice]');

            num.innerHTML = objConselho.slip.id;
            conselho.innerHTML = objConselho.slip.advice;
    }

            btn.addEventListener('click', () => buscarConselho())

            
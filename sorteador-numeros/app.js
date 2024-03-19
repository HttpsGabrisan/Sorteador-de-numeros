function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    //Resolve erro de número minimo maior
    if (de >= ate){
        alert('ERRO: O número minimo é maior que o máximo!');
        return;
    }

    //Resolve erro de quantidade maior que intervalo
    if ((ate - de + 1) < quantidade){
        alert('ERRO: A quantidade de números é maior que o intervalo selecionado!');
        return;
    }

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            if ((ate - de + 1) > quantidade){
                alert('ERRO: A quantidade de números é maior que o intervalo selecionado!');
            }
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}   

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math. random() * (max - min + 1)) + min;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{ 
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
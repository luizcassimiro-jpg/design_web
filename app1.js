/*Processamento/Armazenamento */
let hoje = new Date();
/*Entradas*/
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
/*Saídas*/
const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario");


/*Passo a passo*/
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, data_nasc.getMonth(), data_nasc.getDate());
    let data_formatada = `${hoje.getDay()}/${hoje.getMonth()+1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_formatada}`;
    if (data_aniv > hoje){

        let dif = data_aniv.getMonth()-hoje.getMonth();

        aniversario.innerHTML = `Diferença de hoje para aniv ${dif}`;
    }else{
        aniversario.innerHTML = `Diferença de hoje para aniv ${hoje - data_aniv}`;
    }

    cadastro.reset();
});
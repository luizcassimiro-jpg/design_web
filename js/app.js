var nasc = 2009;
let nome = "Yego";
const viva = true;

function calcIdade(ano){
    let Idade = ano - nasc;
    alert (`Dentro de função - Idade ${Idade}`)
    return Idade;
}

calcIdade();
alert(`Fora da função : Idade ${calcIdade(Idade)}`);
alert(`Fora da função : chamando calcIdade ${calcIdade()}`)
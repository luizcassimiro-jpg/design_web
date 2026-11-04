//Processamento
//Entrada
const cadastro = document.getElementById("cadastro");
const tarefa = cadastro.tarefa;
//Saida
const lista = document.getElementById("lista");
//evento
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    const item = document.createElement("li"); //cria novo item de lista
    item.textContent = tarefa.value;    //altera texto do li

    const remover = document.createElement("button");
    remover.textContent = "Remover";

    remover.addEventListener("click", function(v){
        v.preventDefault();
        item.remove();
    })
    item.append(' ', remover);

    lista.append(item);   //adiciona o item na lista existente

    cadastro.reset();    //reseta o formulário
})
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //função para não ocorrer a ação padrão do html, nesse caso a tag form(recarregar e limpar campos)//

    var form = document.querySelector("#form-adiciona");
 
    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return; // com esse return ele sai da função sem chegar na parte de adicionar paciente na tabela
    }
   
    adicionaPacienteNaTabela(paciente);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes"); //adicionando paciente na tabela
    tabela.appendChild(pacienteTr);
};

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";


    erros.forEach(function(erro){  //para cada item do array, executa a funçao
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value, //pegando os dados do paciente no form html// //o value para selecionar os valores do form//
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); //criando um tr//
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td"); //criando os td's//
   
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //colocando os td's dentro do tr//
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function validaPaciente(paciente){

    var erros = []; //array para mostrar mais de uma mensagem. ex: peso e altura inválidos
    if(paciente.nome.length == 0) erros.push("O nome não pode estar em branco");

    // quando um if é simples, vc pode colocar tudo em uma linha q o js entende. if isso -> faz isso = uma linha só
    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido");
    
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");

    if(paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco");
    
    if(paciente.peso.length == 0) erros.push("O peso não pode estar em branco");

    if (paciente.altura.length == 0) erros.push("A altura não pode estar em branco");
    
    return erros;
}
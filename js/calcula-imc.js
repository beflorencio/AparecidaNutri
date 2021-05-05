 /*colocar o script no html no final do body pois assim ele consegue ler toda a pagina, ja que é lido de cima p baixo*/
 var titulo = document.querySelector(".titulo");
 titulo.textContent = "Aparecida Nutricionista";

 var pacientes =  document.querySelectorAll(".paciente");

 for(var i = 0; i < pacientes.length; i++){
 
    var paciente = pacientes[i];
     
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; //textContent para pegar o conteúdo do td(index)

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso Inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura Inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
 }

function validaPeso(peso){
     if(peso >=0 && peso < 1000){
         return true;
     }else{
         return false;
     }
    }

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}
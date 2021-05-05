var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){   //esmaecer c js 
        event.target.parentNode.remove(); 
    },500);
    //-----  esse codigo também poderia ficar assim
    /*var alvoEvento = event.target; 
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();*/
});
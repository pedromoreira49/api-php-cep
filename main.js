window.onload = function(){
        let cep=document.getElementById("cep")
        cep.addEventListener("blur",carregaAjax)
        
}

function loadApi(event){
        let cep = document.querySelector('input').value;
        var dados = JSON.parse(this.responseText);
        console.log(dados);
}

function carregaAjax(event){
        const ajax = new XMLHttpRequest();
        ajax.addEventListener("load", loadApi);
        ajax.open('GET', 'https://viacep.com.br/ws/'+this.value+'/json');
        ajax.send();
}
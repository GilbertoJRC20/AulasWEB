function cor_fundo(cor){
    document.body.style.background = cor;
}
 
 
function showText(){
    par = document.getElementById('p-ex2a');
    b = document.getElementById('b-ex2a');
   
    if(par.style.display=="none"){
        par.style.display = "block";
        b.value = "ocultar";
    }else{
        par.style.display = "none";
        b.value="mostrar";
    }
}
 
function fillText(){
    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur officiis quae quisquam saepe, aliquam temporibus expedita nemo? Similique officiis eos voluptate molestias esse illo iste alias sint nesciunt ad.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, sequi ut. Quidem alias sunt fugiat ratione magni, officiis sequi, ipsam amet commodi veniam illo delectus. Labore cupiditate vel explicabo cum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ut asperiores aliquam nesciunt eos eligendi aliquid commodi sed, quod perspiciatis optio ipsam accusantium temporibus qui corrupti distinctio odio fugit molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores dignissimos, quisquam, ratione nesciunt nemo voluptatem necessitatibus optio esse accusantium cumque consectetur repellat maiores ut corporis itaque magni impedit? Necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, excepturi cupiditate architecto assumenda maxime corrupti obcaecati praesentium veniam cum animi beatae maiores fugit dolor quos distinctio odit, eos accusantium dignissimos."
    par = document.getElementById('p-ex2a');
    b=document.getElementById('b-ex2a');
 
    if(par.textContent.length == 0){
        par.innerText = texto;
        b.textContent = "APAGAR";
    }else{
        par.innerText = "";
        b.textContent = "PREENCHER";
    }
}
 
function visibilidadeFrase(){
    frase = document.getElementById('frase')
    frase.style.display = "none";
}
 
function aumentar(){
    document.getElementById('p-ex4').style.fontsize= "80 px"
    document.getElementById('p-ex4').style.textAlign= "center"
}
 
function diminuir(){
    document.getElementById('p-ex4').style.fontsize= "10 px"
    document.getElementById('p-ex4').style.textAlign= "right"
}
 
function alterarTamanho(tamanho,alinhamento){
    document.getElementById('p-ex4').style.fontsize= tamanho
    document.getElementById('p-ex4').style.fontsize= alinhamento
}
 
function mudarTamanho(){
    par = document.getElementById('p-ex4')
    novoTam= par.style.fontsize.value
    alert(novoTam)
    document.getElementById('p-ex4').style.fontsize
}
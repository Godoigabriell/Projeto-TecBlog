/*  Metodo com getElementsByClassName precisa falar a posição porque vem como um vetor [0][1][3] e etc  */




//// *Pagina Home

/// Primeiro texto
function leiamais(){
    var pontos=document.getElementById("pontos");
    var maistexto=document.getElementById("mais");
    var Linkleiamais=document.getElementById("Linkleiamais");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 
/// Segundo texto
function leiamais_(){
    var pontos=document.getElementById("pontos_");
    var maistexto=document.getElementById("mais_");
    var Linkleiamais=document.getElementById("Linkleiamais_");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

//// *FINAL Pagina Home


/// *Começo Pagina Jogos

/// Primeiro texto
function leiamaisJ(){
    var pontos=document.getElementById("pontosj");
    var maistexto=document.getElementById("maistextoj");
    var Linkleiamais=document.getElementById("leiamaisj");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

/// Segundo texto
function leiamaisJJ(){
    var pontos=document.getElementById("pontosJJ");
    var maistexto=document.getElementById("maistextoJJ");
    var Linkleiamais=document.getElementById("leiamaisjj");
    var tituloJJ=document.getElementById("tituloJJ");
    var tituloJJQ=document.getElementById("tituloJJQ");
    var maistextoJJQ=document.getElementById("maistextoJJQ");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        maistextoJJQ.style.display="none";
        tituloJJ.style.display="none";
        tituloJJQ.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        maistextoJJQ.style.display="inline";
        tituloJJ.style.display="block";
        tituloJJQ.style.display="block";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 


/// Terceiro texto
function leiamaisJJJ(){
    var pontos=document.getElementById("pontosJJJ");
    var maistexto=document.getElementById("maistextoJJJ");
    var Linkleiamais=document.getElementById("leiamaisjjj");


    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

/// final Pagina Jogos



/// *Começo Pagina celulares

/// Primeiro texto

function leiamaisc(){
    var pontos=document.getElementById("pontosc");
    var maistexto=document.getElementById("maistextoc");
    var Linkleiamais=document.getElementById("leiamaisc");
    var listac=document.getElementById("listac");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
        listac.style.display="none";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        listac.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

/// Segundo texto

function leiamaiscc(){
    var pontos=document.getElementById("pontoscc");
    var maistexto=document.getElementById("maistextocc");
    var Linkleiamais=document.getElementById("leiamaiscc");
    var listac=document.getElementById("listacc");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
        listac.style.display="none";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        listac.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

/// Terceiro texto

function leiamaisccc(){
    var pontos=document.getElementById("pontosccc");
    var maistexto=document.getElementById("maistextoccc");
    var Linkleiamais=document.getElementById("leiamaisccc");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

/// *FIM Pagina celulares



/// *Começo Pagina informatica


/// Primeiro texto

function leiamaisi(n){
    var pontos=document.querySelector('.pontosi'+n);
    var maistexto=document.querySelector('.maistextoi'+n);
    var maistextoi=document.querySelector('.maistextoii'+n);
    var Linkleiamais=document.querySelector('.leiamaisi'+n);
    var lista=document.querySelector('.listai'+n)

    if(maistexto.style.display === "none"){
        pontos.style.display="none";
        maistexto.style.display="inline";
        maistextoi.style.display="inline";
        lista.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";;
    }else{
        pontos.style.display="inline";
        maistexto.style.display="none";
        maistextoi.style.display="none";
        lista.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }
} 

/// Segundo texto

function leiamaisii(n){
    var pontos=document.querySelector('.pontosi'+n);
    var maistexto=document.querySelector('.maistextoi'+n);
    var Linkleiamais=document.querySelector('.leiamaisi'+n);
    var lista=document.querySelector('.listaii'+n)

    if(maistexto.style.display === "none"){
        pontos.style.display="none";
        maistexto.style.display="inline";
        lista.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";;
    }else{
        pontos.style.display="inline";
        maistexto.style.display="none";
        lista.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }
} 

/// Terceiro texto

function leiamaisiii(n){
    var pontos=document.querySelector('.pontosi'+n);
    var maistexto=document.querySelector('.maistextoi'+n);
    var maistextoi=document.querySelector('.maistextoii'+n);
    var Linkleiamais=document.querySelector('.leiamaisi'+n);
    var lista=document.querySelector('.listaii'+n)

    if(maistexto.style.display === "none"){
        pontos.style.display="none";
        maistexto.style.display="inline";
        maistextoi.style.display="inline";
        lista.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";;
    }else{
        pontos.style.display="inline";
        maistexto.style.display="none";
        maistextoi.style.display="none";
        lista.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }
} 

/// *Fim Pagina informatica



/// *Começo Pagina Eletronicos

function leiamaise(n){
    var pontos=document.querySelector('.pontose'+n);
    var maistexto=document.querySelector('.maistextoe'+n);
    var Linkleiamais=document.querySelector('.leiamaise'+n);

    if(maistexto.style.display === "none"){
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";;
    }else{
        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia Mais";
    }
} 

/// *FIM Pagina Eletronicos

/* 

Metodo Com ID

 function leiamais(){
    var pontos=document.getElementById("pontos");
    var maistexto=document.getElementById("mais");
    var Linkleiamais=document.getElementById("Linkleiamais");

    if(pontos.style.display === "none"){

        pontos.style.display="inline";
        maistexto.style.display="none";
        Linkleiamais.innerHTML="Leia mais";
    }else{
        pontos.style.display="none";
        maistexto.style.display="inline";
        Linkleiamais.innerHTML="Leia Menos";
    }
} 

*/



//Comando inicial do Jquery//

$(document).ready(function(){ //Função generica, não necessita de nome//
    $("#barras").click(function(){
        if($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")
        }
    })
  })

//Comandos js//
// function mostrarmenu ($event){ //Ao clicar aciona o menu barras e aparece o Menu//
//     let menu= document.getElementById("menu")
    
    //Mudar visualização do menu//

//   if (getComputedStyle(menu).display == "none"){ //Aparecer/ Fechar menu ao clicar//
//     menu.style.display = "flex" 
//   }else{

//     menu.style.display = "none" 
//   } 

//     event.preventDefault()

// }
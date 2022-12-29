

$(document).ready(function(){  //Comando inicial do Jquery//

    //Comando para carrossel//
    
    let slideAtual = 1
    let listaSlides = ["banner-fifa", "banner-zelda", "banner-lol"]
  
    setInterval(mudarSlide, 5000)
  
    function mudarSlide(){
        //remover slide anterior
        if(slideAtual > 0){
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        }else{
            $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
        }      
        
  
        //exibir slide atual
        $("#carrossel").addClass(listaSlides[slideAtual])
  
        //indicar qual slide atual
        console.log("Slide atual é", slideAtual)
        slideAtual ++
  
        if(slideAtual > listaSlides.length - 1){
            slideAtual = 0
        }
  
    }


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
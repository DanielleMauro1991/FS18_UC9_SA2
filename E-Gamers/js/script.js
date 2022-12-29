//alert("Arquivo externoo");//

function mostrarmenu ($event){ //Ao clicar aciona o menu barras e aparece o Menu//
    let menu= document.getElementById("menu")
    
    //Mudar visualização do menu//
  if (getComputedStyle(menu).display == "none"){
    menu.style.display = "flex" 
  }else{

    menu.style.display = "none" 
  } 

    event.preventDefault()

}
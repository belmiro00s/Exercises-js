function carregar() {
  var msg = window.document.querySelector("div#msg_div");
  var img = window.document.querySelector("img#imagem");

  var data = new Date();
  var hora = data.getHours();
  
  //var tittle = window.document.querySelector("h1#h1tittle")

  //msg.innerHTML = `Agora sao ${hora} horas `;

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "/Aula 12/Ex.02/imagens/manha.foto.jpg";
    document.body.style.background = "#e2cd9f";
    msg.innerHTML = `Bom dia, agora sao ${hora} horas `;

  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = "/Aula 12/Ex.02/imagens/tarde.foto2.jpg";
    document.body.style.background = "#b9846f";
    msg.innerHTML = `Boa Tarde, agora sao ${hora} horas `;

   
  } else {
    //boa noite
    img.src = "/Aula 12/Ex.02/imagens/noite.foto2.jpg";
    document.body.style.background = "#515154";
    msg.innerHTML = `Boa Noite, agora sao ${hora} horas `;


  }
}

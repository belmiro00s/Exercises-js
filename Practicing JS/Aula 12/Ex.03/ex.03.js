// Seleciona o elemento de botão com o ID "button_id"
var button = document.querySelector("input#button_id");

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener("click", buttoninput);

// Função a ser executada quando o botão é clicado
function buttoninput() {
  // Seleciona o elemento de div com o ID "res" para exibir os resultados
  var res = document.querySelector("div#res");
  
  // Obtém a data atual
  var data = new Date();
  var ano = data.getFullYear();
  
  // Seleciona o elemento de input com o ID "textano" para o ano de nascimento
  var anonasc = document.querySelector("input#textano");

  // Verifica se o campo de ano de nascimento está vazio ou se contém um valor inválido
  if (anonasc.value.length == 0 || anonasc.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    // Obtém a lista de elementos de input com o nome "radsex" (gênero)
    var fsex = document.getElementsByName("radsex");
    
    // Calcula a idade subtraindo o ano de nascimento do ano atual
    var idade = ano - Number(anonasc.value);
    
    // Cria uma string vazia para armazenar o gênero
    var genero = "";
    
    // Cria um elemento de imagem
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
  }

  // Verifica qual opção de gênero (Homem) está selecionada
  if (fsex[0].checked) {
    genero = "Homem";

    // Determina a imagem com base na idade
    if (idade >= 0 && idade < 10) {
      img.setAttribute('src',  'imagens/bebe.M.jpg')
    } else if (idade < 30) {
      img.setAttribute('src',  'imagens/jovem.M.jpg')
    } else if (idade > 30 && idade < 50) {
      img.setAttribute('src',  'imagens/adulto.jpg')
    }  else {
      img.setAttribute('src',  'imagens/Idoso.M.jpg')
    } 
  } 
  
  // Verifica qual opção de gênero (Mulher) está selecionada
  else if (fsex[1].checked) { 
    genero = "Mulher";

    // Determina a imagem com base na idade
    if (idade >= 0 && idade < 10) {
      img.setAttribute('src',  'imagens/bebe.F.jpg')
    } else if (idade < 30) {
      img.setAttribute('src',  'imagens/Jovem.F.jpg')
    } else if (idade > 30 && idade < 50) {
      img.setAttribute('src',  'imagens/adulta.jpg')
    }  else if (idade >= 50) {
      img.setAttribute('src',  'imagens/idosa.F.jpg')
    }
  }
  
  // Define o alinhamento do texto no resultado para o centro
  res.style.textAlign = 'center';
  
  // Exibe as informações sobre gênero e idade
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  
  // Adiciona a imagem ao resultado, se ela foi criada
  if (img){
    res.appendChild(img);
  }
}
var tabu = document.querySelector("select#tab");
var numero = document.querySelector("input#numeros");
var res = document.querySelector("div#result");
let analy = []


function addnumber() {
  if ((numero.value > 100) || (numero.value == 0)) {
    window.alert("insira um numero válido");
  } else {
    let item = document.createElement("option"); //criando o elemento option
    item.text = numero.value;                    //elemento item recebe numero inserido
    tabu.appendChild(item);                      // adicionando o elemento item ao elemento select
    item.innerHTML = `  ${numero.value} adicionado ` // adicionando o numero inserido dentro de item 
    analy.push(numero.value) // inserindo o numero que foi dado dentro da variavel composta analy
  
    
    console.log(analy)
    
    numero.value = ""
  }

  

}


function finish() {

  var countnumberlist = analy.length
  let sum = 0

  if(analy.length == 0 ){
    window.alert("Adicione primeiro um numero na lista")
  }else{


  

  let largest = analy.reduce(function (a, b) { // reduzindo todos os valores em um unico valor, ou nesses 2 parametros
    return (a > b) ? a : b     //aqui compara quem tem o maior valor 
  })

  let smaller = analy.reduce(function (a, b) { // reduzindo todos os valores em um unico valor, ou nesses 2 parametros
    return (a < b) ? a : b     //aqui compara quem tem o menor valor 
  })

  for (let i = 0; i < analy.length; i++) {

    let number = parseFloat(analy[i])

    sum += number
  }

  var medias = (sum / analy.length)



  var resultText = `A soma de todos os valores é: ${sum}<br>`;
  resultText += `O total de números informados é: ${countnumberlist}<br>`;
  resultText += `O menor valor informado foi: ${smaller}<br>`;
  resultText += `O maior valor informado foi: ${largest}<br>`;
  resultText += `A média dos valores é: ${medias}<br>`;

  res.innerHTML = resultText;
  console.log(resultText)
}

}


























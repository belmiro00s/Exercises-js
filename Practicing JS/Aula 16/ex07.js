var tabu = document.querySelector("select#tab");
var numero = document.querySelector("input#numeros");
var res = document.querySelector("div#result");
let analy =  []





function addnumber() {
  if ((numero.value > 100) | (numero.value == 0)) {
    window.alert("insira um numero válido");
  } else {
    let item = document.createElement("option");
    item.text = numero.value;
    tabu.appendChild(item);
    item.innerHTML =  `  ${numero.value} adicionado `
    analy.push(numero.value)
     
    console.log(analy)
    
  }
    
 

}

function sumnumber(){
  
  var totalnumbers = analy.length


if(analy.length > 1 ){
  res.innerHTML =  `Ao todo temos ${totalnumbers} numeros cadastrados`

}else {
  res.innerHTML =  `Ao todo temos ${totalnumbers} numero cadastrado`
}
}
  



function valuenumber(){

  let largest = analy.reduce(function (a,b){ // reduzindo todos os valores em um unico valor, ou nesses 2 parametros
      return (a > b ) ? a : b     //aqui compara quem tem o maior valor 
  })

  let smaller = analy.reduce(function (a,b){ // reduzindo todos os valores em um unico valor, ou nesses 2 parametros
    return (a < b ) ? a : b     //aqui compara quem tem o maior valor 
})

res.innerHTML = ` O menor valor informado foi: ${smaller} ` 

 res.innerHTML = ` O maior valor informado foi: ${largest} ` 
   
      

  }


function valuenumber2(){

let smaller = analy.reduce(function (a,b){
return (a <  b) ? a : b

})
res.innerHTML = ` O menor valor informado foi: ${smaller} `
}






function sumall(){
  
  let total = analy.reduce(function (a,b){
  return (a +  b) 

 
  
  }, 0)
  res.innerHTML = ` O menor valor informado foi: ${total.value} `
  
  }





function all(){

  sumnumber()



  
}
 
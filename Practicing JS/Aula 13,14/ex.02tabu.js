console.log("Script carregado");

var buttons = document.querySelector("button#button222");
buttons.addEventListener("click", buttoninput);

function buttoninput() {
  let num = document.querySelector("input#nums");
  let tabu = document.querySelector("select#tab");

  if (num.value.length == 0) {
    // se o campo nums não for preenchido mostra msg de alerta
    console.log("Por favor digite um numero");
    window.alert("Por favor digite um numero");
  } else {
    let n = Number(num.value); //Se não, le o valor recebido no campo nums
    let c = 1;
    tabu.innerHTML = ""
    while (c <= 10) {
      let item = document.createElement("option"); // Criando o elemento option no js
      item.text = `${n} x ${c} = ${n * c}`;   
      tabu.appendChild(item);
      c++;
    }
  }
}

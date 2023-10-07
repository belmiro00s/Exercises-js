console.log("Script carregado") 

var buttons = document.querySelector("button#button222")
buttons.addEventListener("click", buttonsinput)

function buttonsinput() {

    let num = document.querySelector("input#nums")
    let tabu = document.querySelector("select#tab")

    if (num.value.length == 0) {
        console.log('Por favor digite um numero')
        window.alert('Por favor digite um numero')
    } else {
        let n = Number(num.value)

        let c = 1
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = ` ${n} x ${c} = ${n * c}`
            tabu.appendChild(item)
            c++
        }
    

    }
  

}
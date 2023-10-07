

var nacionalidade = document.querySelector('input#naci')
var button = document.querySelector("input#check")
var res = document.querySelector("div#res")
button.addEventListener("click", buttoninput)

function buttoninput() {

var nacio = nacionalidade.value.toLowerCase()


if (nacio == "brasileiro") {
    res.innerHTML = "Você é brasileiro"
} else {

res.innerHTML = "voce é estrangeiro"
}

console.log(res.innerHTML)

}


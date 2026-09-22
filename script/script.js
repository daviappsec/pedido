"use strict"

let form = document.getElementById("formulario")
let telaCerta = document.getElementById("telacerta")
let con2 = document.getElementById("continuargaleria")
let con1 = document.getElementById("continuar")
let galeria = document.getElementById("galeria")
let pre = document.getElementById("preparacao")
let video = document.getElementById("video")
let fim = document.getElementById("fim")
let reset = document.getElementById("terminou")
let telaSenha = document.getElementById("telasenha")
let tentativas = 0
let erros = document.getElementById("contadorErros")


form.addEventListener("submit", function (event) {
    event.preventDefault()

    let senha = document.getElementById("senha").value

    if (senha == "06082026") {

        telaSenha.classList.add("escondido")
        telaCerta.classList.remove("escondido")

        if (tentativas <= 1) {

            erros.innerText = `Você realmente lembra! precisou de  ${tentativas}  tentativa pra acertar`

        } else if (tentativas <= 2) {

            erros.innerText = `OIAAAAAAA! precisou de ${tentativas}  tentativas pra acertar`

        } else {
            erros.innerText = `Quase que não lembra precisou de  ${tentativas}  tentativas pra acertar KKKKKKKKKK`
        }

    } else {

        tentativas++

        if (tentativas == 1) {
            alert("SENHA INCORRETA!")

        } else if (tentativas == 2) {
            alert("DICA 3: você já deveria saber essa...")

        } else if (tentativas == 3) {
            alert("DICA 2: foi uma data muito especial")

        } else if (tentativas == 4) {
            alert("DICA 1: pana-pana-pana    pana-pana-pana hei hei hei")

        } else if (tentativas == 5) {
            alert("SITUAÇÃO TA COMPLICADA")

        } else {
            alert("Essa é a ultima: o dia que marcou a nossa reconciliação")
        }
    }


})


con1.addEventListener("click", function () {

    telaCerta.classList.add("escondido")
    galeria.classList.remove("escondido")
})

con2.addEventListener("click", function () {

    galeria.classList.add("escondido")
    pre.classList.remove("escondido")

})

video.addEventListener("ended", function () {

    pre.classList.add("escondido")
    fim.classList.remove("escondido")

})

reset.addEventListener("click", function () {

    fim.classList.add("escondido")
    telaSenha.classList.remove("escondido")
})

let fotos = document.querySelectorAll("#galeria img")

let angulo = 0

function movimentarFotos() {
    let galeria = document.querySelector(".galeria")

    let centroX = galeria.clientWidth / 2
    let centroY = galeria.clientHeight / 2

    let raioX = Math.min(galeria.clientWidth * 0.38, 420)
    let raioY = Math.min(galeria.clientHeight * 0.38, 260)

    fotos.forEach(function (foto, indice) {

        let quantidade = fotos.length

        let posicao = angulo + (indice * (360 / quantidade))

        let radianos = posicao * Math.PI / 180

        let x = centroX + Math.cos(radianos) * raioX
        let y = centroY + Math.sin(radianos) * raioY

        foto.style.left = `${x}px`
        foto.style.top = `${y}px`

        foto.style.transform = "translate(-50%, -50%)"
    })

    angulo += 0.15

    requestAnimationFrame(movimentarFotos)
}

movimentarFotos()
"use strict"

let form = document.getElementById("formulario")
let telaCerta = document.getElementById("telacerta")
let con3 = document.getElementById("continuarPreparacao")
let con2 = document.getElementById("continuargaleria")
let con1 = document.getElementById("continuar")
let galeria = document.getElementById("galeria")
let pre = document.getElementById("preparacao")
let video = document.getElementById("video")
let fim = document.getElementById("fim")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let senha = document.getElementById("senha").value
    let telaSenha = document.getElementById("telasenha")
    let telaErrada = document.getElementById("telaerrada")
    let telaCerta = document.getElementById("telacerta")


    if (senha == "21") {

        telaSenha.classList.add("escondido")
        telaCerta.classList.remove("escondido")

    } else {
        telaSenha.classList.add("escondido")
        telaErrada.classList.remove("escondido")
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


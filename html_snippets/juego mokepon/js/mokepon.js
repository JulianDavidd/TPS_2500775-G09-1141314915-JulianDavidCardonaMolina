let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3



function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton_mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego=document.getElementById("boton_fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua  = document.getElementById("boton_agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click",ataqueTierra)
}


function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputSol = document.getElementById("sol")
    let spanMascotaJugador = document.getElementById("mascota-jugador")




    if (inputHipodoge.checked){
       {spanMascotaJugador.innerHTML = "hipodoge"} 
    } else if (inputCapipepo.checked) {
        {spanMascotaJugador.innerHTML = "Capipepo"}
    }else if (inputSol.checked){
        {spanMascotaJugador.innerHTML = "sol"}
    }else {
        alert("seleciona una mascota")
    }

    seleccionarMascotaEnemigo()
}



function seleccionarMascotaEnemigo() {
    let mascotaAleatoria  = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")


    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "hipodoge"
    }else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "capipepo"
    }else {
        spanMascotaEnemigo.innerHTML =  "sol"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    }else {
        ataqueEnemigo = "TIERRA"
        combate()
    } 

    crearMensaje()

}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje(" EMPATE ") 
    } 
     else if(ataqueJugador =='FUEGO' && ataqueEnemigo=='TIERRA') {
        crearMensaje(" GANASTE ")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } 
     else if(ataqueJugador =='AGUA' && ataqueEnemigo =='FUEGO') {
        crearMensaje(" GANASTE ")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } 
    else if(ataqueJugador =='TIERRA' && ataqueEnemigo =='AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } 
    else {
        crearMensaje(" PERDISTE ")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

}


function crearMensaje(resultado) {
    let sectionMensajes =document.getElementById("mensajes")


    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atac?? con" + ataqueJugador, + "la mascota del enemigo atac?? con" + ataqueEnemigo + "" + resultado

    sectionMensajes.appendChild(parrafo)
}
 
function aleatorio(min,max) {
    return Math.floor(Math.random() *  (max - min + 1) +min)
}

window.addEventListener("load", iniciarJuego)
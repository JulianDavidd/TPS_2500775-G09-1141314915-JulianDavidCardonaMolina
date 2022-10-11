function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton_mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

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
    let ataqueAleatorio  = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")


    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "hipodoge"
    }else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "capipepo"
    }else {
        spanMascotaEnemigo.innerHTML =  "sol"
    }
}


function aleatorio(min,max) {
    return Math.floor(Math.random() *  (max - min + 1) +min)
}

window.addEventListener("load", iniciarJuego)
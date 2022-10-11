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
}

window.addEventListener("load", iniciarJuego)
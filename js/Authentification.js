/* anthentification.js */
function initAuthentification() {
  document.getElementById("btValider").onclick = valider;
}

function valider(){
    let message ="OK"
    let pseudo = document.getElementById("pseudo").value
    let mdp = document.getElementById("mdp").value

    if(pseudo.trim() === "" || mdp.trim() === "" ){
        message = "Il faut tout saisir"
    }
    document.getElementById("lblMessage").innerHTML = message
}

window.onload = initAuthentification


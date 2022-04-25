/* anthentification.js */

function init() {
  initAuthentification();
  cleanLbl();
}
// Initialisation d'une variable
let lang = " ";

//affectation de la valeur "fr" à la variable lang
function setLangFr() {
  let lang = "fr";
}

//affectation de la valeur "en" à la variable lang
function setLangEn() {
  let lang = "en";
}
console.log(lang)
document.getElementById("btnTradFr").onclick = setLangFr;

function initAuthentification() {
  // Quand l'utilisateur clique sur le bouton "valider"
  // On sollicite la fonction valider
  document.getElementById("btValider").onclick = valider;

  //initialisation variable message du pseudo
  let messagePseudo = "Entrez votre message";
  //affectation du message au champs pseudo
  document.getElementById("pseudo").value = messagePseudo;

  //initialisation du message pour le champs
  let messageMdp = "Saississez votre mot de passe";
  // affectation du message au champs
  document.getElementById("mdp").value = messageMdp;
} /// init

function valider() {
  // Déclaration d'une variable et affectation d'une valeur
  let message = "OK";
  // Récupération d'une saisie de l'utilisateur
  let pseudo = document.getElementById("pseudo").value;
  let mdp = document.getElementById("mdp").value;

  // Test des valeurs saisies
  // trim() enlève les espaces avant et après
  // Si le pseudo est vide ou si le mdp est vide alors
  if (pseudo.trim() === "" || mdp.trim() === "") {
    // Affectation de "Il faut tout saisir" à la variable message
    message = "Il faut tout saisir";
  }
  // Affichage d'une valeur (0K ou Il faut tout saisir) dans le <label>
  document.getElementById("lblMessage").innerHTML = message;
} /// initAuthentification

function cleanLbl() {
  //initialisation du message
  let lblText = "";
  // affectation du message de l'élement
  document.getElementById("lblMessage").innerHTML = lblText;
}

// let btnShow = document.getElementById("showPassword")

// Exécution de la fonction au click
document.getElementById("showPassword").onclick = showPassword;

// Fonction qui change le type du label
function showPassword() {
  document.getElementById("mdp").type = "text";
}

// Au chargement de la page et de la lecture du fichier js on sollicite la fonction init
window.onload = init;

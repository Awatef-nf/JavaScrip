/*Créez une balise <button> ayant comme id “button”.
Lorsque l’on clique dessus, un <article> contenant le texte suivant est ajouté
au contenu de la page : “L'important n'est pas la chute, mais l'atterrissage.”
Si l'on clique à nouveau sur ce bouton, l’article disparaît.
L’apparition / Disparition doit être gérée dans une fonction nommée
“showhide()”.*/


document.addEventListener("DOMContentLoaded", function() {

  //création des éléments
    let nouveauArticle = document.createElement("article");
    let nouveaubutton = document.createElement("button");

  //ajout des attributs et du texte
    nouveauArticle.textContent="L'important n'est pas la chute, mais l'atterrissage.";
    nouveauArticle.setAttribute("id","contenu");

  //nouveaubutton
    nouveaubutton.textContent="afficher";
    nouveaubutton.setAttribute("id","button");

  //ajout au DOM
    document.body.appendChild(nouveaubutton);

  //ajout de l'évènement
    let bouton = document.getElementById('button');
    bouton.addEventListener('click', function() {
        let contenuB = document.getElementById('contenu');
        document.body.appendChild(nouveauArticle);
    });
    
//fonction showhide    
function showhide(){
if (nouveauArticle.style.display === "none") {
    nouveauArticle.style.display = "block";
  } else {
    nouveauArticle.style.display = "none";
  } 
}

bouton.addEventListener("click", showhide);




});



/*
function showhide(){
if (nouveauArticle.style.display === "none") {
    nouveauArticle.style.display = "block";
  } else {
    nouveauArticle.style.display = "none";
  } 
}

bouton.addEventListener("click", showhide);*/
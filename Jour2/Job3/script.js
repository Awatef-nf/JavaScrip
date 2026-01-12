/*Créez une balise <button> ayant comme id “button”.
Créez une balise <p> ayant comme id “compteur” et contenant “0”.
Ce contenu doit évoluer proportionnellement au nombre d'événements clic
reçu par le bouton.
ATTENTION : Vous ne devez pas utiliser “onclick()” dans votre HTML.
_2
La fonction permettant d’effectuer la modification doit s'appeler “addOne()”.*/

document.addEventListener("DOMContentLoaded",function()
    {
        //creation des elements
        let nouveauButton = document.createElement("button");
        let nouveauCompteur = document.createElement("p")
        let compteur =0;

        //ajout d attributs et contenus
        nouveauButton.setAttribute("id","button");
        nouveauButton.textContent="click";

        nouveauCompteur.setAttribute("id","Compteur");
        nouveauCompteur.textContent="0";

        //ajout au dom
        document.body.appendChild(nouveauButton);
        document.body.appendChild(nouveauCompteur);


        //ajout de l'evenement
        let buttonN = document.getElementById("button");
        buttonN.addEventListener('click',function(){
        let compt = document.getElementById('Compteur');
        compteur++;
        compt.textContent = compteur;
    });

    });
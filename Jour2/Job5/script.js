/*Créez un fichier style.css. Définissez la taille minimale de votre body à
4096px.
Ajoutez un <footer> qui prend toute la largeur de votre page en position :
fixed en bas de votre fenêtre.
De la même façon qu’une barre de chargement, la couleur du footer doit
évoluer en fonction du pourcentage de scrolling.*/

//L'interface Window représente une fenêtre contenant un document DOM 
window.addEventListener("scroll", () => {
    //Y est le nombre de pixels verticaux défilés.
  let scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight); 
  // explication accent grave https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals#:~:text=Les%20gabarits%20sont%20d%C3%A9limit%C3%A9s%20par,des%20accolades%20(%20%24%7Bexpression%7D)%20.
  document.documentElement.style.setProperty("--accent-color", `rgb(${0 + scrollPosition * 255},
     ${0}, ${255})`);
});
/*Créez un <button> ayant comme id “button”. Créez un fichier expression.txt
contenant votre expression favorite.
Lorsqu’un utilisateur clique sur le bouton, à l’aide de Fetch, récupérez le
contenu du fichier expression.txt, placez-le dans un paragraphe <p> et
insérez-le dans le corps de votre page.*/


function create(p)
{
     let articlep = document.createElement("p");
     articlep.textContent = p;
     document.body.appendChild(articlep);
}

document.getElementById("button").addEventListener("click", function()
{
fetch("expression.txt").then(response=>
{
   return response.text();

}).then(data =>{
    console.log(data);
    create(data);

}).catch(error =>{console.log(error);
})
})











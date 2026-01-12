let nouvelleDiv = document.createElement("div");

nouvelleDiv.textContent="Ceci est une nouvelle div";

nouvelleDiv.setAttribute("id","maDiv");

nouvelleDiv.setAttribute("title","Une nouvelle dic");

nouvelleDiv.classList.add("classe1","classe2");

document.body.appendChild(nouvelleDiv);


let bouton = document.querySelector('button');
bouton.addEventListener('click',function(){
alert('clik!');
});
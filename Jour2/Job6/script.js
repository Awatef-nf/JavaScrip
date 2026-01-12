/*Par défaut, votre index.html n’a pas de contenu.
Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux
couleurs de La Plateforme_.*/


let tab= ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];
let newTab =[];
console.log(tab);
document.addEventListener("keydown", event => {
  newTab.push(event.key);
  console.log(newTab);
  if(tab.length == newTab.length)
  {
     let equal =true;
      for(let i =0; i<tab.length;i++)
     {
          if(tab[i]!=newTab[i])
            {
            equal = false;
      
            }
      
         if(equal)
         {
          document.body.style.backgroundColor = "#0062ff";
          newTab = [];
         }
            else {
                 newTab = [];
                 }

      }
  }
});
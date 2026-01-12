/*Créez une fonction “sommeNombresPremiers” qui prend en paramètres
deux variables. Si ces deux variables sont des nombres premiers, alors la
fonction retourne leur somme. Sinon, la fonction retourne false.*/



function nbrPremier(nbr) {
  for(var i = 2; i < nbr; i++)
    if(nbr%i === 0) return false;
  return nbr > 1;
}

function sommenbrPremier(a,b){
if(nbrPremier(a) && nbrPremier(b))
{
  return a+b;

}
return false;
}
console.log(sommenbrPremier(13,23)) ;


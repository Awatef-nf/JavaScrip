/*Créez une fonction “afficherJoursSemaines”. Cette fonction ne prend pas de
paramètre. Créez un tableau de strings “joursSemaines” qui contient
l’ensemble des jours de la semaine, du lundi au dimanche. Ensuite, à l’aide
d’une boucle for (for!) affichez un par un ces jours.*/

function semaines()
{
let joursSemaines =["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

for(let i=0; i<joursSemaines.length; i++)
{
    console.log(joursSemaines[i])
}
}

semaines();
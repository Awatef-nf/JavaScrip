//Déclarez une fonction “bisextile” qui prend en paramètre une variable
//“année”. Si l’année est bissextile, la fonction retourne true, sinon elle retourne
//false.

function bissextile(année)
{
    if (année % 4 == 0)
    {
        return true
    }
    else
         {
            return false}
}

console.log(bissextile(2020));
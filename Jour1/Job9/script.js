/*Créez une fonction “tri” qui prend en paramètres un tableau de nombres
nommé “numbers” et une variable “order” qui contient “asc” ou “desc”.
Développer un algorithme qui doit trier le tableau dans l’ordre ascendant ou
décroissant, selon le paramètre passé, puis retourner le tableau trié.*/
var order;
const numbers = [23,5,8,100]
function trier (order,numbers){
    if (order == "asc") {
        var sorted = numbers.sort(
        (a,b) => {return a-b})
    } else {
          sorted = numbers.sort(
            (a,b) => {return b-a})     
    }
    return sorted;
}

console.log(trier("desc",numbers));

/*let sorted;
var order;
const number = [23,5,8,100]
function trier (t){
    if (order = "asc")
    {
        sorted = t.sort
    (
        (a,b) => {
        return a-b}
    )
    }else{
         sorted = t.sort
         (
            (a,b) => {
            return b-a}
         )

}
}

console.log(trier(number));*/


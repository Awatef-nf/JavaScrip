/*Créez une fonction JavaScript “jsonValueKey()” qui prend en paramètre une
chaîne de caractères au format JSON et une clé.
Cette fonction retourne la valeur liée à cette clé dans la chaîne de
caractères.
Par exemple :
Et la clé est “city”, la fonction retourne “Marseille”*/


let jsonString = '{"name": "la plateforme","adresse": "8 rue d\'hozier", "city": "Marseille"}';
let key = "city";
let value = jsonValueKey(jsonString, key);
console.log(value); 


function jsonValueKey(jsonString, key) {

    let jsonObject = JSON.parse(jsonString);  
    return jsonObject[key];
}       



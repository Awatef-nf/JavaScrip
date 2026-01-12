/*Créez un <textarea> dont l’id est “keylogger”.
Chaque fois que l’utilisateur tape une lettre sur son clavier (a-z), celle-ci est
ajoutée dans le textarea (même si le focus en cours n’est pas le textarea).
Si le focus en cours est dans le textarea, la lettre doit être ajoutée deux fois.*/


document.addEventListener("DOMContentLoaded", function() {  
    //création des éléments
    let keylogger = document.createElement("textarea");
    keylogger.setAttribute("id", "keylogger");

    //ajout au DOM
    document.body.appendChild(keylogger);

    //ajout de l'évènement
    document.addEventListener("keydown", function(event) {
        if (event.key >= 'a' && event.key <= 'z') {
            let textarea = document.getElementById('keylogger');
            
            if (document.activeElement === textarea) {
                event.preventDefault();
                textarea.value += event.key + event.key;
            } else {
                textarea.value += event.key;
            }
        }
    });
});



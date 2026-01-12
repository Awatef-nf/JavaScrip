 alert("hello")
    console.log("Hello Word")
   //fonction
    function saluer(){
    console.log("bonjour le monde!");
    }
    saluer();
  // fonction flechées
    const carre = x =>
    {
    const resultat = x*x;
    return resultat;
    };
    console.log(carre(6));
    // variable globale
    var message ="je suis une variable";
    function display()
    {console.log(message);
    }
    display();
    //variable locale
    function afficher(){
     var msg="je suis une variable locale!"
     console.log(msg);
     }
     afficher();
     //type de variable
     function exemplePorter(){
     if(true)
     {
     var x=10; // on peut la re declarer et la mettre à jour
     let y = 20; //on peut la modifier mais ne peut pas redeclarer
     const z=30;
     }
     console.log(x);
     //console.log(y);
    // console.log(z);
     }
     exemplePorter();

 let personne={prenom: "Alice", age: 25, ville: "Paris"};
 for(let proriete in personne)
 {
 console.log(proriete+":"+personne[proriete]);
 }

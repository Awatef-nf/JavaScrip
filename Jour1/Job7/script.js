/*Créez une fonction “jourTravaille” qui prend en paramètre une date au
format Date. Si la date correspond à un jour férié de l’année 2024, la fonction
affiche “Le jour mois année est un jour férié”. Si elle correspond à un samedi
_3
ou un dimanche, alors le message affiché est “Non, jour mois année est un
week-end”, sinon afficher “Oui, jour mois année est un jour travaillé” ou jour,
mois et année correspond aux paramètres passés à la fonction.*/


var d = new Date("2026-01-10");
const ferie = ['01-01', '06-04', '01-05', '08-05', '14-05' , '25-05', '14-07' , '15-08' , '01-11' , '25-12'];
function jourTravaille(date) {
    if(date.getMonth()>9)
    {
        var newDate="0"+date.getDate()+"-"+(date.getMonth()+1)
    }else if(date.getDate()<10)
        {
        var newDate="0"+date.getDate()+"-"+"0"+(date.getMonth()+1)
        }
        else{
            var newDate=date.getDate()+"-"+"0"+(date.getMonth()+1)
        }

    console.log(newDate);
   
    for(let i=0; i<ferie.length;i++)
    {
          if (newDate==ferie[i])
            {
            console.log("jour ferié");
            return;
        }
    }
     if((date.getDay()==0)||(date.getDay()==6))
    {
    console.log("c'est un weekend")
    } else {
        console.log("jour travaille")
    }
}

jourTravaille(d);
jourTravaille(new Date("2026-04-06"))
jourTravaille(new Date())
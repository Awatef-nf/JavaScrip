
function createArticle(article)
{
     let articleDiv = document.createElement("div");
     articleDiv.textContent = article.titre + "----" + article.contenu +"-----"+article.auteur;
     document.body.appendChild(articleDiv);
}

////// premiere methode////////////////
document.getElementById("button").addEventListener("click", function()
{
fetch("http://localhost:8081/all")

.then(response =>{
     if(!response.ok) {
          throw new Error ("Error in fetch");}
     return response.json();
}).then(data => {
     console.log(data);
    for(let article of data)
    {
    createArticle(article);    
    }
    })
.catch(error =>{console.log(error);
})
})


///////// deusieme methodes//////////////////
async function fetchArticles(){
     try{
          let response = await fetch("http:localhost:8081/all");
          if(!response.ok){
               throw new Error("Maxime");
          }
          let data = await response.json();
          for(let article of data){
               createArticle(article);
          }
     } catch (error){
          console.error(error);
     }
}
 document.getElementById("button").addEventListener("click", fetchArticles);
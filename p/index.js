/* 5 ADDING A PARAGRAPH ON CLICK :  */

document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
      let para = document.createElement('p');
      para.textContent = '   Vous venez de créer un paragraphe en cliquant sur le bouton! : )';
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll('button');
  
    for(let i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
  });

  /* 1: gestionnaire d'event sur le document
  2 fonction 
  3 constante bouton
  4 boucle for avec gestionnaire d'évènements sur le bouton
  */
  
  /* pour créer une application de création de paragraphes, on: 

-commence par affecter un gestionnaire d'évènements addEventListener à "document". 
-a ce gestionnaire d'évènements, on donne 2 arguments: "DOMcontentLoaded" et une fonction anonyme. Cette 
fonction anonyme va appeler une autre fonction, "createParagraph". 
-cette fonction createParagraph va d'abord définir une variable "para": let para = document.createElement('p') 
qui fera appel à la méthode "createElement".
-pour donner un contenu à ce paragraphe, on va utiliser textContent.
-On utilise ensuite la méthode appendChild : document.body.appendChild(para); 
-On créer ensuite une constante "button" à laquelle on applique la méthode querySelectorAll
-ensuite, on crée une boucle avec une variable i qui s'incrémente tant que i est inférieur à la longueur de la constante "bouton".
-Enfin, on créé un gestionnaire d'évènements qui prend 2 arguments: clic, et la fonction createParagraph. */

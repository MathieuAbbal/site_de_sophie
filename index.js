/*document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });*/
  //bouton scroll 
//Récupère le btn
const back2Top = document.querySelector('#back2Top');
back2Top.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top:0, left:0, behavior: 'smooth'});
});
//Lorsque l'utilisateur fait défiler 20px du haut du document vers le bas
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
back2Top.style.display = "block";
} else {
 back2Top.style.display = "none";
}
}
window.onscroll = function() {scrollFunction()};

//affiche année en cour
var today=new Date();
		var annee = today.getFullYear();
		var sannee = document.getElementById('s_annee');
		sannee.innerHTML = annee;


const btn_inscrire = document.getElementById("btn-inscrire");
const btn_connecter = document.getElementById("btn-connecter");

btn_inscrire.addEventListener('click', ()=>{
   window.location.href = "inscription.html"; 
})

btn_connecter.addEventListener('click', ()=>{
    window.location.href = "authentification.html";
})

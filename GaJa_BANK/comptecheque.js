

const compte=document.getElementById("span-num-compte");
const solde=document.getElementById("span-solde");
const compte_d=document.getElementById("compte_d");
let userConnected = JSON.parse(localStorage.getItem("userConnected"));

compte.textContent = userConnected.comptes.comptePrincipal.numero ;


solde.textContent = userConnected.comptes.comptePrincipal.solde;


compte_d.addEventListener("click", () =>{
  window.location.href = "compte_epargne.html";
});




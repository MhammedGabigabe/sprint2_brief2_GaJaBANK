const rib_epargne=document.getElementById("span-num-compte_epargne");
const solde_epargne=document.getElementById("span-solde_epargne");

let userConnected = JSON.parse(localStorage.getItem("userConnected"));
rib_epargne.textContent = userConnected.comptes.compteEpargne.numero;
solde_epargne.textContent= userConnected.comptes.compteEpargne.solde;




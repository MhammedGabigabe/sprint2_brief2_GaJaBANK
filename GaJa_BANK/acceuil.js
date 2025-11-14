const nom = document.getElementById("nom");
const compte = document.getElementById("compte");
const solde = document.getElementById("solde");
const eye = document.getElementById("eye");
const mescomptec=document.getElementById("mescomptec");
const footer=document.getElementById("footer");
 
let userConnected = JSON.parse(localStorage.getItem("userConnected"));

mescomptec.addEventListener("click", () =>{
  window.location.href = "compte.html";
});

if(userConnected.genre=="Homme"){
nom.textContent ="Bonjour M."+userConnected.nom;
}else{
    nom.textContent ="Bonjour Mme."+userConnected.nom;
}

compte.textContent = userConnected.comptes.comptePrincipal.numero+" MAD";




let realSolde = userConnected.comptes.comptePrincipal.solde;


solde.textContent = "****";

let visible = false;

eye.addEventListener("click", () => {
    if (!visible) {
        solde.textContent = realSolde; 
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        visible = true;
    } else {
        solde.textContent = "****"; 
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        visible = false;
    }
});


const mescartes=document.getElementById("mescartes");
const recharge=document.getElementById("recharge");
const factures=document.getElementById("factures");
const verment=document.getElementById("verment");

mescartes.addEventListener("click",()=>{
    window.location.href = "mes_cartes.html";
});
recharge.addEventListener("click",()=>{
    window.location.href = "recharge.html";
});
factures.addEventListener("click",()=>{
    window.location.href = "payement.html";
});
verment.addEventListener("click",()=>{
    window.location.href = "verment.html";
});

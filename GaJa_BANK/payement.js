const facteure=document.getElementById("fact");
const fournisseure=document.getElementById("four");
const ref=document.getElementById("ref");
const montant=document.getElementById("montant");
const payer=document.getElementById("payer");
const annuler=document.getElementById("annuler");



let userConnected = JSON.parse(localStorage.getItem("userConnected"));
let identifiant=userConnected.comptes.comptePrincipal.identifiant;

let etat = JSON.parse(localStorage.getItem("etat_carte"))
const regexMontant= /^[1-9]{2,20}$/;
payer.addEventListener("click", () => {
    const payements=JSON.parse(localStorage.getItem("payements")) || [];
if(etat.identifiant==identifiant && etat.status==="active"){
       if(facteure.value!=="" && fournisseure.value!=="" && ref.value!=="" && regexMontant.test(montant.value)){
        const payement={
            facteure:facteure.value,
            fournisseure:fournisseure.value,
            montant:montant.value,
            date:new Date(),
            identifiant:identifiant
        }
        payements.push(payement);
        localStorage.setItem("payements",JSON.stringify(payements));
        userConnected.comptes.comptePrincipal.solde=userConnected.comptes.comptePrincipal.solde-montant.value;
localStorage.setItem("userConnected", JSON.stringify(userConnected));
        alert("cette payement payer avec reussiste");
        facteure.value="";
        fournisseure.value="";
        ref.value="";
        montant.value="";

       }else{
        alert("toutes les champs importante et valide");
       }
       }else{
        alert("cette carte inactive");
       }
    
    
    });

    annuler.addEventListener("click",() => {
        facteure.value="";
        fournisseure.value="";
        ref.value="";
        montant.value="";
    })



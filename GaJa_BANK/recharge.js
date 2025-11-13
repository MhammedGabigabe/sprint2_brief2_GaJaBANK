const operateure=document.getElementById("operateure").value;
const type_operation=document.getElementById("type-operation").value;
const telephone=document.getElementById("telephone").value;
const solde_recharge=document.getElementById("solde_recharge").value;
const sauvgarder=document.getElementById("sauvgarder");
const recharger=document.getElementById("recharger");
const annuler=document.getElementById("annuler");

const regexN=/^[0-9]{8,12}$/;

let userConnected = JSON.parse(localStorage.getItem("userConnected"));
let identifiant=userConnected.comptes.comptePrincipal.identifiant;
let etat = JSON.parse(localStorage.getItem("etat_carte"))
recharger.addEventListener("click", ()=> {
if(etat.identifiant==identifiant && etat.status==="active"){
 if(operateure!=="" && type_operation!=="" && telephone!=="" && solde_recharge!=="" && regexN.test(telephone)){
    const recharges=JSON.parse(localStorage.getItem("recharges")) || [];
      const recharge={
    operateure:operateure,
    date:new Date(),
    type_operation:type_operation,
    solde_recharge:solde_recharge,
    
   }
   recharges.push(recharge);
   localStorage.setItem("recharges",recharges);

 }

}
});

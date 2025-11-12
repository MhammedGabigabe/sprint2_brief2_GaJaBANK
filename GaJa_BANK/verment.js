
const namec=document.getElementById("name");
const ribc=document.getElementById("rib");
const soldec=document.getElementById("solde");
const Bénéficiaires=document.getElementById("Bénéficiaires");
const montant=document.getElementById("montant");
const motif=document.getElementById("motif");
const confirme=document.getElementById("confirme");
const annuler=document.getElementById("Annuler");

let userConnected = JSON.parse(localStorage.getItem("userConnected"));


if(userConnected.genre=="Homme"){
namec.textContent ="Bonjour M."+userConnected.nom;
}else{
    namec.textContent ="Bonjour Mme."+userConnected.nom;
}
let identifiant=userConnected.comptes.comptePrincipal.identifiant;
let solde_actuelle=userConnected.comptes.comptePrincipal.solde;

ribc.textContent = userConnected.comptes.comptePrincipal.numero;
soldec.textContent = userConnected.comptes.comptePrincipal.solde+"  MAD";

const bénificiaires = JSON.parse(localStorage.getItem("bénificiaires")) || [];
const bénificiaires_nom=[];
for(let i=0;i<bénificiaires.length;i++){
if(bénificiaires[i].identifiant==userConnected.comptes.comptePrincipal.identifiant){
        bénificiaires_nom.push(bénificiaires[i].nom);
    }
}


 

 for(let name=0;name<bénificiaires_nom.length;name++){
    const option=document.createElement("option");
    option.value=bénificiaires_nom[name];
    Bénéficiaires.appendChild(option);
    
 }

 const regexMontant= /^[1-9]{3,20}$/;
 const regexMotif=/^[a-zA-ZÀ-ÿ\s]+$/;
 

confirme.addEventListener("click",() => {
    if(regexMontant.test(montant.value.trim()) && regexMotif.test(motif.value.trim())){
        alert("djfv:kj")
        if(montant.value<=solde_actuelle){

         const verments=JSON.parse(localStorage.getItem("verments")) || [];
    
     const verment={
      nom_b:Bénéficiaires.value,
      date:new Date(),
      montant:montant.value,
      motif:motif.value,
      identifiant:identifiant
 }
 verments.push(verment);
 localStorage.setItem("verments",JSON.stringify(verments));
 userConnected.comptes.comptePrincipal.solde=userConnected.comptes.comptePrincipal.solde-montant.value;
localStorage.setItem("userConnected", JSON.stringify(userConnected));

 alert("cette verment confirmer avec sucess");
 return;
        }else{
            alert("le solde actuelle doit etre supperire ou egal montant");
            return;
        }
  
    }else{
        alert("les champs doit avoir valide");
    }
   

});
annuler.addEventListener("click", () => {
montant.value="";
motif.value="";
});

  





const namec=document.getElementById("name");
const ribc=document.getElementById("rib");
const soldec=document.getElementById("solde");
const Bénéficiaires=document.getElementById("Bénéficiaires");


let userConnected = JSON.parse(localStorage.getItem("userConnected"));


if(userConnected.genre=="Homme"){
namec.textContent ="Bonjour M."+userConnected.nom;
}else{
    namec.textContent ="Bonjour Mme."+userConnected.nom;
}


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





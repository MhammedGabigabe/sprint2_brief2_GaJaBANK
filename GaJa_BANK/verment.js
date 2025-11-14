const namec = document.getElementById("name");
const ribc = document.getElementById("rib");
const soldec = document.getElementById("solde");
const Bénéficiaires = document.getElementById("Bénéficiaires");
const Bénéficiaire_input = document.getElementById("Bénéficiaire");
const montant = document.getElementById("montant");
const motif = document.getElementById("motif");
const confirme = document.getElementById("confirme");
const annuler = document.getElementById("Annuler");
const compte_input=document.getElementById("compte");
const select=

compte_input.addEventListener("input",() => {

    let valeure=compte_input.value;
   if(valeure=="compte_Principal"){
const bénificiaires = JSON.parse(localStorage.getItem("bénificiaires")) || [];

const bénificiaires_nom = bénificiaires.filter(x => x.identifiant == identifiant).map(x => x.nom);


bénificiaires_nom.forEach(n =>{
    const opt = document.createElement("option");
    opt.value = n;
    Bénéficiaires.appendChild(opt);
})
  const opt = document.createElement("option");
    opt.value = "Mon Compte Epargne";
    Bénéficiaires.appendChild(opt);


   }else{
       const opt = document.createElement("option");
    opt.value = "Mon Compte Principale";
    Bénéficiaires.appendChild(opt);
   }
});

let m = new Date();
let mois = m.getMonth() + 1;
let montant_totale_par_mois = 30000;

let userConnected = JSON.parse(localStorage.getItem("userConnected"));
let identifiant = userConnected.comptes.comptePrincipal.identifiant;
let solde_actuelle = Number(userConnected.comptes.comptePrincipal.solde);
let solde_actuelle_epargne=Number(userConnected.comptes.compteEpargne.solde)


if (userConnected.genre == "Homme") {
    namec.textContent = "Bonjour M." + userConnected.nom;
} else {
    namec.textContent = "Bonjour Mme." + userConnected.nom;
}

ribc.textContent = userConnected.comptes.comptePrincipal.numero;
soldec.textContent = solde_actuelle + " MAD";




const regexMontant = /^\d+$/;
const regexMotif = /^[a-zA-ZÀ-ÿ\s]+$/;

let etat = JSON.parse(localStorage.getItem("etat_carte"));


confirme.addEventListener("click", () => {
    verifierPlafond();
});


annuler.addEventListener("click", () =>{
    montant.value = "";
    motif.value = "";
});


function verifierPlafond() {
    let valeure=compte_input.value;
    const montant_num = Number(montant.value);
    if(valeure=="compte_Principal" && Bénéficiaire_input.value!=="Mon Compte Epargne"){


    const toutes_verments = JSON.parse(localStorage.getItem("verments")) || [];

    const verments_par_mois = toutes_verments.filter(x => x.mois == mois);

    const total_montant = verments_par_mois.reduce(
        (sum, v) => sum + Number(v.montant),
        0
    );

    
    const mantant_reel = total_montant + montant_num;


    if (mantant_reel > montant_totale_par_mois) {
        alert("max 30000 MAD par mois");
        return;
    }


    if (etat.status !== "active") {
        alert("Cette carte bancaire est inactive");
        return;
    }


    if (!regexMontant.test(montant.value.trim()) || !regexMotif.test(motif.value.trim())) {
        alert("Les champs doivent être valides");
        return;
    }


    if (montant_num > solde_actuelle) {
        alert("Le solde doit être supérieur ou égal au montant");
        return;
    }


    const verments = toutes_verments;

    const verment = {
        nom_b: Bénéficiaire_input.value,
        date: new Date().toISOString().slice(0, 10),
        montant: montant_num,
        motif: motif.value.trim(),
        identifiant: identifiant,
        mois: mois
    };

    verments.push(verment);
    localStorage.setItem("verments", JSON.stringify(verments));

    userConnected.comptes.comptePrincipal.solde -= montant_num;
    localStorage.setItem("userConnected", JSON.stringify(userConnected));

    alert("Versement confirmé avec succès");
}else  if(valeure=="compte_Principal" && Bénéficiaire_input.value=="Mon Compte Epargne"){
      if (montant_num > solde_actuelle) {
        alert("Le solde doit être supérieur ou égal au montant");
        return;
    }

     userConnected.comptes.comptePrincipal.solde -= Number(montant.value);
       userConnected.comptes.compteEpargne.solde +=Number(montant.value);
        localStorage.setItem("userConnected", JSON.stringify(userConnected));
}else if(valeure=="compte_Epargne" && Bénéficiaire_input.value=="Mon Compte Principale"){
      if (montant_num > solde_actuelle_epargne) {
        alert("Le solde doit être supérieur ou égal au montant");
        return;
    }
    userConnected.comptes.comptePrincipal.solde += Number(montant.value);
       userConnected.comptes.compteEpargne.solde -=Number(montant.value);
        localStorage.setItem("userConnected", JSON.stringify(userConnected));
        
}

 }


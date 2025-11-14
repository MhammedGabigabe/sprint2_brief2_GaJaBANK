const nom_v = document.getElementById("nom_v");
const date_v = document.getElementById("date_v");
const motif_v = document.getElementById("motif_v");
const montant_v = document.getElementById("montant_v");
const precedent_v = document.getElementById("precedent_v");
const next_v = document.getElementById("next_v");

const verments = JSON.parse(localStorage.getItem("verments")) || [];
let userConnected = JSON.parse(localStorage.getItem("userConnected"));

let identifiant_h = userConnected.comptes.comptePrincipal.identifiant;


const v = verments.filter(x => x.identifiant == identifiant_h);
let length = v.length;

let index = 0;



function afficherverment(verment) {
    nom_v.textContent = verment.nom_b;
    date_v.textContent = verment.date;
    motif_v.textContent = verment.motif;
    montant_v.textContent = verment.montant + " MAD";
}



function mettreAJourUI() {

    if (length === 0) {
        date_v.textContent = "Aucun verment trouvé";
        precedent_v.classList.add("hidden");
        next_v.classList.add("hidden");
        return;
    }

    afficherverment(v[index]);

    if (length === 1) {
        precedent_v.classList.add("hidden");
        next_v.classList.add("hidden");
    } else {
        
        if (index === 0) {
            precedent_v.classList.add("hidden");
        } else {
            precedent_v.classList.remove("hidden");
        }

   
        if (index === length - 1) {
            next_v.classList.add("hidden");
        } else {
            next_v.classList.remove("hidden");
        }
    }
}

mettreAJourUI();



next_v.addEventListener("click", () => {
    if (index < length - 1) {
        index++;
        mettreAJourUI();
    }
});

precedent_v.addEventListener("click", () => {
    if (index > 0){
        index--;
        mettreAJourUI();
    }
});




const operateure_r=document.getElementById("operateure_r");
const date_r=document.getElementById("date_r");
const type_operation_r=document.getElementById("type_operation_r");
const montant_r=document.getElementById("montant_r");
const precedent_r=document.getElementById("precedent_r");
const next_r=document.getElementById("next_r");


const recharges = JSON.parse(localStorage.getItem("recharges")) || [];


const r = recharges.filter(x => x.identifiant == identifiant_h);
let length_r = r.length;

let index_r = 0;



function afficherecharge(recharge){
    operateure_r.textContent = recharge.operateure;
    date_r.textContent = recharge.date;
    type_operation_r.textContent = recharge.type_operation;
    montant_r.textContent = recharge.solde_recharge + " MAD";
}



function mettreAJourrecharge() {

    if (length_r === 0) {
        date_r.textContent = "Aucun recharge trouvé";
        precedent_r.classList.add("hidden");
        next_r.classList.add("hidden");
        return;
    }

    afficherecharge(r[index]);

    if (length_r === 1) {
        precedent_r.classList.add("hidden");
        next_r.classList.add("hidden");
    } else {
        
        if (index_r === 0) {
            precedent_r.classList.add("hidden");
        } else {
            precedent_r.classList.remove("hidden");
        }

   
        if (index_r === length_r - 1) {
            next_r.classList.add("hidden");
        } else {
            next_r.classList.remove("hidden");
        }
    }
}

mettreAJourrecharge();



next_r.addEventListener("click", () => {
    if (index_r < length_r - 1) {
        index_r++;
        mettreAJourrecharge();
    }
});

precedent_r.addEventListener("click", () => {
    if (index_r > 0) {
        index_r--;
        mettreAJourrecharge();
    }
});



const type_facteure_p=document.getElementById("type_facteure_p");
const date_p=document.getElementById("date_p");
const fournisseure_p=document.getElementById("fournisseure_p");
const montant_p=document.getElementById("montant_p")
const precedent_p=document.getElementById("precedent_p");
const next_p=document.getElementById("next_p");




const payements = JSON.parse(localStorage.getItem("payements")) || [];


const p = payements.filter(x => x.identifiant == identifiant_h);
let length_p = p.length;

let index_p = 0;



function affichepayement(payement){
    type_facteure_p.textContent = payement.facteure;
    date_p.textContent = payement.date;
    fournisseure_p.textContent = payement.fournisseure;
    montant_p.textContent = payement. montant + " MAD";
}



function mettreAJourpayement() {

    if (length_p === 0) {
        date_p.textContent = "Aucun recharge trouvé";
        precedent_p.classList.add("hidden");
        next_p.classList.add("hidden");
        return;
    }

    affichepayement(p[index_p]);

    if (length_p === 1) {
        precedent_p.classList.add("hidden");
        next_p.classList.add("hidden");
    } else {
        
        if (index_p === 0) {
            precedent_p.classList.add("hidden");
        } else {
            precedent_p.classList.remove("hidden");
        }

   
        if (index_p === length_p - 1) {
            next_p.classList.add("hidden");
        } else {
            next_p.classList.remove("hidden");
        }
    }
}

mettreAJourpayement();



next_p.addEventListener("click", () => {
    if (index_p < length_p - 1) {
        index_p++;
        mettreAJourpayement();
    }
});

precedent_p.addEventListener("click", () => {
    if (index_p > 0) {
        index_p--;
        mettreAJourpayement();
    }
});
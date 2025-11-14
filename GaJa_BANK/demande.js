const nom_user=document.getElementById("nom_user");
const nemero_user=document.getElementById("nemero_user");
const rib_user=document.getElementById("rib_user");
const telecharger=document.getElementById("telecharger");

let userConnected = JSON.parse(localStorage.getItem("userConnected"));

rib_user.textContent = userConnected.comptes.comptePrincipal.numero ;
if(userConnected.genre=="Homme"){
nom_user.textContent ="Bonjour M."+userConnected.nom;
}else{
    nom_user.textContent ="Bonjour Mme."+userConnected.nom;
}

 nemero_user.textContent=userConnected.comptes.comptePrincipal.n_r;


let compte = userConnected.comptes.comptePrincipal;


let nomComplet = (userConnected.genre === "Homme")? "M. " + userConnected.nom : "Mme. " + userConnected.nom;

let numeroCompte = compte.numero;
let rib = compte.n_r;

telecharger.addEventListener("click", () => {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    
    doc.setFontSize(28);
    doc.setTextColor(30, 60, 110);
    doc.text("GaJa BANK", 70, 20);

  
    doc.setFontSize(20);
    doc.setTextColor(242, 109, 41);
    doc.text("ATTESTATION DE R.I.B", 60, 35);

   
    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0);

    let y = 55;
    const lineHeight = 8;

    const lines = [
        `Nous soussignés GaJa BANK – Agence Centrale Casablanca,`,
        `certifions que ${nomComplet} :`,
        `est titulaire d’un compte de chèque ordinaire ouvert sur nos`,
        `livres sous le numéro ${numeroCompte}, dont le`,
        `RIB est :`,
        ``,
        `BANQUE : GAJA BANK`,
        `ADRESSE : Boulevard Hassan II, Casablanca, Maroc`,
        `RIB : ${rib}`,
        `BIC : GAJAMAMC`,
        `Nom : ${userConnected.nom}`,
         `PRENOM : ${userConnected.prenom}`,
    ];

    lines.forEach(line => {
        doc.text(line, 15, y);
        y += lineHeight;
    });

   
    doc.save("Attestation_RIB.pdf");
});


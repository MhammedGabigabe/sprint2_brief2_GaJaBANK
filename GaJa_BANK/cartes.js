const rib = document.getElementById("rib");
const expiration = document.getElementById("Expiration");

let userConnected_cartes = JSON.parse(localStorage.getItem("userConnected"));

rib.textContent = userConnected_cartes.comptes.comptePrincipal.numero;
expiration.textContent = `Expiration : ${Math.floor(Math.random()*100)} / ${Math.floor(Math.random()*100)}`;

let identifiant_carte = userConnected_cartes.comptes.comptePrincipal.identifiant;

const carte_status = document.getElementById("carte_status");
let cartebv_or_in = document.getElementById("cartebv_or_in");

let etat_c = JSON.parse(localStorage.getItem("etat_carte"));


if (etat_c) {
    cartebv_or_in.textContent = `carte ${etat_c.status}`;
} else {
    cartebv_or_in.textContent = "carte inactive"; 
}

if (etat_c && etat_c.identifiant === identifiant_carte) {
    carte_status.checked = etat_c.status === "active";
}

carte_status.addEventListener("change", () => {
    const etat_cart = {
        identifiant: identifiant_carte,
        status: carte_status.checked ? "active" : "inactive"
    };

    localStorage.setItem("etat_carte", JSON.stringify(etat_cart));

    cartebv_or_in.textContent = `carte ${etat_cart.status}`;
});

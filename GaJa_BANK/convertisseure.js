
const rates = {
  EUR: { USD: 1.07, MAD: 10.80, GBP: 0.86, RUB: 97 },
  USD: { EUR: 0.93, MAD: 10.10, GBP: 0.80, RUB: 90 },
  MAD: { EUR: 0.092, USD: 0.099, GBP: 0.079, RUB: 8.9 },
  GBP: { EUR: 1.16, USD: 1.24, MAD: 12.5, RUB: 113 },
  RUB: { EUR: 0.010, USD: 0.011, MAD: 0.11, GBP: 0.0088 }
};


const montant = document.getElementById("montant");
const devise1 = document.querySelector("input[list='de']");
const devise2 = document.querySelector("input[list='to']");
const bouton = document.querySelector(".convert-btn");
const result = document.getElementById("result");


function convertir() {
    const regexMontant = /^\d+$/;
    if(regexMontant.test(montant.value) && devise1!=="" && devise2!==""){

   
  const valeur = parseFloat(montant.value);
  const d1 = devise1.value.trim().slice(0, 3).toUpperCase();
  const d2 = devise2.value.trim().slice(0, 3).toUpperCase();

  if (isNaN(valeur)) {
    result.textContent = "Veuillez entrer un montant valide.";
    return;
  }

  if (!d1 || !d2) {
    result.textContent = "Veuillez sélectionner les devises.";
    return;
  }

  if (d1 === d2) {
    result.textContent = `${valeur} ${d1}`;
    return;
  }

  if (!rates[d1] || !rates[d1][d2]) {
    result.textContent = "Conversion non disponible.";
    return;
  }

  const converti = valeur * rates[d1][d2];
  result.textContent = `${valeur} ${d1} = ${converti.toFixed(2)} ${d2}`;
}else{
    alert("toutes les champs obligatoire");
}
 }


bouton.addEventListener("click", convertir);

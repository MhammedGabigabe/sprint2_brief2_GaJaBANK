// ✅ OUVRIR SIDEBAR
function openNav() {
    const sidebar = document.getElementById("footer");
    sidebar.classList.remove("w-0");
    sidebar.classList.add("w-[320px]");
}

// FERMER SIDEBAR
function closeNav() {
    const sidebar = document.getElementById("footer");
    sidebar.classList.remove("w-[320px]");
    sidebar.classList.add("w-0");
}

const btn_enregistrer = document.getElementById("enregistrer");

btn_enregistrer.addEventListener("click", () => {

    validationInscription();
});


function validationInscription() {


    const name = document.getElementById("name");
    const prenom = document.getElementById("prenom");
    const genres = document.getElementById("genre");
    const email = document.getElementById("email");
    const nationnalite = document.getElementById("nationnalite");
    const pays = document.getElementById("pay");
    const nemero = document.getElementById("nemero");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    const result = document.getElementById("result");

    const regexName = /^[a-zA-ZÀ-ÿ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNumero = /^[0-9]{8,12}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;



  
    function showError(msg, input) {
        result.innerText = msg;

    if (!regexName.test(name.value.trim())) {
        result.textContent = "Nom invalide ! Seulement des lettres.";
        result.style.color = "red";
    result.classList.remove("hidden");
    result.style.borderColor="red"
    name.focus();
        return;
    }


    if (!regexName.test(prenom.value.trim())) {
        result.innerText = "Prénom invalide ! Seulement des lettres.";

        result.style.color = "red";
        result.style.borderColor = "red";
        result.classList.remove("hidden");

        input.focus();
    }

   
    if (!regexName.test(name.value.trim()))
        return showError("Nom invalide !", name);

    if (!regexName.test(prenom.value.trim()))
        return showError("Prénom invalide !", prenom);

    if (genres.value === "")
        return showError("Veuillez choisir votre genre.", genres);

    if (!regexEmail.test(email.value.trim()))
        return showError("Email invalide !", email);

    if (nationnalite.value.trim().length < 3)
        return showError("Nationalité invalide !", nationnalite);

    if (pays.value.trim().length < 3)
        return showError("Pays invalide !", pays);

    if (!regexNumero.test(nemero.value.trim()))
        return showError("Numéro invalide !", nemero);

    if (!regexPassword.test(password.value.trim()))
        return showError("Mot de passe faible !", password);

    if (password.value.trim() !== confirmation.value.trim())
        return showError("Confirmation incorrecte !", confirmation);


 
    result.innerText = "Inscription réussie ✅";
    result.style.color = "green";
    result.style.borderColor = "green";
    result.classList.remove("hidden");

        result.style.borderColor="red"
        prenom.focus();
        return;
    }


    if (genres.value === "") {
        result.innerText = "Veuillez choisir votre genre.";
        result.style.color = "red";
        result.classList.remove("hidden");
        result.style.borderColor="red"
        genres.focus();
        return;
    }


    if (!regexEmail.test(email.value.trim())) {
        result.innerText = "Email invalide !";
        result.style.color = "red";
        result.classList.remove("hidden");
            result.style.borderColor="red"
        email.focus();
        return;
    }


    if (nationnalite.value.trim().length < 3) {
        result.innerText = "Nationalité invalide !";
        result.style.color = "red";
        result.classList.remove("hidden");
        result.style.borderColor="red"
        nationnalite.focus();
        return;
    }


    if (pays.value.trim().length < 3) {
        result.innerText = "Pays invalide !";
        result.style.color = "red";
        result.classList.remove("hidden");
        result.style.borderColor="red"
        pays.focus();
        return;
    }

    if (!regexNumero.test(nemero.value.trim())) {
        result.innerText = "Numéro invalide ! Minimum 8 chiffres.";
        result.style.color = "red";
        result.classList.remove("hidden");
        result.style.borderColor="red"
        nemero.focus();
        return;
    }


    if (!regexPassword.test(password.value.trim())) {
        result.innerText = "Mot de passe faible ! Min 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre.";
        result.style.color = "red";
        result.classList.remove("hidden");
        result.style.borderColor="red"
        password.focus();
        return;
    }

    
    if (password.value.trim() !== confirmation.value.trim()) {
        result.innerText = "La confirmation du mot de passe est incorrecte.";
        result.style.color = "red";
        result.classList.remove("hidden");
            result.style.borderColor="red"
        confirmation.focus();
        return;
    }

    
    result.innerText = "Inscription réussie ✅";
    result.style.color = "green";
    result.classList.remove("hidden");
    result.style.borderColor="green"



   
    let resp = "";
    let resd="";
    for (let i = 0; i < 16; i++) {
        resp += Math.floor(Math.random() * 10);
        resd += Math.floor(Math.random() * 10);

    }

    let numeroComptePrincipal = "121343" + resp + "00";
    let numeroCompteEpargne = "121343" + resd + "00";

    alert("Compte principal: " + numeroComptePrincipal);
    alert("Compte épargne: " + numeroCompteEpargne);


    let user = {
        nom: name.value.trim(),
        prenom: prenom.value.trim(),
        genre: genres.value.trim(),
        email: email.value.trim(),
        nationalite: nationnalite.value.trim(),
        pays: pays.value.trim(),
        numeroTel: nemero.value.trim(),
        motDePasse: password.value.trim(),
        comptes: {
            comptePrincipal: {
                numero: numeroComptePrincipal,
                solde: 0
            },

            compteEpargne: {
                numero: numeroCompteEpargne,
                solde: 0
            }
        }
    };


   
    localStorage.setItem("userConnected", JSON.stringify(user));

  
    window.location.href = "authentification.html";
}

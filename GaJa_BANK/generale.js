    function openNav() {
        const sidebar = document.getElementById("footer");
        sidebar.classList.remove("w-0");
        sidebar.classList.add("w-[320px]");
    }

    function closeNav() {
        const sidebar = document.getElementById("footer");
        sidebar.classList.remove("w-[320px]");
        sidebar.classList.add("w-0");
    }



    //inscription
 // inscription
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

    
//   let res="";
//     for(let i=1;i<=16;i++){
//         res +=Math.floor(Math.random() * 10) + 0;
//     }
//       let numerocompte="121343"+res+"00";
//     alert(numerocompte)
//     alert(res[0]);
    
//window.location.href = "verment.html";

}


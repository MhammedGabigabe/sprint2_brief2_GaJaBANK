const openBtn = document.getElementById('openBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const nomb = document.getElementById("nom");
const prenomb = document.getElementById("prenom");
const ribb = document.getElementById("rib");
const envoyer = document.getElementById("envoyer");
const recherche = document.getElementById("recherche");
const container = document.getElementById('resultats');
const tri=document.getElementById("tri");

container.addEventListener("click", (e) =>{
   let verm=e.target.closest(".carte");
   let index=parseInt(verm.dataset.index);
   const b=JSON.parse(localStorage.getItem("bénificiaires"));
     const nouvelle_bénificiere=[];
   for(let j=0;j<b.length;j++){
    if(j !==index){
        nouvelle_bénificiere.push(b[j]);
    }
   }
   localStorage.setItem("bénificiaires", JSON.stringify(nouvelle_bénificiere));

});



openBtn.addEventListener('click', () => popup.classList.remove('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
let userConnected = JSON.parse(localStorage.getItem("userConnected"));

let identifiant_user_c= userConnected.comptes.comptePrincipal.identifiant;

envoyer.addEventListener("click", () => {
  const bénificiaires = JSON.parse(localStorage.getItem("bénificiaires")) || [];
  const bénificiere = {
    nom: nomb.value.trim(),
    prenom: prenomb.value.trim(),
    rib: ribb.value.trim(),
    status:"active",
    date:new Date(),
    identifiant:identifiant_user_c
  };

  bénificiaires.push(bénificiere);
  localStorage.setItem("bénificiaires", JSON.stringify(bénificiaires));

  alert("Bénéficiaire enregistré !");
});


function afficherBeneficiaires(liste) {
  container.innerHTML = ""; 

  if (!liste || liste.length === 0) {
    const text = document.createElement("h1");
    text.textContent = "Aucun bénéficiaire ajouté";
    container.appendChild(text);
    return;
  }

  for (let i = 0; i < liste.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = "carte col-span-2 mt-4 bg-gray-100 flex justify-between items-center p-2 rounded-xl";
newDiv.setAttribute("data-index",i);

    newDiv.innerHTML = `
      <div class="ml-4">
          <p class="text-[#F26D29]" id="nom-beneficiaire">${liste[i].nom} ${liste[i].prenom}</p>
          <p class="text-blue-600">${liste[i].rib}</p>
      </div>
      <div class="mr-4 flex items-center gap-2">
          <a href="#">Active</a>
          <label class="cursor-pointer relative">
              <input type="checkbox" value="" ${liste[i].status === "active" ? "checked" : ""} class="sr-only peer" id="active">
              <div class="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-green-400 after:absolute after:bg-white 
                  after:rounded-full after:h-4 after:w-4 peer-checked:after:translate-x-full"></div>
          </label>
          <a href="#"><i class="fa-solid fa-trash text-[#F26D29]"></i></a>
      </div>
    `;
    container.appendChild(newDiv);
  }
}


let bénificiaires_récuperer = JSON.parse(localStorage.getItem("bénificiaires")) || [];
let filtrer_par_identifiant=[];
for(let i=0;i<bénificiaires_récuperer.length;i++){
    if(bénificiaires_récuperer[i].identifiant==identifiant_user_c ){
        filtrer_par_identifiant.push(bénificiaires_récuperer[i]);
    }
}
afficherBeneficiaires(filtrer_par_identifiant);


recherche.onkeyup = function (e) {
  const val = e.target.value.toLowerCase();

  const filtrés = bénificiaires_récuperer.filter(b =>
    b.nom.toLowerCase().includes(val) ||
    b.prenom.toLowerCase().includes(val) ||
    b.rib.toLowerCase().includes(val)
  );

  afficherBeneficiaires(filtrés);
};




tri.addEventListener("change", () => {
  const value = tri.value;
  let listeFiltrée = [...bénificiaires_récuperer]; 

  if (value === "nom") {
    listeFiltrée.sort((a, b) => a.nom.localeCompare(b.nom));
  } else if (value === "date") {
    listeFiltrée.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (value === "active") {
    listeFiltrée = beneficiaires.filter(b => b.status === "active");
  } else if (value === "inactive") {
    listeFiltrée = beneficiaires.filter(b => b.status === "inactive");
  }

 afficherBeneficiaires(listeFiltrée);
});



const checkbox=document.getElementById("active");


checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
    alert("La checkbox est cochée")
    } else {
     alert("La checkbox est décochée");
    }
});




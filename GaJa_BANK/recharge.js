
const operateure=document.getElementById("operateure");
const type_operation=document.getElementById("type-operation");
const telephone=document.getElementById("telephone");
const solde_recharge=document.getElementById("solde_recharge");
const sauvgarder=document.getElementById("sauvgarder");
const recharger=document.getElementById("recharger");
const annuler=document.getElementById("annuler");

const regexN=/^[0-9]{10}$/;

let userConnected = JSON.parse(localStorage.getItem("userConnected"));
let identifiant=userConnected.comptes.comptePrincipal.identifiant;

let etat = JSON.parse(localStorage.getItem("etat_carte"))
recharger.addEventListener("click", () => {
   
if(etat.identifiant==identifiant && etat.status==="active"){
   
 if(operateure.value!=="" && type_operation.value!=="" && telephone.value!=="" && solde_recharge.value!=="" && regexN.test(telephone.value)){
    try{
 const recharges=JSON.parse(localStorage.getItem("recharges")) || [];
    
      const recharge={
    operateure:operateure.value,
    date:new Date(),
    type_operation:type_operation.value,
    solde_recharge:solde_recharge.value,
    telephone:telephone.value
   }
   recharges.push(recharge);
   localStorage.setItem("recharges",JSON.stringify(recharges));
    }catch(e){
        alert(e)
    }
   
   alert("reussite");
 }else{
    alert("toutes les chomps doit valide")
 }

}else{
    alert("cette carte invalide");
}
});

annuler.addEventListener("click", () =>{
    operateure.value="";
    type_operation.value="";
    telephone.value="";
    solde_recharge.value="";

})


sauvgarder.addEventListener("change", ()=>{
    if(sauvgarder.checked && telephone.value!==""){

        const favories=JSON.parse(localStorage.getItem("favories")) || [];
        const favorise={
            telephone:telephone.value,
            identifiant:identifiant
        }
        favories.push(favorise);
        localStorage.setItem("favories",JSON.stringify(favories));
    }
    laodefavorise()

});



window.addEventListener("load",laodefavorise);

function laodefavorise(){
 const favories=JSON.parse(localStorage.getItem("favories")) || [];
 
 for(let rech=0;rech<favories.length;rech++){
if(favories[rech].identifiant==identifiant){
try{
const containner=document.getElementById("containner");
const div=document.createElement("div");
div.classList.add("bg-white", "p-2", "flex", "justify-between", "rounded-xl", "w-[70%]") ;
  div.dataset.id =rech;
const p=document.createElement("p");
p.textContent=`${favories[rech].telephone}`;
div.appendChild(p);
const a=document.createElement("a");
a.addEventListener("click",() =>{
    if (confirm("Êtes-vous sûr de vouloir supprimer cette transaction ?")) {
      const id = Number(div.dataset.id);
        const allFavories = JSON.parse(localStorage.getItem("favories")) || [];
            allFavories.splice(id, 1); 
            localStorage.setItem("favories", JSON.stringify(allFavories));
      div.remove();

     }
})
const i=document.createElement("i");
i.classList.add("fa-solid", "fa-trash", "text-[#F26D29]");
a.appendChild(i);
div.appendChild(a);
containner.appendChild(div);
}catch(e){
    alert(e)
}


 }
}





}




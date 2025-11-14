const menuHeaders = document.querySelectorAll(".menu-header");

  menuHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const submenu = header.nextElementSibling; 
      const icon = header.querySelector(".fa-angle-up");

      submenu.classList.toggle("hidden");

      icon.classList.toggle("rotate-180");
    });
  });

  function closeNav(){
 footer.classList.remove("w-[320px]");
 footer.classList.add("w-[0px]");
 }

 function openNav(){
    
 footer.classList.remove("w-[0px]");
 footer.classList.add("w-[320px]");
 }
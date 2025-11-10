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

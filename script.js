function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
const closebutton = document.getElementById("closebutton");
const menubutton = document.getElementById("menubutton");
menubutton.addEventListener("click", openNav);
closebutton.addEventListener("click", closeNav);
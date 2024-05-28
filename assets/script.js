var Loginmenu = document.getElementById("Loginmenu");
var Registermenu = document.getElementById("Registermenu");

document.getElementById("loginButton").addEventListener("click", function() {
    Registermenu.style.display = "none"
    if (Loginmenu.style.display === "block") {
        // Se aberto, oculta o menu
        Loginmenu.style.display = "none";
      } else {
        // Se fechado, exibe o menu
        Loginmenu.style.display = "block";
      }
});

document.getElementById("registerButton").addEventListener("click", function() {

    Loginmenu.style.display = "none"
    if (Registermenu.style.display === "block") {
        // Se aberto, oculta o menu
        Registermenu.style.display = "none";
      } else {
        // Se fechado, exibe o menu
        Registermenu.style.display = "block";
      }
});

document.getElementById("loginButtonDropdown").addEventListener("click", function() {
  Registermenu.style.display = "none"
  if (Loginmenu.style.display === "block") {
      // Se aberto, oculta o menu
      Loginmenu.style.display = "none";
    } else {
      // Se fechado, exibe o menu
      Loginmenu.style.display = "block";
    }
});

document.getElementById("RegisterButtonDropdown").addEventListener("click", function() {

  Loginmenu.style.display = "none"
  if (Registermenu.style.display === "block") {
      // Se aberto, oculta o menu
      Registermenu.style.display = "none";
    } else {
      // Se fechado, exibe o menu
      Registermenu.style.display = "block";
    }
});

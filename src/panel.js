window.onload = () => {
    collections = ['mapas', 'bestiario', 'itens', 'npcs'];
    collections.forEach(element => {
        registerDropdown(element);
    });
};

function registerDropdown(name) {
  elem = document.getElementById(name);
  elem.addEventListener("click", () => {
    regs = document.getElementById(`regs-${name}`);
    if (regs.className === "regs") {
      regs.className = "regs regs-active";
      document.getElementById(name).className = "col selected";
    } else {
      regs.className = "regs";
      document.getElementById(name).className = "col";
    }
  });
}

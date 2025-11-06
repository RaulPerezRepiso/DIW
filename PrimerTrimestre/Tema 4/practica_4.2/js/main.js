let a = document.getElementById("platform");
let table = document.getElementsByClassName("tabla");

a.addEventListener('mouseenter', () =>{
    table[0].style.display="block";
});

table[0].addEventListener('mouseleave', () => {
    table[0].style.display="none";
}); 

a.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!table[0].matches(':hover')) {
      table[0].style.display = "none";
    }
  }, 100); // pequeño delay para permitir entrar en la tabla
}); 
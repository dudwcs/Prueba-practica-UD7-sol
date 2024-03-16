const base_url ="http://localhost:8000/api/notas";

window.onload=onceLoaded;
function onceLoaded(){
    document.querySelector("#cargarNotasForm").onsubmit=getNotas;
    document.querySelector("#crearForm").onsubmit=confirmCrear;
}
const base_url = "http://localhost:8000/api/notas";

const mi_back_end_url = "http://localhost:3000/controller/FrontController.php?controller=Nota&action=create";

let prohibiciones = ["manzana", "banana", "kiwi"];


/**
 * Muestra u oculta un mensaje en función de show en el html_id
 * @param {string} msg Mensaje a mostrar
 * @param {boolean} show true para mostrar, false en caso contrario
 * @parma {string} html_id id del elemento html donde se mostrará/ocultará el mensaje
 * @parma {string} tipo de alerta de bootstrap
 */
function showMsg(msg, show, html_id, type) {
    var divMsg = document.getElementById(html_id);
    if (show) {
        divMsg.innerHTML = msg;
        divMsg.classList.remove('d-none');
        divMsg.classList.add(type);
        // //setTimeout establece un temporizador que ejecuta una función o una pieza de código específica una vez que expira el temporizador.
        // setTimeout(function () {
        //     divMsg.innerHTML = '';
        //     divMsg.classList.add('d-none');
        // }
        // //El tiempo, en milisegundos, que el temporizador debe esperar antes de que se ejecute la función o el código especificado
        // , 2000);
    } else {
        divMsg.innerHTML = '';
        divMsg.classList.add('d-none');
    }
}
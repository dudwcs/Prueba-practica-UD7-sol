// window.onload = onceLoaded;
// function onceLoaded() {

//     crearNotasForm = document.querySelector("#crearForm");
//     if (crearNotasForm) {
//         crearNotasForm.onsubmit = function (event) {
//             event.preventDefault();
//             if (validarTitulo()) {
//                 confirmCrear(event);
//             }
//             else {
//                 showMsg("No se permite la creación de notas que contengan: " + prohibiciones.join(", "), true, "div-msg", "alert-info");
//             }
//         }

//     }
// }

function confirmCrear() {
 
    showModal("modal", "Confirmación creación", "Va usted a crear una nueva nota, ¿está usted seguro/a?", null, null, crearNota, null);



}

function crearNota() {
    title_element = document.querySelector("#title");

    data = {
        "title": title_element.value
    }

    const request = new Request(base_url, {
        method: "POST",
        body: JSON.stringify(data)
    });

    fetch(request)
        .then(response => {
            if (response.status === 201) {
                showMsg('La nota se ha creado con éxito', true, 'div-msg', 'alert-success');
            }
            else {
                showMsg('La nota no se ha podido crear', true, 'div-msg', 'alert-danger');
            }
            return response.json();
        }
        )
        .then(data => {
           console.log('datos creados: ' + JSON.stringify(data));
           crearNota2(data);
        }
        )
        .catch(error => console.error('Ha ocurrido un error' + error));
}

function validarTitulo() {
    var title_element = document.querySelector("#title");
    for (i = 0; i < prohibiciones.length; i++) {
        if (title_element.value && title_element.value.toLowerCase().includes(prohibiciones[i])) {
            return false;
        }    
    }
    return true;
}

function crearNota2(nota){
    const request = new Request(mi_back_end_url, {
        method: "POST",
        body: JSON.stringify(nota)
    });

    fetch(request)
    .then(response => response.json())
    .then(data=> console.log(data))
    .catch(error => console.error("Ha ocurrido un error" + error));

}
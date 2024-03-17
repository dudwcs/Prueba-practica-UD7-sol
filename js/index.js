window.onload = onceLoaded;
function onceLoaded() {
    getNotas();

    let btnCrearNota = document.querySelector("#btnCrearNota");
    btnCrearNota.onclick = mostrarCrearForm;

    crearNotasForm = document.querySelector("#crearForm");

    crearNotasForm.onsubmit = function (event) {
        event.preventDefault();
        if (validarTitulo()) {
            confirmCrear(event);
        }
        else {
            showMsg("No se permite la creación de notas que contengan: " + prohibiciones.join(", "), true, "div-msg", "alert-info");
        }
    }


}

function getNotas() {

    console.log('Get notas');

    fetch(base_url)
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log(data);
            createList(data);
        }
        )
        .catch(error => console.error('Ha ocurrido un error' + error));
}

function createList(data) {
    section_notas_element = document.querySelector("#notas-section");
    div_element = document.querySelector("#notas");
    let ol_element = document.createElement("ol");
    for (i = 0; i < data.length; i++) {
        let li_element = document.createElement("li");
        li_element.innerText = data[i].id + ' ' + data[i].title + ' ' + data[i].completed;
        ol_element.appendChild(li_element)
    }
    div_element.innerHTML = '';
    div_element.appendChild(ol_element);

    //section_notas_element.classList.toggle('d-none');
    // div_element.classList.toggle('d-none');
}

function mostrarCrearForm() {
    let crear_section = document.querySelector("#crear-section");
    crear_section.classList.toggle('d-none');
}




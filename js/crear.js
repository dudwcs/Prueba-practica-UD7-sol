

function confirmCrearNotaLocal(data) {
    showModal("modal", "Confirmación creación en local", "Va usted a crear una nueva nota en el servidor local, ¿está usted seguro/a?",
        null, null, function () {
            crearNotaLocal(data);
        }, null);
}

function crearNotaApiRemota() {
    title_element = document.querySelector("#title");

    data = {
        "title": title_element.value
    }

    const request = new Request(REMOTE_API_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });

    fetch(request)
        .then(response => {
            if (response.status === 201) {
                showMsg('La nota se ha creado con éxito en la Api remota', true, 'div-msg', false);
            }
            else {
                showMsg('La nota no se ha podido crear en la  Api remota', true, 'div-msg', false);
            }
            return response.json();
        }
        )
        .then(data => {
            console.log('datos creados: ' + JSON.stringify(data));
            confirmCrearNotaLocal(data);
        }
        )
        .catch(error => console.error('Ha ocurrido un error' + error));
}

function validarTitulo() {
    let title_element = document.querySelector("#title");
    return (title_element.value === TITULO_PERMITIDO);
}

function crearNotaLocal(nota) {
    const formData = new FormData();
    //enviamos datos nota sin id
    formData.append("title", nota.title);
    formData.append("completed", nota.completed);
    formData.append("updatedAt", nota.updatedAt);
    formData.append("createdAt", nota.createdAt);

    const request = new Request(LOCAL_BACKEND_URL, {
        method: "POST",
        body: formData
    });

    fetch(request)
        .then(response => response.json())
        .then(data => {

            if (data.id) {
                showMsg("<br/> Se ha creado localmente la nota : " + JSON.stringify(data, null, 10), true, "div-msg", true);
            }
            else {
                showMsg("<br/> Ha habido un error creando la nota localmente: " + data.error, true, "div-msg", true);
            }

        })
        .catch(error => console.error("Ha ocurrido un error" + error));

}
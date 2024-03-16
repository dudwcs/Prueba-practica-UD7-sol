function getNotas(event) {
    event.preventDefault();
    console.log('Get notas');

    fetch(base_url)
        .then(response =>
            response.json()
        )
        .then(data => {
            createList(data);
        }
        )
        .catch(error => console.error('Ha ocurrido un error' + error));
}

function createList(data) {      
   div_element = document.querySelector("#notas");
    let ol_element = document.createElement("ol");
    for (i = 0; i < data.length; i++) {
        let li_element = document.createElement("li");
        li_element.innerText = data[i].id + ' ' + data[i].title + ' ' + data[i].completed;
        ol_element.appendChild(li_element)
    } 
    div_element.innerHTML = '';
    div_element.appendChild(ol_element);
}

function confirmCrear(event){
    event.preventDefault();
    showModal("modal", "Confirmación creación", )

}
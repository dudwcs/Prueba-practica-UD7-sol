<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba UD7 Crear/</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>
</head>

<body>
    <h1>Crear nota</h1>

    <form id="crearForm">
        <div class="form-group">
            <label for="title">Título</label>
            <input class="form-control" id="title" placeholder="Title">

        </div>


        <button type="submit" class="btn btn-primary">Crear</button>
    </form>

    <div class="alert alert-primary d-none" role="alert" id="div-msg">
     Esto es un mensaje que se cambia en función del éxito/fracaso de la operación
    </div>


    <p><a class="link-opacity-100" href="index.php">Volver</a></p>



    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal_title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id='modal_msg'>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        id='opt_cancel'>Cancelar</button>
                    <button type="button" class="btn btn-primary" id='opt_ok'>Aceptar</button>
                </div>
            </div>
        </div>
    </div>



    <script src="js/global.js" type="text/javascript"></script>
    <script src="js/crear.js" type="text/javascript"></script>
    <script src="js/modal.js" type="text/javascript"></script>

</body>

</html>
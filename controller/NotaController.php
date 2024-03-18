<?php

class NotaController
{
    //Cambiar constante TITULO_NOTA_PERMITIDO
    private const TITULO_NOTA_PERMITIDO = "ALGO";
    public string $page_title;
    public string $view;
    private INotaServicio $notaServicio;

    private const VIEW_FOLDER = "nota" . DIRECTORY_SEPARATOR;

    public function __construct()
    {
        $this->view = self::VIEW_FOLDER . 'list_note';
        $this->page_title = '';
        $this->notaServicio = new NotaServicio();
    }

    /* List all notes */

    public function list()
    {
        $this->page_title = 'Listado de notas';
        return $this->notaServicio->getNotas();
    }

    /* Load note for edit */

    public function edit($id = null)
    {
        $this->page_title = 'Editar nota';
        $this->view = self::VIEW_FOLDER . 'edit_note';
        /* Id can from get param or method param */
        if (isset ($_GET["id"])) {
            $id = $_GET["id"];

            $nota = $this->notaServicio->getNoteById($id);
        } else {
            //para creación
            $nota = new Nota();
        }
        return $nota;
    }



    public function create()
    {

        if (isset ($_POST["title"], $_POST["completed"], $_POST["createdAt"], $_POST["updatedAt"])) {
            if ($this->validateTitle(trim($_POST["title"]))) {
                $createdAt = DateTimeImmutable::createFromFormat('Y-m-d\TH:i:sO', $_POST["createdAt"]);
                $updatedAt = DateTimeImmutable::createFromFormat('Y-m-d\TH:i:sO', $_POST["updatedAt"]);
                $nota = new Nota(null, $_POST["title"], $_POST["completed"], $createdAt, $updatedAt);

                $notaGuardada = $this->notaServicio->save($nota);

                return json_encode($notaGuardada);
            } else {
                http_response_code(404);
                $response["error"] = "No se permite ese título";
                return json_encode($response);
            }


        } else {
            http_response_code(404);
            $response["error"] = true;
            return json_encode($response);
        }
    }

    private function validateTitle($title): bool
    {
        return $title === self::TITULO_NOTA_PERMITIDO;
    }


}

?>
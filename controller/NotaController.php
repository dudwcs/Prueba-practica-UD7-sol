<?php

class NotaController
{

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
        $data = json_decode(file_get_contents("php://input"), true);
        if (isset ($data)) {
            if(isset($data["title"], $data["completed"], $data["createdAt"], $data["updatedAt"])){
            $createdAt = DateTimeImmutable::createFromFormat('Y-m-d\TH:i:sO' ,$data["createdAt"]);
            $updatedAt = DateTimeImmutable::createFromFormat('Y-m-d\TH:i:sO' ,$data["updatedAt"]);
            $nota = new Nota(null, $data["title"], $data["completed"], $createdAt, $updatedAt);

            $notaGuardada = $this->notaServicio->save($nota);

            return json_encode($notaGuardada);
            }
            
        }
        http_response_code(404);
        $response["error"]=true;
        return json_encode($response);
    }


}

?>
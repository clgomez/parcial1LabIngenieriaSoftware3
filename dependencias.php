<?php
date_default_timezone_set("America/Bogota");

class dependencia{
    public $nombreDep;
    public $cantidad;
    public $imagen = "./empanada.jpg";

     function __construct($cantidad = 0) {
         $this->cantidad = $cantidad;
        //  $this->fecha = date("Y-m-d H:i:s");
         // $this->fecha = getdate();
        $this->fecha = (new DateTime())->format("Y-m-d H:i:s");
    }
} 
$nombreArchivo = "dependencias.json";
$archivo = file_get_contents($nombreArchivo);
echo $archivo;

exit();


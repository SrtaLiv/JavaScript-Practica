<?php

require './view/view.pais.php';
require './model/model.php';

class paisController{
    private $model;
    private $view;

    function __construct(){
        $this->view = new paisView();
        $this->model = new modelPais();
    }

    public function showPais($id){
        $paises = $this->model->getPais($id); //Obtengo un pais
        $this->view->showPais([$paises]);
    }

    public function showPaises(){
        $paises = $this->model->getPaises(); //Obtengo todos
        $this->view->showPais($paises);
    }
}
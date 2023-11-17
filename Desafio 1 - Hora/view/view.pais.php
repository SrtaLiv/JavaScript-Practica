<?php

class paisView{
    
    public function showPais($paises){
        $count = count($paises);
        // NOTA: el template va a poder
        // acceder a todas las variables y constantes que tienen alcance en esta funcion

        // mostrar el template
        require './templates/paisList.phtml';
    }


    public function showError($error) {
        require './templates/error.phtml';
    }
}

?>

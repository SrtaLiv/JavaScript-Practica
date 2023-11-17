<?php

require_once './controller/paisController.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

$action = 'provincias'; // accion por defecto
if (!empty( $_GET['action'])) {
    $action = $_GET['action'];
}

$params = explode('/', $action);

$controller = new paisController();

switch($params[0]) {
    case 'provincia':
        $controller->showPais($params[1]); //
        break;
    case 'america':
        $controller->showPaises();
        break;
    default:
    break;
}
?>

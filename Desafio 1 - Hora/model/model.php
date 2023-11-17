<?php

class modelPais
{
    private $url;
    private $paises;

    function __construct()
    {
        $this->url = "https://worldtimeapi.org/api/timezone/";
        $this->paises = [
"America/Santarem",
"America/Santiago",
"America/Santo_Domingo",
"America/Sao_Paulo",
"America/Scoresbysund",
"America/Sitka",
"America/St_Johns",
"America/Swift_Current",
"America/Tegucigalpa",
"America/Thule",
"America/Tijuana",
"America/Toronto",
"America/Vancouver",
"America/Whitehorse",
"America/Winnipeg",
"America/Yakutat"
        ];
    }

    /**
     * SEGUNDA 
     */


    public function obtenerConex($timezone)
    {
        $url = $this->url . '/' . $timezone;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            $error_msg = curl_error($ch);
            echo "Error al conectar la API ;c";
        } else {
            curl_close($ch);

            // Formato JSON
            return $paises = json_decode($response, true);;
        }
    }


    public function getPais($id)
    {
        $result = [
            'timezone' =>  $this->paises[$id],
            'datetime' =>  $this->paises[$id],
        ];

        return $result;
    }


    public function getPaises()
    {
        foreach ($this->paises as $url) {
            $result = $this->obtenerConex($url);

            //Separar la provincia
            $prov = explode('/', $url);
            $nombre = end($prov);

            $datetime = $result['datetime'];
            $fecha = substr("$datetime", 0, 10);
            $hora = substr("$datetime", 11, 11);

            $resultArray[] = [
                'timezone' => $nombre,
                'hora' => $hora,
                'fecha' => $fecha
            ];
        }
        return $resultArray;
    }
}

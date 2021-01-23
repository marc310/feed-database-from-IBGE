<?php 
    
    
    // function get_curl($url){
    //     $curl = curl_init();
    //     $url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
        
    //     curl_setopt_array($curl, array(
    //         CURLOPT_URL => $url,
    //         CURLOPT_RETURNTRANSFER => true,
    //         CURLOPT_TIMEOUT => 30,
    //         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //         CURLOPT_CUSTOMREQUEST => "GET",
    //         CURLOPT_HTTPHEADER => array(
    //             "cache-control: no-cache"
    //         ),
    //     ));

    //     $response = curl_exec($curl);
    //     $err = curl_error($curl);
    //     curl_close($curl);

    //     echo $response;
    //     // $response = json_decode($response, true); //because of true, it's in an array
    //     // echo 'Online: '. $response['players']['online'];
    //     // return $response;

    // }


    // escreve dados em arquivo
    function write(){
        error_reporting(E_ALL);

        $data = $_POST['conteudo']; // the key we sent was "something"
        echo $data;
        $f = fopen('file.txt', 'w+');
        fwrite($f, $data);
        fclose($f);
    }

?>
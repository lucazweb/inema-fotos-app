<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: multipart/form-data');

//echo $_FILES['file']['name'];
//echo $_POST['colaborador'];

$path = "fotos/";

if($_FILES['file']){
    //$data = $_POST;
    $colaborador = $_POST['colaborador']; 
    $fotoNome    = $_POST['fotoNome'];
    $local       = $_POST['fotoLocal'];
    $data_registro  = $_POST['fotoData'];
    
    //echo $colaborador . ' - ' . $nomefoto . ' - ' . $local . ' - ' . $data;

    $tmp_name = $_FILES["file"]["tmp_name"];
    $foto_nome_arquivo = $_FILES['file']['name'];
    move_uploaded_file( $tmp_name , "$path" );

}else{
    echo "Algo deu errado, tente novamente;";
}


// if(file_get_contents('php://input')){
//     $data = file_get_contents('php://input');
//     $data = json_decode($data);
//     print_r($data);
//     //$form->setData($data);
//     //$form->handle();
// } else {
//     echo ":0";
// }


?>
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


$dbConfig = array();
$dbConfig['local']['host'] = 'localhost';
$dbConfig['local']['user'] = 'root';
$dbConfig['local']['password'] = 'root';
$dbConfig['local']['database'] = 'agendado';
$table = "inscricao";


?>
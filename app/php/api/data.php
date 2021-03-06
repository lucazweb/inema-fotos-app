<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: multipart/form-data');

require('Connect.class.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    
    $pdo = Connect::Con();
    $sql = "SELECT * FROM fotos";
    $stmt = $pdo->query($sql);
    $res = json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    echo $res;

} elseif($_FILES['file']){
    $path = "fotos/";
    $file = $path . basename($_FILES['file']['name']);
    $tmp_name = $_FILES["file"]["tmp_name"];

    $foto = array();
    $foto["colaborador"] = $_POST["colaborador"];
    $foto["foto_nome"] = $_POST["fotoNome"];
    $foto["foto_local"] = $_POST['fotoLocal'];
    $foto["foto_data_registro"] = $_POST["fotoData"];
    $foto["url"] = $file;
    
    $pdo = Connect::Con();
    $sql = Connect::Store($foto, 'fotos');
    if(!$sql){
        return;
    }else{
        $pdo->query($sql);
        move_uploaded_file( $tmp_name , $file);
        $foto['id'] = $pdo->lastInsertId();
        $foto['url'] = $file;
        // Retornar dados json
        $res = json_encode($foto);
        echo $res;
    }

}else {
    echo "Algo deu errado, tente novamente;"; 
}

 


?>
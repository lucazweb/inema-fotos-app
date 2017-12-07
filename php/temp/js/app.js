angular.module('FotoApp', ['ngFileUpload'])
    .controller('mainCtrl', function($scope, $http, Upload){
        const endpoint = "../api/data.php";
        $scope.enviar = function(foto, file){
            console.log(foto);
            console.log(file);

            Upload.upload({
                url: endpoint,
                file: file,
                data: {
                        colaborador: foto.colaborador,
                        fotoNome: foto.nome,
                        fotoLocal: foto.local,
                        fotoData: foto.data
                    }
            }).then(function (resp) {
                console.log(resp);
                    console.log(resp)   
                //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                }, function (err) {
                    console.log(err);
                    //console.log('Error status: ' + resp.status);
                });            

        };
   
    });
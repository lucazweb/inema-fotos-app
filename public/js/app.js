angular.module('FotoApp', ['ngFileUpload'])
    .controller('mainCtrl', function($scope, $http, Upload){
        const endpoint = "../php/api/data.php";
        $scope.imgStatus = false;
        //$scope.foto = {};
        
        $scope.fecharModal = function(){
            $scope.imgStatus = !$scope.imgStatus;
        }

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
            }).then(function (res) {
                console.log(res);
                $scope.imgurl = "http://localhost/inemaapp/php/api/" + res.data.url;
                angular.element('#myModal').modal('hide');
                $scope.imgStatus = true;
                
                }, function (err) {
                    console.log(err);
                    //console.log('Error status: ' + resp.status);
                });            

        };
   
    });
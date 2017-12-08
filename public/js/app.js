angular.module('FotoApp', ['ngFileUpload'])
    .controller('mainCtrl', function($scope, $http, Upload){
        const endpoint = "../php/api/data.php";
        $scope.imgStatus = false;
        $scope.fotos = [];

        $http.get(endpoint)
            .then(function(res){
                console.log(res);
                $scope.fotos = res.data;
            }, function(err){
                console.log(err);
            });

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
                $scope.imgStatus = true; //  Deixar essa váriavel mais clara
                $scope.visualiza = true;
                }, function (err) {
                    console.log(err);
                });            
        };

        $scope.visualizarImagem = function(index){
            console.log($scope.fotos[index].url);
            $scope.imgurl = "http://localhost/inemaapp/php/api/" + $scope.fotos[index].url;
            $scope.visualiza = true;
        }

        $scope.visualizarListagem = function(){
            $scope.visualiza = !$scope.visualiza;
        }

        $scope.scrollSlider = function(pos){
            angular.element('html').animate({scrollTop: pos}, 800, function() { 
                console.log("Finished animating");
             });
        }

        $scope.esconderSeta = function(){
            angular.element('.botao-navegar-topo').css('opacity', '0');
        }

        $scope.navegarItem = function(event, title){
            console.log(event.target.textContent);
            let offset = angular.element('#'+title).offset();
            let yPos = offset.top;
            $scope.scrollSlider(yPos);
            setTimeout(function(){
                angular.element('.botao-navegar-topo').css('opacity', '0.8');
            }, 2000);    
        }
    });

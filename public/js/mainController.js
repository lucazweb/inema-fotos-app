angular.module('FotoApp')
    .controller('mainCtrl', function($scope, FotosAPI, Upload){
        const endpoint = FotosAPI.getApiurl();
        $scope.imgStatus = false;
        $scope.fotos = [];
        $scope.fotoExibida = {};

    FotosAPI.getFotos()
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
                $scope.foto = '';
                $scope.fotoExibida.colaborador = res.data.colaborador;
                $scope.fotoExibida.nome = res.data.foto_nome;
                $scope.fotoExibida.url = "http://localhost/inemaapp/php/api/" + res.data.url;
                
                angular.element('#myModal').modal('hide');
                $scope.imgStatus = true; //  Deixar essa váriavel mais clara
                $scope.visualiza = true;
                }, function (err) {
                    console.log(err);
                });            
        };

        $scope.visualizarImagem = function(index){
            console.log($scope.fotos[index].url);
            $scope.fotoExibida.colaborador = $scope.fotos[index].colaborador;
            $scope.fotoExibida.nome = $scope.fotos[index].foto_nome;
            $scope.fotoExibida.url = "http://localhost/inemaapp/php/api/" + $scope.fotos[index].url;
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
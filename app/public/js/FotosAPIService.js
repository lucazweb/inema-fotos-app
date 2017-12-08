angular.module('FotoApp')
.factory('FotosAPI', function($http){
    const endpoint = "../php/api/data.php";
    return{

        getApiurl : function(){
            return endpoint;
        },
        getFotos: function(){
            return  $http.get(endpoint);
        }
    }
});
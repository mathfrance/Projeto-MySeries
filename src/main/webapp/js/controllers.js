angular.module('MySeries').controller('SideNavCtrl', function($scope){
})

.controller('SerieCtrl', function($scope, $http){
    $scope.titulo = "Top Series";
    $scope.poster = '';
    var url = "http://www.omdbapi.com/?t=Lost&plot=full";
    var poster = '';
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
       poster = response.data.Poster;
       $scope.poster = poster;
    }, function errorCallback(response) {
       console.log(response);
    });
})

.controller('LoginCtrl', function($scope, $timeout, cfpLoadingBar){
    $scope.login = function(){
        cfpLoadingBar.start();
        $timeout(function () {
            cfpLoadingBar.complete();
            $('#userSettings').removeClass('hide');
            $('#linkLogin').addClass('hide');
            $scope.habilitarPerfil();
            $('.conteudo').addClass('hide');
        }, 3000);
        delete $scope.usuario;
        delete $scope.senha;
    }

    $scope.validaCampos = function(){
        if($scope.usuario == "" || $scope.senha == "" || $scope.usuario == undefined || $scope.senha == undefined){
            return true;
        } else{
            return false;
        }
    }

    $scope.habilitarPerfil = function(){
        $scope.perfilOk == true;
    }
})

.controller('DetalhesSerie', function ($scope, $compile){
     $scope.titulo = "Top Series";
     $scope.abrirDetalhes = function(){
      alert("Aqui")
      var compiledeHTML = $compile("<div dadosSerie></div>");
      console.log(compiledeHTML)
      $("#dadosSerie").append(compiledeHTML);
    };
});
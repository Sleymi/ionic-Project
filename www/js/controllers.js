angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) { 
  //});

  // Form data for the login modal 
  $scope.loginData = {};
 //$rootScope.lang=[{"emission":"Windward","image":"src/img/ahmed.png","desc":"Looking for a better company reporting","myVote":"false","nbvote":45}]
   //var d.emission.ar="arabe";
   //var y.emission.fr="fr";
   //$rootScope.emission

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });  

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*.controller('lang', function($scope,$rootScope) {
 // var ar=[];
  //ar.emission="arabe";
  $rootScope.name="ar";
})*/
.controller('PlaylistsCtrl', function($scope,$rootScope) {
  $scope.playlists = [
    { title: 'Tunisie', id: "tunisie",icon:"ion-android-people" },
    { title: 'Sport', id: "sport" ,icon:"ion-ios-football"},
    { title: 'Technologie', id: "technologie" ,icon:"ion-iphone" },
    { title: 'Monde', id: "monde" ,icon:"ion-ios-world" },
    { title: 'Culture', id: "culture" ,icon:"ion-ios-book-outline"}
  ];
  //$scope.lang=$rootScope.name;
})
.controller('dossiersCtrl', function($scope,$http,$log) {
  //,medicalService
  $scope.dossiers = [
    { title: 'dossier1', id: "1" },
    { title: 'dossier2', id: "2" },
    { title: 'dossier3', id: "3" }
     
    
    
  ];
  $http.get("http://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235").success(function(res){
      $scope.news=res.data;
      $scope.name=res.city_info.name;
      $scope.city_info=res.city_info;
      $log.info(res.city_info);
      
    }); 
  $http.get("http://cnamapplication.alwaysdata.net/getAllDoctors.php").success(function(res){
      
      $log.info(res);
      $scope.m=res;
      
    }); 
  $http.get("res/a.json").success(function(res){
      
     $scope.zitouna=res; 
     $log.info(res);
      
    }); 
 
  

})
.controller('infodossiersCtrl', function($scope) {
  $scope.dossiers = [
    { title: 'dossier1', id: "1",info:'' },
    { title: 'dossier2', id: "2",info:'' },
    { title: 'dossier3', id: "3" ,info:''}
    
    
       
  ];
})
//live control
.controller('LiveCtrl', function($scope,$ionicLoading) {

     
  
})
//map controller
.controller('mapCtrl', function($scope) {
  
})
/*
.controller('newsCtrl', function($scope,$http) {
  $scope.items= [
    {
      "id":"1",
      "image": "data:image/jpeg;base64,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",
      "album": "Junior",
      "artist": "اللاجئون بالسويد يشكون من تضييق الخناق عليهم"
    },
    {
      "id":"2",
      "image": "data:image/jpeg;base64,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",
      "album": "Junior",
      "artist": "Faosi ben Gamra"
    }
  ];
  $http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})*/
.controller('politiqueCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})
.controller('tunisieCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})
.controller('mondeCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})
.controller('sportCtrl', function($scope,$http) {
/*$http.get("res/sport.json").success(function(data){
     $scope.actualit=data;
  });*/
   $http.get("http://localhost:8282/actualite/sport").success(function(data){
     $scope.actualit=data;
  });
})
.controller('technologieCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})
.controller('santeCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})
.controller('cultureCtrl', function($scope,$http) {
$http.get("res/f1.json").success(function(data){
     $scope.actualit=data;
  }); 
})

.controller('emissionsCtrl', function($scope,$http) {
$http.get("res/op.json").success(function(data){
     $scope.emission=data;
  }); 
})
.controller('emissionWatchCtrl', function($scope,$http,$stateParams,$filter,$sce) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/op.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

  $scope.getIframeSrc = function(src) {
          return  $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + src);
        };


})

/*
.controller('newsDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})
*/
.controller('politiqueDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})
.controller('tunisieDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})
.controller('mondeDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})
.controller('sportDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  //$scope.items=$http.get("res/sport.json").success(function(data){
  $scope.items=$http.get("http://localhost:8282/actualite/sport").success(function(data){
  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})

.controller('technologieDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})
.controller('cultureDetailCtrl', function($scope,$http,$stateParams,$filter) {

$scope.detail={};
$scope.detail.id=$stateParams.id;

  $scope.items=$http.get("res/f1.json").success(function(data){

  angular.forEach(data, function(value, key){
         if(value.id == $scope.detail.id){
           console.log("username is thomas");
           $scope.res=value;
           }
         });
  });

})

.controller('SearchCtrl', function($scope, $stateParams) {

  $scope.name="Mohamed Sleymi ";
  $scope.friend="salah";
  /*$scope.calculer=function(){
    $scope.som=$scope.a+$scope.b;
  };*/
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

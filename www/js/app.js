// Ionic Starter App
 
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    } 
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'

      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.Live', {
      url: '/Live',
      views: {
        'menuContent': {
          templateUrl: 'templates/Live.html',
          controller: 'LiveCtrl'
        }
      }
    })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })

    /*.state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
          controller: 'newsCtrl'
        }
      }
    })
    .state('app.newsDetail', {
      url: '/newsDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/newsDetail.html',
          controller: 'newsDetailCtrl'
        }
      }
    })*/
    
    .state('app.politique', {
      url: '/politique',
      views: {
        'menuContent': {
          templateUrl: 'templates/politique.html',
          controller: 'politiqueCtrl'
        }
      }
    })
    .state('app.politiqueDetail', {
      url: '/politiqueDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/politiqueDetail.html',
          controller: 'politiqueDetailCtrl'
        }
      }
    })
    .state('app.tunisie', {
      url: '/tunisie',
      views: {
        'menuContent': {
          templateUrl: 'templates/tunisie.html',
          controller: 'tunisieCtrl'
        }
      }
    })
    .state('app.tunisieDetail', {
      url: '/tunisieDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/tunisieDetail.html',
          controller: 'tunisieDetailCtrl'
        }
      }
    })
    .state('app.monde', {
      url: '/monde',
      views: {
        'menuContent': {
          templateUrl: 'templates/monde.html',
          controller: 'mondeCtrl'
        }
      }
    })
    .state('app.mondeDetail', {
      url: '/mondeDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/mondeDetail.html',
          controller: 'mondeDetailCtrl'
        }
      }
    })
    .state('app.sport', {
      url: '/sport',
      views: {
        'menuContent': {
          templateUrl: 'templates/sport.html',
          controller: 'sportCtrl'
        }
      }
    })
    .state('app.sportDetail', {
      url: '/sportDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/sportDetail.html',
          controller: 'sportDetailCtrl'
        }
      }
    })
    .state('app.technologie', {
      url: '/technologie',
      views: {
        'menuContent': {
          templateUrl: 'templates/technologie.html',
          controller: 'technologieCtrl'
        }
      }
    })
    .state('app.technologieDetail', {
      url: '/technologieDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/technologieDetail.html',
          controller: 'technologieDetailCtrl'
        }
      }
    })

    

     .state('app.culture', {
      url: '/culture',
      views: {
        'menuContent': {
          templateUrl: 'templates/culture.html',
          controller: 'cultureCtrl'
        }
      }
    })

     .state('app.emissions', {
      url: '/emissions',
      views: {
        'menuContent': {
          templateUrl: 'templates/emissions.html',
          controller: 'emissionsCtrl'
        }
      }
    })

    .state('app.emissionWatch', {
      url: '/emissionWatch/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/emissionWatch.html',
          controller: 'emissionWatchCtrl'
        }
      }
    }) 
     
     .state('app.cultureDetail', {
      url: '/cultureDetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/cultureDetail.html',
          controller: 'cultureDetailCtrl'
        }
      }
    })




   .state('app.dossiers', {
      url: '/dossiers',
      views: {
        'menuContent': {
          templateUrl: 'templates/dossiers.html',
          controller: 'dossiersCtrl'
        }
      }
    }) 
  .state('app.single', {
    url: '/playlist/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});



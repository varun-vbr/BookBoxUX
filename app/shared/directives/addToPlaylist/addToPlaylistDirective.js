bookBoxApp.directive("addToPlaylist", function(){
        return{
            restrict: 'AECM',
            templateUrl: '/BookBox/BookBoxUX/app/shared/directives/addToPlaylist/addToPlaylist.html',
            replace: true,
            controller:"addToPlaylistCtrl",
            scope:{
                userId:"=",
                book:"=",
                userName:"="
            }
        }
    })
bookBoxApp.controller("addToPlaylistCtrl",["$scope","$location","$route","$mdDialog", "addToPlaylistService","addToPlaylistDialogService","userManagementService",
                                                                          function($scope, 
                                                                                   $location, 
                                                                                   $route,
                                                                                   $mdDialog,
                                                                                   addToPlaylistService,
                                                                                   addToPlaylistDialogService,    
                                                                                   userManagementService){
                                                                              
     $scope.currUser="";
                        
      $scope.showPlaylistDialog = function(event,userId,userName,book) {
         /* $mdDialog.show({
                  controller: 'addToPlaylistDialogCtrl',
                  templateUrl: '/BookBox/BookBoxUX/app/dialogs/addToPlaylistDialog/addToPlaylistDialog.html',
                  parent: angular.element(document.body),
                  targetEvent: event,
                  clickOutsideToClose:true,
                })*/
             addToPlaylistService.getPlaylistForUser(userId,userName).
             success(function(playlists){debugger;
                addToPlaylistDialogService.setBookSaved(book);
                addToPlaylistDialogService.setPlaylists(playlists); 
                $mdDialog.show({
                  controller: 'addToPlaylistDialogCtrl',
                  templateUrl: '/BookBox/BookBoxUX/app/dialogs/addToPlaylistDialog/addToPlaylistDialog.html',
                  parent: angular.element(document.body),
                  targetEvent: event,
                  clickOutsideToClose:true,
                })}).
             error(function(error){alert("Error!");});
                
       };
                                                                              
     
       
    
}])
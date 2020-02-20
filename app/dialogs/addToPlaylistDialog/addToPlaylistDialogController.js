bookBoxApp.controller("addToPlaylistDialogCtrl",["$scope","$location","$route","addToPlaylistDialogService",
                                                                          function($scope, 
                                                                                   $location, 
                                                                                   $route,
                                                                                   addToPlaylistDialogService){
                    $scope.playlists=addToPlaylistDialogService.getPlaylists();
                    $scope.book=addToPlaylistDialogService.getBookSaved();
                    $scope.playlistArray=[];
                    
                    $scope.findBookByBookId=function(bookId,bookArray){
                        for(var i=0; i<bookArray.length; i++){
                            if(bookArray[i].bookId==bookId){
                                return i;
                            }
                        }
                        return -1;   
                    }
                    
                    $scope.createPlaylistArray=function(currentBook, playlistsFromServer){debugger;
                        for(var i=0; i<playlistsFromServer.PLAYLISTS.length; i++){
                            var listItem={id:0, name:"", checked:false};
                            if($scope.findBookByBookId(currentBook.bookId, playlistsFromServer.PLAYLISTS[i].books)>-1){
                               listItem.id=playlistsFromServer.PLAYLISTS[i].playListId;    
                               listItem.name=playlistsFromServer.PLAYLISTS[i].playListName;
                               listItem.checked=true;
                               }
                            else{
                               listItem.id=playlistsFromServer.PLAYLISTS[i].playListId;    
                               listItem.name=playlistsFromServer.PLAYLISTS[i].playListName;
                               listItem.checked=false; 
                            }
                            $scope.playlistArray.push(listItem);  
                        }
                    }
                    
                    $scope.toggleToPlaylist=function(checked, playlistId){debugger;
                       if(checked)
                           $scope.addToPlaylist($scope.book.bookId, playlistId);
                       else
                           $scope.removeFromPlaylist($scope.book.bookId, playlistId);
                    }
                    
                    $scope.addToPlaylist=function(bookId,playListId){
                        var jsonString=JSON.stringify({playlistId:playListId, bookId:bookId});
                        addToPlaylistDialogService.addToPlaylist(jsonString).
                        success(function(result){
                            
                        }).error(function(error){alert(error.errorMsg)});
                    }
                    
                    $scope.removeFromPlaylist=function(bookId,playListId){
                        var jsonString=JSON.stringify({playlistId:playListId, bookId:bookId});
                        addToPlaylistDialogService.removeFromPlaylist(jsonString).
                        success(function(result){
                            
                        }).error(function(error){error.errorMsg});
                    }
                    $scope.init=function(){
                        $scope.createPlaylistArray($scope.book, $scope.playlists);
                    }
                    
                    $scope.init();
                                                                              
                        
     
    
}])
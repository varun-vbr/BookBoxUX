bookBoxApp.controller('playlistsCtrl',['$scope',
                                       'userManagementService',
                                       'playlistsService',
                                       '$location',
                                       'addToPlaylistService',
                                       'anonymousBookService',
                                       'searchBoxService',
                                       'anonymousCategoryService',
                                       function($scope,
                                                 userManagementService, 
                                                 playlistsService,
                                                 $location,
                                                 addToPlaylistService,
                                                 anonymousBookService,
                                                 searchBoxService,
                                                 anonymousCategoryService){
                                           $scope.searchText;
                                           $scope.selectedItem;
                                           $scope.selectedType='None';
                                           $scope.playlistBooks=[];
                                           var userInfo= userManagementService.getCurrentUser(); 
                                           $scope.currentUserId=userInfo.user.userId;
                                           $scope.currentUser=userInfo.user.name;
                                           var previousSelection=0;
                                           var currentSelection=0;
                                           $scope.init=function(){
                                               addToPlaylistService.getPlaylistForUser($scope.currentUserId,$scope.currentUser).
                                                     success(function(playlists){debugger;
                                                            $scope.allPlaylists=playlists.PLAYLISTS;
                                                            for(var i=0; i<$scope.allPlaylists.length; i++){
                                                              $scope.allPlaylists[i].selected=false;  
                                                            }
                                                            $scope.allPlaylists[0].selected=true;
                                                            $scope.playlistBooks=$scope.allPlaylists[0].books;                     
                                                        }).
                                                     error(function(error){alert("Error!");});
                                           }
                                           
                                           $scope.playlistSelListener=function(selectionIndex, playlist){
                                               currentSelection=selectionIndex;
                                               $scope.allPlaylists[previousSelection].selected=false;
                                               $scope.allPlaylists[selectionIndex].selected=true;
                                               previousSelection=currentSelection;
                                               $scope.playlistBooks=playlist.books;
                                           }
                                           
                                           $scope.gotoBookPage=function(book){debugger;
                                                 anonymousBookService.setBookToDisplay(book); 
                                                 $location.path("/bookDetails");
                                           }
                                           
                                            $scope.goToAuthorPage=function(authorName){
                                             searchBoxService.getSearchSuggestions(authorName,"Author").
                                             success(function(bookList){
                                                 var categoryDetails={name:'Books By '+authorName, books:bookList};
                                                 anonymousCategoryService.setCategoryDetails(categoryDetails);
                                                 $location.path("/categories");
                                             }).
                                             error(function(error){alert("Error!");});
                                         }
                                        
                                        $scope.deleteBook=function(book){debugger;
                                            playlistsService.deleteBookFromPlaylist($scope.allPlaylists[currentSelection].playListId,book.bookId).
                                            success(function(msg){debugger;
                                                addToPlaylistService.getPlaylistForUser($scope.currentUserId,$scope.currentUser).
                                                     success(function(playlists){debugger;
                                                            $scope.allPlaylists=playlists.PLAYLISTS;
                                                            for(var i=0; i<$scope.allPlaylists.length; i++){
                                                              $scope.allPlaylists[i].selected=false;  
                                                            }
                                                            $scope.allPlaylists[currentSelection].selected=true;
                                                            $scope.playlistBooks=$scope.allPlaylists[currentSelection].books;                     
                                                        }).
                                                     error(function(error){alert("Error!");});                               
                                            }).
                                            error(function(error){alert("Error!");});
                                        }
                                           $scope.init();
                                       }])              
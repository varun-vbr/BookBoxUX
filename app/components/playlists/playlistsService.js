bookBoxApp.service('playlistsService',['$http',
                                       function($http){
                                          var playlistsService={};
                                           
                                           playlistsService.deleteBookFromPlaylist=function(playlistId,bookId){
                                                var jsonString=JSON.stringify({playlistId:playlistId, bookId:bookId});
                                                return $http.post('http://localhost:8081/BookBoxAPI/actions/playlists/books/remove', jsonString);
                                           }
                                           return playlistsService;
                                       }])
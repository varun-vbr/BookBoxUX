bookBoxApp.service("addToPlaylistService",['$http',function($http){
    var addToPlaylistService={}
    addToPlaylistService.getPlaylistForUser=function(userId, userName){
        return $http.get("http://localhost:8081/BookBoxAPI/actions/playlists/allUserPlaylists/"+userId+"/"+userName); 
    }
    return addToPlaylistService;
}])
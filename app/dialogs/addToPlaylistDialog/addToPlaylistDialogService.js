bookBoxApp.service("addToPlaylistDialogService",['$http',function($http){
    var addToPlaylistDialogService={}
    var bookSaved;
    var allUserPlaylists;
    addToPlaylistDialogService.setBookSaved=function(book){
        bookSaved=book;
    }
    addToPlaylistDialogService.setPlaylists=function(playlists){
        allUserPlaylists=playlists;
    }
    addToPlaylistDialogService.getBookSaved=function(){
        return bookSaved;
    }
    addToPlaylistDialogService.getPlaylists=function(){
        return allUserPlaylists;
    }
    
    addToPlaylistDialogService.addToPlaylist=function(jsonString){
        return $http.post('http://localhost:8081/BookBoxAPI/actions/playlists/books/add', jsonString);
    }
    
    addToPlaylistDialogService.removeFromPlaylist=function(jsonString){
        return $http.post('http://localhost:8081/BookBoxAPI/actions/playlists/books/remove', jsonString);
    }
    
    addToPlaylistDialogService.createPlaylist=function(jsonString){
        return $http.post('http://localhost:8081/BookBoxAPI/actions/playlists/create', jsonString);
    }
    return addToPlaylistDialogService;
}])
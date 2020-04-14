bookBoxApp.service("bookReaderService", ["$http",function($http){
    var bookReaderService={};
    var bookToRead={};
    bookReaderService.setBookToRead=function(book){
        bookToRead=book;
    }
    bookReaderService.getBookToRead=function(){
        return bookToRead;
    }
    
    bookReaderService.getBookProgressDetails=function(bookId, userId){
        return $http.get("http://localhost:8081/BookBoxAPI/actions/currentBook/"+bookId+"/"+userId);
    }
    
    bookReaderService.openBook=function(jsonString){
        return $http.post("http://localhost:8081/BookBoxAPI/actions/openBook", jsonString);
    }
    
    bookReaderService.recordBookProgress=function(jsonString){
        return $http.post("http://localhost:8081/BookBoxAPI/actions/recordProgress", jsonString);
    }
    
    
    return bookReaderService;
    
}])
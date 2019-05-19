    bookBoxApp.service("anonymousBookService", ['$http',function($http){
        var anonymousBookService={};
        var bookToDisplay;
        var reviewCount;
        anonymousBookService.setBookToDisplay=function(book){
            bookToDisplay=book;
        }
        anonymousBookService.getBookToDisplay=function(){debugger;
            return bookToDisplay;
        }
        
         anonymousBookService.getReviewCountFromServer=function(bookId){
            return $http.get("http://localhost:8081/BookBoxAPI/review/reviewCount/"+bookId);    
        }
         
         anonymousBookService.setReviewCount=function(count){
             reviewCount=count;
         }
         
         anonymousBookService.getReviewCount=function(){
             return reviewCount;
         }
         
         anonymousBookService.getReviewsForBook=function(bookId){
            return $http.get("http://localhost:8081/BookBoxAPI/review/allReviews/"+bookId);
         }
         

        return anonymousBookService;
    }])
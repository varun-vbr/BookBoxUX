    bookBoxApp.service("anonymousBookService", ['$http',function($http){
        var anonymousBookService={};
        var bookToDisplay;
        anonymousBookService.setBookToDisplay=function(book){
            bookToDisplay=book;
        }
        anonymousBookService.getBookToDisplay=function(){debugger;
            return bookToDisplay;
        }

        return anonymousBookService;
    }])
bookBoxApp.service("anonymousUserDialogService",['$http',function($http){
    var anonymousUserDialogService={}
    var reviewedBook={};
    anonymousUserDialogService.setBookReviewed=function(book){
        reviewedBook=book;
    }
    anonymousUserDialogService.getBookReviewed=function(){
        return reviewedBook;
    }
    return anonymousUserDialogService;
}])
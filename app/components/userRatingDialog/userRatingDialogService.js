bookBoxApp.service("anonymousUserDialogService",['$http',function($http){
    var anonymousUserDialogService={}
    var reviewedBook={};
    var bookReviews=[];
    anonymousUserDialogService.setBookReviewed=function(book){
        reviewedBook=book;
    }
    anonymousUserDialogService.getBookReviewed=function(){
        return reviewedBook;
    }
    anonymousUserDialogService.setBookReviews=function(reviews){
        bookReviews=reviews;
    }
    anonymousUserDialogService.getBookReviews=function(){
        return bookReviews;
    }
    return anonymousUserDialogService;
}])
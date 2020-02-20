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
    anonymousUserDialogService.submitUserReview=function(userId,rating,comment){
        var json={
	               userId:userId,
	               bookId:reviewedBook.bookId,
	               rating:rating,
	               comment:comment
                }
        var jsonString=JSON.stringify(json);
        return $http.post('http://localhost:8081/BookBoxAPI/review/createReview', jsonString); 
    }
    return anonymousUserDialogService;
}])
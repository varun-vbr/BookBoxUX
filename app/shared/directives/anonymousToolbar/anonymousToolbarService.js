bookBoxApp.service("anonymousToolBarService",['$http',function($http){
    var anonymousToolBarService={}
    
    anonymousToolBarService.getCategoryBooks=function(categoryId){
                        return $http.get("http://localhost:8081/BookBoxAPI/actions/books/"+categoryId, {headers:{'Cache-Control': 'no-cache'}});    
                }

    return anonymousToolBarService;
}])
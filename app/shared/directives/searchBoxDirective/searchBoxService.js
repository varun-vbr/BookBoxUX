    bookBoxApp.service("searchBoxService",['$http', function($http){
                var searchBoxService={};
               searchBoxService.getSearchSuggestions=function(key, searchType){
                   return $http.get("http://localhost:8081/BookBoxAPI/actions/search/"+key+"/"+searchType, {headers:{'Cache-Control': 'no-cache'}});
               }
               return searchBoxService;
            }])
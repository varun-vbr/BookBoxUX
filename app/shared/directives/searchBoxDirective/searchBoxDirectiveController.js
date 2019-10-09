        bookBoxApp.controller("searchBoxDirectiveCtrl", ['$scope',
                                                         '$timeout',
                                                         '$q',
                                                         '$location',
                                                         '$route',
                                                         'searchBoxService',
                                                         'userManagementService',
                                                         'anonymousBookService',
                                                         function($scope,$timeout,$q,$location,$route,searchBoxService, userManagementService,anonymousBookService){


                    $scope.searchResult=[];
                    $scope.selItem;

                    $scope.selectedItemChanged=function(selectedItem){
                        $scope.selItem=selectedItem;
                    }

                    $scope.querySearch=function(searchText, selectedType){debugger;
                        if(searchText.length >= 4){
                            if(selectedType==""){
                                $scope.searchResult=$scope.getSearchResults(searchText, 'None');   
                            }
                            else{
                                $scope.searchResult=$scope.getSearchResults(searchText, selectedType); 
                            }

                        }
                    }


                    $scope.getSearchResults=function(searchText, selectedType){debugger;
                        if(searchText.length >= 4){
                        $scope.searchResult.length=0;         
                        searchBoxService.getSearchSuggestions(searchText, selectedType).
                        success(function (books) {debugger
                        $scope.searchResult = books;
                         })
                        .error(function (error) {
                             alert(error);
                    });
                    var deferred = $q.defer();
                    $timeout(function () { deferred.resolve( $scope.searchResult ); }, Math.random() * 1000, false);
                    return deferred.promise;
                }
               }

                $scope.goToSearchResult=function(){debugger;
                  //var user=userManagementService.getCurrentUser();                                   
                  if($scope.selItem && $scope.searchResult.length>0){
                    
                         anonymousBookService.setBookToDisplay($scope.selItem); 
                         if($location.path()=="/bookDetails"){
                             $route.reload();
                            }
                          else{
                              $location.path("/bookDetails");
                          }
                         
                      
                  }
                }
        }])
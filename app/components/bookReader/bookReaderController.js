bookBoxApp.controller("bookReaderCtrl", ['$scope',
                                       '$location',
                                        'bookReaderService',
                                         'userManagementService',
                                        function($scope,$location,bookReaderService,userManagementService){
                                           $scope.bookToRead=bookReaderService.getBookToRead();
                                            $scope.renderPage=function(pgnum){
                                                var url="/BookBox/BookBoxUX/assets"+$scope.bookToRead.categoryId.categoryBookPath+$scope.bookToRead.localBookUrl;
                                                                   
                                                pdfjsLib.getDocument(url).
                                                  promise.then(function(pdf) {
                                                    return pdf.getPage(pgnum);
                                                  })
                                                  .then(function(page) {
                                                    
                                                    var canvas = document.getElementById('book-canvas');
                                                    // Set scale (zoom) level
                                                    var scale = canvas.width / page.getViewport({scale:1.0}).width;
                                                    
                                                    

                                                    // Get viewport (dimensions)
                                                    var viewport = page.getViewport({scale:scale, });

                                                    // Get canvas#the-canvas
                                                    

                                                    // Fetch canvas' 2d context
                                                    var context = canvas.getContext('2d');

                                                    // Set dimensions to Canvas
                                                    canvas.height = viewport.height;
                                                    //canvas.width = viewport.width;

                                                    // Prepare object needed by render method
                                                    var renderContext = {
                                                      canvasContext: context,
                                                      viewport: viewport
                                                    };

                                                    // Render PDF page
                                                    page.render(renderContext);
                                                  }); 
                                            }
                                            
                                            $scope.openBook=function(bookId, userId, currentPage, numberOfPages, percentageCompleted){
                                                var jsonString= JSON.stringify({bookId:bookId,userId:userId, currentPage:currentPage,
                                                                               numberOfPages:numberOfPages, percentageCompleted:percentageCompleted});
                                                bookReaderService.openBook(jsonString).
                                                success(function(result){}).
                                                error(function(error){alert("Error")});
                                                
                                            }
                                            
                                            $scope.recordProgress=function(bookId, userId, currentPage, numberOfPages, percentageCompleted){
                                                var jsonString= JSON.stringify({bookId:bookId,userId:userId, currentPage:currentPage,
                                                                               numberOfPages:numberOfPages, percentageCompleted:percentageCompleted});
                                                bookReaderService.recordBookProgress(jsonString).
                                                success(function(result){}).
                                                error(function(error){alert("Error")});
                                                
                                            }
                                            
                                            $scope.next=function(){
                                                if($scope.currentPage<$scope.numPages){
                                                    $scope.currentPage++;
                                                    var userId=$scope.user.userId;
                                                    var bookId=bookReaderService.getBookToRead().bookId;
                                                    var percentageCompleted= Math.ceil(($scope.currentPage/$scope.numPages)*100);
                                                    $scope.renderPage($scope.currentPage);
                                                    $scope.recordProgress(bookId, userId, $scope.currentPage, $scope.numPages, percentageCompleted);
                                                }
                                                
                                            }
                                            
                                            $scope.previous=function(){
                                                if($scope.currentPage>1){
                                                    $scope.currentPage--;
                                                    var userId=$scope.user.userId;
                                                    var bookId=bookReaderService.getBookToRead().bookId;
                                                    var percentageCompleted= Math.ceil(($scope.currentPage/$scope.numPages)*100);
                                                    $scope.renderPage($scope.currentPage);
                                                    $scope.recordProgress(bookId, userId, $scope.currentPage, $scope.numPages, percentageCompleted);
                                                }
                                                
                                            }
                                            
                                            $scope.init=function(){debugger;
                                                $scope.user= userManagementService.getCurrentUser().user;
                                                var userId=$scope.user.userId;
                                                var bookId=bookReaderService.getBookToRead().bookId;
                                                bookReaderService.getBookProgressDetails(bookId,userId).
                                                success(function(currentBook){
                                                    if(currentBook.id){
                                                        $scope.currentPage=currentBook.currentPage;
                                                        
                                                        
                                                    }
                                                    else{
                                                        $scope.currentPage=1;
                                                    }
                                                    pdfjsLib.getDocument("/BookBox/BookBoxUX/assets"+$scope.bookToRead.categoryId.categoryBookPath+$scope.bookToRead.localBookUrl).
                                                        promise.then(function(pdf) {debugger;
                                                                                    $scope.numPages=pdf.numPages
                                                                                   var percentageCompleted= Math.ceil(($scope.currentPage/$scope.numPages)*100);
                                                    $scope.renderPage($scope.currentPage);
                                                    $scope.openBook(bookId, userId, $scope.currentPage, $scope.numPages, percentageCompleted);});
                                                    
                                                    
                                                }).
                                                error(function(error){
                                                    alert("Error");    
                                                })
                                                
                                            }
                                            $scope.init();
                                        }])
bookBoxApp.controller("editUserCtrl", ['$scope',
                                       '$location',
                                       'editUserService',
                                       'userManagementService',function($scope,$location,editUserService,userManagementService){
                                           $scope.passwords={
                                               oldPwd:"",
                                               newPwd:"",
                                               confirmedPwd:""
                                           }
                                        $scope.oldPwd="";
                                        $scope.newPwd="";
                                        $scope.confirmedPwd="";
                                          $scope.init=function(){debugger;
                                              var userInfo= userManagementService.getCurrentUser();
                                              if(userInfo){
                                                  $scope.user=userInfo.user;
                                                  $scope.name=$scope.user.name;
                                                  $scope.email=$scope.user.email;
                                                  $scope.creditCard=$scope.user.cardNumber;
                                                  $scope.plan=$scope.user.plan.planName;
                                                  $scope.paymentType=$scope.user.paymenttype.type;
                                                  $scope.passwordReset=false;
                                              }
                                  
                                            }
                                          $scope.setPasswordResetTrue=function(){
                                              $scope.passwordReset=true;
                                          }
                                          
                                          $scope.saveUserDetails=
                                        function(name,email,creditCard,plan,paymentType,oldPassword,newPassword,confirmedPassword){debugger;
                                              var jsonString="";
                                              if($scope.passwordReset){
                                                  if(oldPassword !=  $scope.user.password){
                                                      alert("Invalid Password");
                                                      return;
                                                  }
                                                  if(newPassword != confirmedPassword){
                                                      alert("Passwords don't match");
                                                      return;
                                                  }
                                                  jsonString=JSON.stringify({
                                                      name:name,
                                                      username:$scope.user.username,
                                                      email:email,
                                                      cardNumber:creditCard,
                                                      plan:plan,
                                                      paymentType:paymentType,
                                                      password:newPassword
                                                  });
                                                  
                                              }
                                              else{
                                                  jsonString=JSON.stringify({
                                                      name:name,
                                                      username:$scope.user.username,
                                                      email:email,
                                                      cardNumber:creditCard,
                                                      plan:plan,
                                                      paymentType:paymentType
                                                  });
                                              }
                                              editUserService.editUserDetails(jsonString).
                                              success(function(data){
                                                  alert("Success");
                                                  $scope.passwordReset=false;
                                              }).
                                              error(function(error){
                                                  alert("Error");
                                              });
                                          }
                                          
                                          $scope.init();
                                       }])
bookBoxApp.controller('signUpCtrl', ['$scope', 'signUpService','$mdDialog','$location',
                                     function($scope,
                                               signUpService, $mdDialog, $location){
                                         $scope.name;
                                         $scope.username;
                                         $scope.email;
                                         $scope.password;
                                         $scope.confirmPassword;
                                         $scope.creditCard;
                                         $scope.plan="Elite";
                                         $scope.paymentType="Yearly";
                                         $scope.autoDeduction=true;
                                         
                                         $scope.openPlanDetailDialog=function(ev){
                                             $mdDialog.show({
                                                  templateUrl: '/BookBox/BookBoxUX/app/components/planDetailDialogTmpl/planDetailDialogTmpl.html',
                                                  parent: angular.element(document.body),
                                                  targetEvent: ev,
                                                  clickOutsideToClose:true,
                                                })
                                         }
                                         
                                         $scope.signUp=function(){
                                             var userDetails={};
                                             if($scope.name && $scope.username && $scope.email && $scope.password && $scope.confirmPassword && $scope.creditCard){
                                                userDetails.name=$scope.name;
                                                userDetails.username=$scope.username;
                                                userDetails.email=$scope.email;
                                                userDetails.cardNumber= $scope.creditCard;
                                                userDetails.address="";
                                                userDetails.autoDeduct=$scope.autoDeduction;
                                                userDetails.phone="";
                                                userDetails.pincode="";
                                                userDetails.plan=$scope.plan;
                                                userDetails.paymentType=$scope.paymentType;
                                                if($scope.password===$scope.confirmPassword){
                                                    userDetails.password=$scope.password;
                                                    signUpService.doSignUp(JSON.stringify(userDetails)).
                                                    success(function(data){
                                                alert("Welcome to Book Box! Your account has been created. Please login using user credentials.");
                                                        $location.path('/login');
                                                    }).
                                                    error(function(error){
                                                        alert(error.errorMsg);
                                                    })
                                
                                                }
                                                else{
                                                    alert("Passwords don't match. Please reconfirm the password.");
                                                    return;
                                                }
                                             }
                                             else{
                                                 alert("One or more user details missing.");
                                                 return;
                                             }
                                         }
                                     }]);

/*
{
	"name":"Rao",
	"username":"Rao",
	"email":"rao.cool@email.com",
	"cardNumber":"1234567890",
	"address":"Blore 50",
	"autoDeduct": false,
	"password":"isronasa",
	"phone":"9845763211",
	"pincode":"560050",
	"plan":"Basic",
	"paymentType":"Fortnightly"
}
*/
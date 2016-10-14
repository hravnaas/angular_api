app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location)
{
  $scope.users = [];
  $scope.addUser = function()
  {
    userFactory.create($scope.user, function(users)
    {
      $scope.users = users; // needed?
      $location.url("/index");
    })
  }
}]);

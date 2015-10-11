crowdNotes.controller('NotesController', function($scope, $ionicListDelegate, Items) {
    $scope.items = Items;
    
    $scope.addItem = function(){
        var name = prompt("what do you need");
        if (name) {
            $scope.items.$add({
                'name': name
            });
        }
    };
    
    $scope.closeItem = function(item){
        var itemsRef = new Firebase('https://crowd-notes.firebaseio.com/items/' + item.$id);
        itemsRef.child('status').set('closed');
        $ionicListDelegate.closeOptionButtons();
    };
});

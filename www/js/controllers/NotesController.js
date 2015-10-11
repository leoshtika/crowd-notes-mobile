crowdNotes.controller('NotesController', function($scope, $ionicListDelegate, Items, FIREBASE_ITEMS) {
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
        var itemsRef = new Firebase(FIREBASE_ITEMS + item.$id);
        itemsRef.child('status').set('closed');
        $ionicListDelegate.closeOptionButtons();
    };
    
    $scope.openItem = function(item){
        var itemsRef = new Firebase(FIREBASE_ITEMS + item.$id);
        itemsRef.child('status').set('opened');
        $ionicListDelegate.closeOptionButtons();
    };
    
});

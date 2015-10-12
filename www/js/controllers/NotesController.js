crowdNotes.controller('NotesController', function($scope, $ionicListDelegate, Items, FIREBASE_ITEMS) {
    $scope.items = Items;
    
    $scope.addItem = function(){
        if ($scope.newItem) {
            $scope.items.$add({
                'name': $scope.newItem,
                'status': 'open'
            });
            $scope.newItem = '';
        }
    };
    
    $scope.closeItem = function(item){
        var itemsRef = new Firebase(FIREBASE_ITEMS + item.$id);
        itemsRef.child('status').set('closed');
        $ionicListDelegate.closeOptionButtons();
    };
    
    $scope.openItem = function(item){
        var itemsRef = new Firebase(FIREBASE_ITEMS + item.$id);
        itemsRef.child('status').set('open');
        $ionicListDelegate.closeOptionButtons();
    };
    
});

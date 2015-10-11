crowdNotes.factory('Items', ['$firebaseArray', function ($firebaseArray) {
    var itemsRef = new Firebase('https://crowd-notes.firebaseio.com/items');
    return $firebaseArray(itemsRef);
}]);
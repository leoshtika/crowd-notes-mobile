crowdNotes.factory('Items', function ($firebaseArray, FIREBASE_ITEMS) {
    var itemsRef = new Firebase(FIREBASE_ITEMS);
    return $firebaseArray(itemsRef);
});
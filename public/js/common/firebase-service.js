var FIREBASE_BASE_LINK = 'https://blinding-inferno-6043.firebaseio.com/board/';
angular.module('firebase-service', ['firebase'])
.service('FirebaseService', ['$firebase', 
    function ($firebase) {
        return {
            getLink: getFirebaseLink,
            getSync: getSync
        }
        function getFirebaseLink(board, field) {
            return FIREBASE_BASE_LINK + board + '/' + field;
        }
        function getSync(board, field) {
            var firebaseLink = getFirebaseLink(board, field)
            var ref = new Firebase(firebaseLink);
            return $firebase(ref);
        }
    }
]);
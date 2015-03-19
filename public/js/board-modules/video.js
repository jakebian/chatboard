angular.module('video-module', [])
.directive('videoModule', [function () {

    return {
        scope: {
            videoData: '='
        },
        link: link,
        templateUrl: 'templates/video.html'
    }

    function link(scope, elem) {
        if (scope.videoData.elem) {
            angular.element(scope.videoData.elem).appendTo(elem.find('.video-container'));
        }
    }

}])
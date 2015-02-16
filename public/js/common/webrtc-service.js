var SERVER_URL = 'http://localhost:8888/';

angular.module('webrtc-service', [])
.service('WebRTC', function () {
    var webrtc;

    return {
        getConnection: getConnection,
        startLocalVideo: startLocalVideo
    }

    function getConnection() {
        if (!webrtc) {
            webrtc = newWebrtc();
        }
        return webrtc;
    }

    function startLocalVideo(sessionId) {
        webrtc.config.localVideoEl = 'video-' + sessionId;
        webrtc.startLocalVideo();
    }

    function newWebrtc() {
        var newWebrtc = new SimpleWebRTC({
            // the id/element dom element that will hold remote videos
            remoteVideosEl: '',
            // immediately ask for camera access
            autoRequestMedia: false,

            url: SERVER_URL,

            media: {
                video: true,
                audio: true
            },
        });

        return newWebrtc;
    }
});
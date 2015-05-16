'use strict';

angular.module('codepad-module', [])

.directive('codepadModule', [

             'FirebaseService',
    function (FirebaseService) {

        return {
            scope: {
                moduleData: '='
            },
            link: link,
            template: '<div class="codepad-content"></div>'
        };

        function link(scope, elem) {
            var firepad;
            initFirepad();
            scope.$on('$destroy', destroyFirepad);

            function initFirepad() {
                var fireLink = FirebaseService.getLink(
                    scope.moduleData.boardName,
                    scope.moduleData.moduleKey);
                var firepadRef = new Firebase(fireLink);
                var editor = ace.edit(elem.find('.codepad-content')[0]);
                editor.setTheme("ace/theme/monokai");
                firepad = Firepad.fromACE(firepadRef, editor);
            }

            function destroyFirepad() {
                if (firepad) {
                    firepad.dispose();
                }
            }

        }
    }
]);
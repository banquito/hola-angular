(function () {
    'use strict';

    app.directive('hardPlaceholder', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.click(function (event) {
                    if (elem.val() == attrs.hardPlaceholder) {
                        elem.select();
                    }
                });
            }
        };
    });

    app.directive('exportCsv', function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                download: '@',
            },
            link: function (scope, elem, attrs) {
                scope.$watch('data', function (data) {
                    if (data) {
                        elem.attr('href', 'data:text/csv;charset=utf-8,' + escape(data));
                    }
                });
            }
        };
    });
})();
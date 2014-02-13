(function () {
    'use strict';

    app.filter('toDate', function () {
        return function (epoch) {
            return epoch !== null ? moment(epoch).fromNow() : "";
        };
    });

})();
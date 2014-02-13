(function () {
    'use strict';
    
    app.factory('phoneService', ['restApi', function (restApi) {

        return {
            getAll: function (fnSuccess, fnError) {
                restApi.call({
                    method: 'GET',
                    url: restApi.getApiUrl(['phones', 'phones.json'].join('/'))
                }, fnSuccess, fnError, true);
            }
        };
    }]);
})();
(function () {
    'use strict';

    app.factory('restApi', function ($http) {
        var baseUrl = '';
        return {
            getApiUrl: function (path) {
                return baseUrl + path;
            },
            call: function (config, fnSuccess, fnError) {
                $http(config).success(function (data, status, headers, config) {
                    if (fnSuccess) {
                        fnSuccess(data, status, headers, config);
                    }
                }).error(function (data, status, headers, config) {
                    if (fnError) {
                        fnError(data, status, headers, config);
                    }
                });
            }
        };
    });
})();
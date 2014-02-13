(function () {
    'use strict';

    app.factory('RestApi', function ($http, logout) {
        var baseUrl = '/* @echo baseRestApiUrl */';
        return {
            getApiUrl: function (path) {
                return baseUrl + 'api/v1/' + path;
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
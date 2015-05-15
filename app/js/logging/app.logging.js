/**
 * Created by Nicklas.Vind on 15-05-2015.
 */
'use strict';
(function (app) {
    app.module = (function () {
        var publicApi = {
            DefaultName: "Bill Nye"
        };
        publicApi.LogName = function (name) {
            var nameToLog = name || this.DefaultName;
            app.log(nameToLog);
        };
        return publicApi;
    })();
})(NFV.MyApp);

(function (app) {
    app.logging = function () {
        var publicApi = {
            args : arguments
        };
        var _args = arguments;
        var _logOne = function (message) {
            console.log(message);
        };
        var _logMore = function (/*Takes infinite arguments*/) {
            if(arguments.length !== 0){
                for(var i = 0; i < arguments.length; i +=1){
                    _logOne(arguments[i]);
                }
            }
        };
        var _logInitParameters = function () {
            if(_args.length !== 0){
                for(var i = 0; i < _args.length; i +=1){
                    _logOne(_args[i]);
                }
            }else{
                _logOne("No Initial args supplied")
            }
        };
        var _logInitParameters2 = function () {
            if(this.args.length !== 0){
                for(var i = 0; i < this.args.length; i +=1){
                    _logOne(this.args[i]);
                }
            }else{
                _logOne("No Initial args supplied")
            }
        };
        publicApi.logOne = _logOne;
        publicApi.logMore = _logMore;
        publicApi.logInitParams = _logInitParameters;
        publicApi.logInitParams2 = _logInitParameters2;

        return publicApi;

    }

})(NFV.MyApp);
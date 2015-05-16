/**
 * Created by Nicklas.Vind on 15-05-2015.
 */
'use strict';
var NFV = NFV || {};
NFV.MyApp = NFV.MyApp || {};
var app = NFV.MyApp;

var ChangeBackgroundColor = (function (document, $) {
    var publicApi,
        _backgroundColor,
        _$backgroundToChange;
    var init = function (htmlElement) {
            _$backgroundToChange = $(htmlElement);
    };
    var setBackgroundColor = function (bgColor) {
        _backgroundColor = bgColor;
    };
    var changeBackgroundColor = function () {
        _$backgroundToChange.css("background-color",_backgroundColor);
    };

    publicApi = {
        init: init,
        setNewBgColor: setBackgroundColor,
        changeBgColor: changeBackgroundColor
    };
    return publicApi;
})(document, jQuery);

(function (app, document, $) {
    app.TimeFunction = (function () {
      var options = {
          timeslot:"",
          time:"",
          date:"",
          elements:{
              $timeSlot:{},
              $time:{},
              $date:{}
          }
      };
        var _attachjQToElements = function () {
            options.elements.$timeSlot = $(options.timeslot);
            options.elements.$date = $(options.date);
            options.elements.$time = $(options.time);
        };
        var init = function (timeslot, time, date) {
            options.timeslot = timeslot || "#TimeSlot";
            options.time = time || ".time";
            options.date = date || ".date";
            _attachjQToElements();
        };
        var showDate = function () {
            var d = new Date();
            var log = app.logging();
            log.logOne(d.getDate());
            log.logOne(options.date);
            options.elements.$date.html(d.toDateString());
        };
        var publicApi = {
            init: init,
            showDate:showDate
        };
        return publicApi;
    })();
})(NFV.MyApp, document, jQuery);

(function (app, document, $) {
    app.recursiveCalls = (function () {
        var publicApi,
            _$background,
            _currentLoop = 0,
            _bgColor;
        var recursiveOptions = {
            loopsToRun:10,
            timeOut:1000
        };
        var initialize = function (bgElement, bgColor) {
            _bgColor = bgColor;
            _$background = $(bgElement);
        };
        var changeColor = function () {
            _$background.css("background-color",_bgColor);
        };
        var changeColorRecursivelyAugmented = function (timeOut) {
            _currentLoop += 1;
            _bgColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            console.log("Changing colors to : "+_bgColor);
            changeColor();
            setTimeout(function () {
                if(_currentLoop < recursiveOptions.loopsToRun) {
                    changeColorRecursivelyAugmented(timeOut);
                }
                }, timeOut);
            };
        var changeColorRecursively = function () {
            if(recursiveOptions.loopsToRun > _currentLoop){
                _bgColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                console.log("Changing colors to : "+_bgColor);
                changeColor();
                _currentLoop += 1;
                console.log("loops ran through "+_currentLoop + " Loops left "+(recursiveOptions.loopsToRun - _currentLoop));
                return setTimeout(changeColorRecursively,recursiveOptions.timeOut);
            }else{
                _bgColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                console.log("Changing colors to : "+_bgColor);
                console.log("Last run");
                return setTimeout(changeColor, recursiveOptions.timeOut);
            }

        };
      /*  var changeText = function () {
            for(var i = 1; i < recursiveOptions.loopsToRun; i+=1){
                setTimeout(function (nmbr) {
                    console.log(nmbr);
                }(i),1000);
            }
        };*/
        var changeText = function () {
            for(var i = 1; i < recursiveOptions.loopsToRun; i+=1){
                (function (nmbr) {
                    setTimeout(function () {
                        console.log(nmbr);
                    },1000);
                })(i);

            }
        };
        publicApi = {
            init:initialize,
            changeText: changeText,
            options:recursiveOptions,
            changeBgColor:changeColor,
            changeRecursivelyBgColor:changeColorRecursively,
            changeColorRecursivelyAugmented:changeColorRecursivelyAugmented
        };
        return publicApi;
    })();
}(NFV.MyApp, document, jQuery));
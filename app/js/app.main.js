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

NFV.MyApp.Anna = (function (document, $) {
    // Privat vars -->
    var _elementName;

    //jQuery vars -->
    var $element = $(_elementName);

    var setElementName = function (elem) {
        _elementName = elem;
    };

    var AnnaToFat = function () {
        var options = [{el:"p"},{el:"h1"}];
        for(var i = 0; i < options.length; i+=1){
            $(options[i].el).css("font-weight", "bold");
            $(options[i].el).css("font-size", "80px");
            $element.html("Fed");
        }
    };
    var AnnaNormal = function () {
        var options = [{el:"p"},{el:"h1"}];
        for(var i = 0; i < options.length; i+=1){
            $(options[i].el).css("font-weight", "");
            $(options[i].el).css("font-size", "");
        }
    };

    return {
        AnnaToBig:AnnaToFat,
        AnnaNormal: AnnaNormal,
        setElement:setElementName
    }

})(document, jQuery);
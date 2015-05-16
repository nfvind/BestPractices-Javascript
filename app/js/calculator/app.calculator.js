/**
 * Created by Nicklas.Vind on 16-05-2015.
 */
'use strict';
var Calculator = {
     add:function add (a,b) {
         return a+b;
    },
    multi: function multiply (x,y) {
        return x*y;
    },
    sub: function substract (a,b) {
        return a-b;
    },
    divide: function divide (x,y) {
        return x/y;
    },
    init: function (valueField, totalField, submitButton) {
        this.fields.$button = $(submitButton);
        this.fields.$totalField = $(totalField);
        this.fields.$valueField = $(valueField);
        var that = this;
        var event = $._data(this.fields.$button,"events");
console.log(event);
        if(event === undefined){
            this.fields.$button.on('click', function () {

            //    console.log("added a click event handler");
                console.log($._data(this,"events"));
            });
        }else{
            console.log("Event handler already existed on this element");
        }
    },
    fields:{
        $button:"",
        $valueField:"",
        $totalField:""
    }

};
(function (app) {
var augumentedCalc = Object.create(Calculator);
    augumentedCalc.fake = function () {
        console.log("getLost");
    };
    app.Calculator = Object.create(augumentedCalc);
})(NFV.MyApp);



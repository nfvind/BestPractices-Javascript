/**
 * Created by Nicklas.Vind on 15-05-2015.
 */
'use strict';
(function (app) {
    app.SmallMessagingSystem = function (contentId, textFieldId, submitBtnId) {
        var publicApi;
        var button, contentField, textMessageField;
        var options = {
            contentId: contentId || "content",
            textFieldId: textFieldId || "TextField",
            buttonId: submitBtnId || "ButtonId"
        };

        var _submitText = function() {
            console.log("Button clicked");
            if(textMessageField.value !== ""){
                contentField.innerHTML += "<br> "+ textMessageField.value;
                textMessageField.value = "";
            }else{
                alert("please fill out the message inputfield");
            }
        };

        var _init = function () {
            button = document.getElementById(options.buttonId);
            contentField = document.getElementById(options.contentId);
            textMessageField = document.getElementById(options.textFieldId);
            button.addEventListener("click",_submitText,true);
        };

        publicApi = {
            init: _init
        };
        return publicApi;
    }
}(NFV.MyApp));
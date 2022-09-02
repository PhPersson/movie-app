"use strict";
// Philip Persson al4570

//Uppgift 1

var buttonError = document.getElementById("error");
var buttonSuccess = document.getElementById("success");
var buttonInfo = document.getElementById("ifno");

buttonError.addEventListener("click", function(event){

    document.getElementById("message-box").classname = "error";


});
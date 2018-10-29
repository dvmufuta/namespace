/*******************************
Filename: namespace.js
Author: @Dv Mufuta
Description: Namespace Assignment
Date: 2018-10-26
********************************/


var DVMUFUTA = {
    init: function () {

        let div = document.createElement("div");
        div.className = "box";
        div.textContent = "MUFU0004";
        
        document.querySelector("#boxes").appendChild(div);


        div.addEventListener("click", function () {
            div.style.borderColor = "#008000";
            div.style.backgroundColor = "#252A98";
        });
        div.addEventListener("mouseover", function () {
            div.classList.toggle("highlight");
        });
        div.addEventListener("mouseout", function () {
            div.classList.toggle("highlight");
            div.removeAttribute("style");
        });

    }
};


// Function to hide/show the FAQ section
var hideShow_FAQ = function() {
    // Get content sections
    let wrapper = document.getElementById("infoBars-content-wrapper");
    let FirstTime = document.getElementById("FirstTime-content");
    let FAQ = document.getElementById("FAQ-content");
    let ContactUs = document.getElementById("ContactUs-content");
    // Get hideShow buttons
    let FirstTime_arrow = document.getElementById("FirstTime").getElementsByClassName("infoBars-hideShow")[0];
    let FAQ_arrow = document.getElementById("FAQ").getElementsByClassName("infoBars-hideShow")[0];
    let ContactUs_arrow = document.getElementById("ContactUs").getElementsByClassName("infoBars-hideShow")[0];
    // Hide/show content sections
    if (FAQ_arrow.innerHTML === "▼") {
        FAQ_arrow.innerHTML = "▲";
        wrapper.setAttribute("active","false")
        FAQ.setAttribute("active","false")
    } else {
        FAQ_arrow.innerHTML = "▼";
        FAQ.setAttribute("active","true")
        FirstTime_arrow.innerHTML = "▲";
        FirstTime.setAttribute("active","false")
        ContactUs_arrow.innerHTML = "▲";
        ContactUs.setAttribute("active","false")
        wrapper.setAttribute("active","true")
    };
};

// Function to hide/show the Contact Us section
var hideShow_ContactUs = function() {
    // Get content sections
    let wrapper = document.getElementById("infoBars-content-wrapper");
    let FirstTime = document.getElementById("FirstTime-content");
    let FAQ = document.getElementById("FAQ-content");
    let ContactUs = document.getElementById("ContactUs-content");
    // Get hideShow buttons
    let FirstTime_arrow = document.getElementById("FirstTime").getElementsByClassName("infoBars-hideShow")[0];
    let FAQ_arrow = document.getElementById("FAQ").getElementsByClassName("infoBars-hideShow")[0];
    let ContactUs_arrow = document.getElementById("ContactUs").getElementsByClassName("infoBars-hideShow")[0];
    // Hide/show content sections
    if (ContactUs_arrow.innerHTML === "▼") {
        ContactUs_arrow.innerHTML = "▲";
        ContactUs.setAttribute("active","false")
        wrapper.setAttribute("active","false")
    } else {
        ContactUs_arrow.innerHTML = "▼";
        ContactUs.setAttribute("active","true")
        FirstTime_arrow.innerHTML = "▲";
        FirstTime.setAttribute("active","false")
        FAQ_arrow.innerHTML = "▲";
        FAQ.setAttribute("active","false")
        wrapper.setAttribute("active","true")
    };
};

// Function to hide/show the First Time section
var hideShow_FirstTime = function() {
    // Get content sections
    let wrapper = document.getElementById("infoBars-content-wrapper");
    let FirstTime = document.getElementById("FirstTime-content");
    let FAQ = document.getElementById("FAQ-content");
    let ContactUs = document.getElementById("ContactUs-content");
    // Get hideShow buttons
    let FirstTime_arrow = document.getElementById("FirstTime").getElementsByClassName("infoBars-hideShow")[0];
    let FAQ_arrow = document.getElementById("FAQ").getElementsByClassName("infoBars-hideShow")[0];
    let ContactUs_arrow = document.getElementById("ContactUs").getElementsByClassName("infoBars-hideShow")[0];
    // Hide/show content sections
    if (FirstTime_arrow.innerHTML === "▼") {
        FirstTime_arrow.innerHTML = "▲";
        FirstTime.setAttribute("active","false");
        wrapper.setAttribute("active","false")
    } else {
        FirstTime_arrow.innerHTML = "▼";
        FirstTime.setAttribute("active","true")
        FAQ_arrow.innerHTML = "▲";
        FAQ.setAttribute("active","false")
        ContactUs_arrow.innerHTML = "▲";
        ContactUs.setAttribute("active","false")
        wrapper.setAttribute("active","true")
    };
};

// Function to hide/show the FAQ section
var hideShow_FAQ_answer = function(event) {
    let FAQ_question = event.target.closest('.FAQ_question');
    let FAQ_hideShowButton = FAQ_question.querySelector(".FAQ_hideShow");
    let FAQ_answer = FAQ_question.querySelector(".FAQ_answer");

    if (FAQ_question.getAttribute("answer-active") === "true") {
        FAQ_question.setAttribute("answer-active", "false");
        FAQ_hideShowButton.innerHTML = "&#9650;";
    } else {
        FAQ_question.setAttribute("answer-active", "true");
        FAQ_hideShowButton.innerHTML = "&#9660;";
    }
};
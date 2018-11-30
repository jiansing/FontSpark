// @codekit-prepend "fonts.js";


// Variables
var generatedFont;
var generatedWeight;
var fontHistory = [];
var fontWeightHistory = [];


function generateFont() {
    

    //Checks the font options dropdowns
    var selectedFontCategory = document.getElementById("font-category-select").value;
    var selectedFontWeight = document.getElementById("font-weight-select").value;

    // Filters the font list to the selected font category
    if ( selectedFontCategory === "any") {
        var categoryFiltered = fonts;
    }
    else {
        var categoryFiltered = fonts.filter(function (obj) {
            return obj.category === selectedFontCategory;
        });
    }

    // Filters the font list to the selected font weight and generates a font
    if ( selectedFontWeight === "any") {
        var weightFiltered = categoryFiltered;
        generatedFont = weightFiltered[Math.floor(Math.random()*weightFiltered.length)];
        generatedWeight = generatedFont.weights[Math.floor(Math.random()*generatedFont.weights.length)];
    }
    else {
        var weightFiltered = categoryFiltered.filter(function (obj) {
            return obj.weights.includes(selectedFontWeight);
        });
        generatedFont = weightFiltered[Math.floor(Math.random()*weightFiltered.length)];
        generatedWeight = selectedFontWeight;
    }

    // Loads and sets the generated font
    setFont();

    // Adds the font/weight to the front of the font history array
    fontHistory.unshift(generatedFont);
    fontWeightHistory.unshift(generatedWeight);

}


function back() {

   // Checks that there is more than 1 font in the font history array
    if(fontHistory.length > 1) {

        // Sets the font to be the next item in the font history array
        generatedFont = fontHistory[1];
        generatedWeight = fontWeightHistory[1];

        // Loads and sets the selected font
        setFont();

        // Removes the font from the front of the array
        fontHistory.splice(0, 1);
        fontWeightHistory.splice(0, 1);
    };

}


function setFont(){

    // Loads in the font with the Google Fonts embed code
    document.getElementById('current-font').href = generatedFont.src;
    
    // Sets the user input font family and weight
    document.getElementById('user-input').style.fontFamily = generatedFont.family;
    document.getElementById('user-input').style.fontWeight = generatedWeight.slice(0,3);

    // Sets the HTML to display the generated font/weight
    document.getElementById('generatedFont').innerHTML = generatedFont.family;
    document.getElementById('generatedWeight').innerHTML = generatedWeight.substr(4);

    // Sets the "Get font" link
    document.getElementById('get-font-button').href = generatedFont.download;

}


// Loads dark mode's current state
document.body.classList = localStorage.getItem('activeState');
function toggleDarkMode() {
    
    //Toggles dark mode class
    document.body.classList.toggle("dark-mode");

    // Saves dark mode's state
    localStorage.setItem('activeState',document.body.classList);

}


// Type on effect
var i = 0;
var placeholderText = 'Type something...'; 
var typingSpeed = 100;
function typeOnEffect() {

    if (i < placeholderText.length) {
        document.getElementById("user-input").placeholder += placeholderText.charAt(i);
        i++;
        setTimeout(typeOnEffect, typingSpeed);
    }

}


//Toggles the font options menu
$("#font-options-toggle").click(function(){
    $("#font-options, #generated-font-info, #options-icon, #checkmark-icon").toggle();
});


//Generate button closes font options menu
$("#generate-button").click(function(){
    if ($("#font-options").is(":visible")==true){
        $("#font-options, #generated-font-info, #options-icon, #checkmark-icon").toggle();
    }
});


// Resets textarea
$('textarea').val(''); 


// Changes textarea to center aligned and full width
$("textarea").on("input", function(){
    if( $(this).val().length > 0 ) {
        $(this).css("text-align","center");
        $(this).css("width","100%");

    }
    else {
        $(this).css("text-align","left");
        $(this).css("width","");
    }
});


// Brings in the dashboard
$("textarea").one("input", function(){
    $('#dashboard > div').fadeToggle();
    $(this).animate({marginTop: '-8%'});
});


// Toggles the extras menu
$("#menu-button").click(function(){
    $("#extras-menu").toggle("slide");
    $("#menu-icon-top-bar").toggleClass("top-bar-rotated");
    $("#menu-icon-bottom-bar").toggleClass("bottom-bar-rotated");
    if(window.matchMedia('(max-width: 500px)').matches) {
        $("#logo-container").fadeToggle("fast");
    };
});



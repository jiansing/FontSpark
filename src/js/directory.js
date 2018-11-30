// @codekit-prepend "app.js";

var sansSerifDirectory = fonts.filter(function (obj) {
    return obj.category === "sansSerif";
  });

var serifDirectory = fonts.filter(function (obj) {
    return obj.category === "serif";
  });

var otherDirectory = fonts.filter(function (obj) {
    return obj.category === "other";
  });

function loadDirectory(){

    for (i = 0; i < sansSerifDirectory.length; i++) { 
        document.getElementById('sans-serif-list').innerHTML += "<div class='font-listing'><div><h3>"+sansSerifDirectory[i].family+"</h3><p>Designed by "+sansSerifDirectory[i].designer+"</div><a href='"+sansSerifDirectory[i].download+"' target='_blank'>Get font &rtrif; </a></div>";
    }
    for (i = 0; i < serifDirectory.length; i++) { 
        document.getElementById('serif-list').innerHTML += "<div class='font-listing'><div><h3>"+serifDirectory[i].family+"</h3><p>Designed by "+serifDirectory[i].designer+"</div><a href='"+serifDirectory[i].download+"' target='_blank'>Get font &rtrif;</a></div>";
    }
    for (i = 0; i < otherDirectory.length; i++) { 
        document.getElementById('other-list').innerHTML += "<div class='font-listing'><div><h3>"+otherDirectory[i].family+"</h3><p>Designed by "+otherDirectory[i].designer+"</div><a href='"+otherDirectory[i].download+"' target='_blank'>Get font &rtrif;</a></div>";
    }

    document.getElementById("fonts-count").innerHTML += fonts.length;
    
}

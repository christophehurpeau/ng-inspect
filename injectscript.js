/* jshint multistr: true */
var script = document.createElement('script');
script.setAttribute("type", "application/javascript");
script.innerHTML = "window._ngInspect_clickedEl = null;\
document.addEventListener(\"mousedown\", function(event){\
    if (event.button == 2) {\
        window._ngInspect_clickedEl = event.target;\
    }\
}, true);";
document.documentElement.appendChild(script);
document.documentElement.removeChild(script);

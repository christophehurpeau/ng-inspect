/* jshint multistr: true */
var script = document.createElement('script');
script.setAttribute("type", "application/javascript");
script.innerHTML = "if (window.angular && window._ngInspect_clickedEl) {\
    console.log(angular.element(window._ngInspect_clickedEl).scope(), window._ngInspect_clickedEl);\
}";
document.documentElement.appendChild(script);
document.documentElement.removeChild(script);

/* jshint multistr: true */
var script = document.createElement('script');
script.setAttribute("type", "application/javascript");
script.innerHTML = "if (window.angular && window._ngInspect_clickedEl) {\
    console.group('ng-inspect');\
    console.log(angular.element(window._ngInspect_clickedEl).scope());\
    console.groupEnd();\
}";
document.documentElement.appendChild(script);
document.documentElement.removeChild(script);

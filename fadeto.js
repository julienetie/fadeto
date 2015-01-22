/**!
 * fadeto
 * @author  Julien Etienne   <julienetie>
 * @license MIT
 */


/*
requestAnimationFrame:
IE 10, FF 33, Chrome, Safari 7.1, opera 26, IOS 7.1, android 4.4, android chrome.

getComputedStyle:
IE 9, FF 33, Chrome, Safari 7.1, opera 26, IOS 7.1, android 4.1, android chrome.

getElementsByClassName:
IE 9, FF 33, Chrome, Safari 7.1, Opera 28, IOS 7.1, android 4.1, android chrome.

**This App supports IE10+, FF33+, Chrome, Safari 7.1+, android 4.1+ and android chrome.

Things to do:

1)  Make polyfils, (feature detect)
2)  Check Memory leaks
3)  Monitor repaints
*/

var fade = (function(window, undefined) {

    var accuracy = 3; //    Decimals
    var assumedFps = 1 / 60; //    assumed frames per second  
        assumedFps = assumedFps.toPrecision(1 + accuracy);

    //  Get current opacity
    function getComputedOpacity(el) {
        var computedOpacity = window.getComputedStyle(el).opacity;
        return computedOpacity;
    }

    //FadeTo 
    function fadeTo(el, rate, fadeToVal, display) {

    	//Set opacity to computed value
        el.style.opacity = getComputedOpacity(el);

        //Self execute fade	
        (function fade() {

            //	Disclaimer: Not a representation of duration, but assumes repaints at assumedFps
            var increments = assumedFps / rate; 
            
            //Fade out then set display
            if (el.style.opacity > fadeToVal) {
                if ((el.style.opacity -= increments) < fadeToVal) {
                    if (el.style.opacity <= 0.01) el.style.display =
                        display;
                } else {
                    requestAnimationFrame(fade);
                }
            } else {
                //Fade in then set display
                var val = parseFloat(el.style.opacity);
                if (((val += increments) < fadeToVal)) {
                    el.style.opacity = val;
                    if (el.style.opacity > 0.99) el.style.display =
                        display;
                    requestAnimationFrame(fade);
                }
            }
        })();
    }

    //Public action
    return {
        to: fadeTo
    };

})(window);
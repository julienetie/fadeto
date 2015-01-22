
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
    
    var assumedFps = 0.01667; // (1 / 60) / speed

    function getComputedOpacity(el) {
        var computedOpacity = window.getComputedStyle(el).opacity;
        return computedOpacity;
    }

    //FadeTo 
    function fadeTo( el, speed, fadeToVal, display ) {

    	//Set opacity to computed value
        el.style.opacity = getComputedOpacity(el);

        //Self executing fade	
        (function fade() {

            //	This is not meant to represent duration, but assumes repaints at 60fps
            var increments = assumedFps / speed; 
            
            //
            if (el.style.opacity > fadeToVal) {
                if ((el.style.opacity -= increments) < fadeToVal) {
                    if (el.style.opacity <= 0.01) el.style.display =
                        display;
                } else {
                    requestAnimationFrame(fade);
                }
            } else {
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

    return {
        to: fadeTo
    };

})(window);


//Use Elements 
var header = document.getElementById("thing");
var otherThing = document.getElementsByClassName("other-thing")[0];

//fade.to( element, speed, fadeToVal, display);
fade.to(header, 3, 0, 'block');   // This is not 3 seconds but approximate assuming repaints at 60fps 
//fade.to(otherThing, 3, 1);  // Display: 'block', 'none', 'inline' or omit the value for the default.

function clickImage (e){
	fade.to(otherThing, 3, 1); 
	e.preventDefalut;
}

otherThing.addEventListener('click',clickImage, false);
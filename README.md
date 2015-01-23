fadeto
==

Fadeto: Fades elements current opacity to a new opacity In a performance 
oriented way without jQuery. 

Demo: Fork it
	[fadeto/fork](https://github.com/julienetie/fadeto/fork)

Why?

	In regards to motion JS animations that use requestAnimationFrame 
	are more fluid and performance friendly than setInterval() & setTimeout. 
	Lack of easing & other logics may also contribute to performance.
	
	[fiddle example](http://jsfiddle.net/calpo/H7EEE/)
	[jsperf](http://jsperf.com/requestanimationframe-vs-setinterval-loop/7)
	
	(jQuery 1.x & 2.x do not use requestAnimationFrame() )


Some pros:

	- Better performance
	- Efficiency for multiple animations
	- Initiates the fade with the current opacity value
	- Fade to any value without defining fadeIn/ fadeOut
	- tweak rate of frames
	- define final display type
	- no lib dependencies


Some cons:

	- Animation duration is approximate
	- Support: 
				IE10+, 
				FF33+, 
				Chrome, 
				Safari 7.1+, 
				opera 26+,
				IOS 7.1+,
				Android Browser 4.4+,
				Android chrome
	- No callbacks (Future update)
	- No easing 


The MIT License (MIT)

Copyright 2015 Julien Etienne juienetie@gmail.com

https://github.com/julienetie/fadeto/blob/master/LICENSE

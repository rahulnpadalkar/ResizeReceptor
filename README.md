# Resize Receptor #

A library which allows you to run code on resize of elemets that you specify. Supports Internet Explorer 11,Microsoft Edge, Mozilla Firefox and Google Chrome out of the box.

ResizeReceptor compiles to an AMD module so you can just require it in your existing projects with requirejs syntax.

### Features: ###

* Flexibility - All elems with same callback, different elems with different callbacks.
* Cross browser support - Works with IE11, Edge, FireFox, Chrome.
* Observer options - You decide which element to observe along with its decendents.

### Sample ###

You can find a working demo in demos folder.

**1. Require ResizeReceptor**

		
		requirejs(["resize-receptor"],function(resizeReceptor)

**2. Initialize RR** 

		resizeReceptor.initialize();
		
**3. Listen to elems and provide callback**


		 resizeReceptor.listenTo(Array.prototype.slice.call(resizeDiv), function(e){
			if(e.elem.offsetHeight > 50){
				e.elem.style.backgroundColor = "green";
			} else {
				e.elem.style.backgroundColor = "red";
			}
    	});


### See it in action ###

##### Works with contenteditable elements. #####

<img src = "https://media.giphy.com/media/9DinKhZ5sgdRS5zPo6/giphy.gif" alt = "If you see this, then something is broken. Open demos instead"/> 

##### Works with dynamically added content. #####

<img src = "https://media.giphy.com/media/fQfSgPFGG2Hl97vbXP/giphy.gif" alt = "If you see this, then something is broken. Open demos instead"/> 

### WIP ###

1. Accept jQuery object instead of Node and accept NodeList instead of array of nodes.
2. Adding more features and fullfill feature requests.


#### <p align="center">Made with :purple_heart: by [Rahul Padalkar](https://twitter.com/rahulnpadalkar)</p> ####

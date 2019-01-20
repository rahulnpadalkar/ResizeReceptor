define('resize.receptor.store',[],function(){

    var resizeStoreObject = {};

    var ResizeStore = function(){};

    ResizeStore.storeDims = function( rrid, dimsObject){

        resizeStoreObject[rrid] = dimsObject;
    }

    ResizeStore.registeredElem = function(rrid){
        return resizeStoreObject.hasOwnProperty(rrid); 
    }

    ResizeStore.getDims = function(rrid) {
        return resizeStoreObject[rrid];
    }

    ResizeStore.updateDims = function(rrid, dimsObject){
        resizeStoreObject[rrid]["width"] = dimsObject["width"];
        resizeStoreObject[rrid]["height"] = dimsObject["height"];
    }

    return ResizeStore;
});
define('resize.receptor.core',['resize.receptor.store'],function(resizeStore) {

    var groupIdToCallbackMap = {};

    //Constructor Call
    var ResizeReceptor = {};

    ResizeReceptor.initialize= function(options) {
        //This 
        if(!options){
            var options = {};
            options["observeElem"]=document.body;
        }else if (!options.observeElem){
            options["observeElem"]=document.body;
        }
        var observer = new MutationObserver(mutationHandler);
        observer.observe(options.observeElem,{
            childList:true,
            subtree:true,
            attributes:true,
            attributeFilter:['style']
        });
    }

    ResizeReceptor.listenTo = function(elements, callback) {    
        
        var that = this;
        that.callback = callback;
         if(elements.constructor === Array ) {
             var groupId = generateUniqueId();
             elements.forEach(function(element) {
                 if(!(element instanceof Element)){
                     throw ('Expected array of DOM elements.');
                 }
                 var rrid = generateUniqueId();
                 element.setAttribute('rrid',groupId + '_' + rrid);
                 resizeStore.storeDims(groupId + '_' + rrid, {height: element.offsetHeight, width: element.offsetWidth});
             });
             groupIdToCallbackMap[groupId] = callback;
         } else if(elements instanceof Element){
            var rrid= generateUniqueId();
            elements.setAttribute('rrid',rrid);
            resizeStore.storeDims(rrid, {height: elements.offsetHeight, width: elements.offsetWidth});
            groupIdToCallbackMap[rrid] = callback;
         } else {
             throw('First parameter passed is neither an array or a DOM Element.Got '+ typeof elements);
         }
    }

    function mutationHandler(mutationList, observer) {
        
        mutationList.forEach(function(mutation) {
            var rrid = mutation.target.getAttribute('rrid');
            if(rrid && resizeStore.registeredElem(rrid)) {
                var storedDims = resizeStore.getDims(rrid);
                if(storedDims.height !== mutation.target.offsetHeight || storedDims.width !== mutation.target.offsetWidth){
                    var e ={};
                    e["elem"] = mutation.target;
                    resizeStore.updateDims(rrid, {height: mutation.target.offsetHeight, width: mutation.target.offsetWidth});
                    rrid.indexOf('_') !== -1 && (rrid = rrid.slice(0, rrid.indexOf('_')))
                    groupIdToCallbackMap.hasOwnProperty(rrid) && groupIdToCallbackMap[rrid](e);
                }
            }
            

        });
    }

    function generateUniqueId() {
        return Math.random().toString(36).replace('0.', '');
    }

    return ResizeReceptor;

});
define('resize-receptor',['resize.receptor.core'], function(resizeReceptor) {'use strict';return resizeReceptor;});

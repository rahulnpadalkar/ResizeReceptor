define('resize.receptor.store',function(){

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
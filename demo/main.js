requirejs(["resize-receptor"],function(resizeReceptor){
    var resizeDiv = document.querySelectorAll('.event-onresize');
    var addTextBtn = document.querySelector('#addText');
    var disconnectBtn = document.querySelector('#disconnect');
    var dDiv = document.querySelector('#dynamic')
    resizeReceptor.initialize();
    resizeReceptor.listenTo(Array.prototype.slice.call(resizeDiv), function(e){
        if(e.elem.offsetHeight > 50){
            e.elem.style.backgroundColor = "green";
        } else {
            e.elem.style.backgroundColor = "red";
        }
    });

    addTextBtn.addEventListener('click', function(e){
        dDiv.textContent = dDiv.textContent + "Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text Dynamic Text";
    });

    disconnectBtn.addEventListener('click', function(e){
        resizeReceptor.stopListening();
    })

})
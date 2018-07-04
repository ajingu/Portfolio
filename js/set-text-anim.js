AFRAME.registerComponent("set-text-anim", {

    init: function(){
        var el = this.el;   
        var textAnimEls = el.getElementsByClassName("textAnim");
        
        el.addEventListener("mouseenter", function open(){
            for(var i=0; i<textAnimEls.length; i++){
                textAnimEls.item(i).emit("textOpen");
            }
        });

        el.addEventListener("mouseleave", function close(){
            for(var i=0; i<textAnimEls.length; i++){
                textAnimEls.item(i).emit("textClose");
            }
        });
    }
});
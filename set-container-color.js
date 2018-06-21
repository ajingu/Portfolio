AFRAME.registerComponent("set-container-color", {
    init: function(){
        var el = this.el;
        
        el.addEventListener("mouseenter", function(){
            el.setAttribute("material", "color", "#4f4f55");
        });

        el.addEventListener("mouseleave", function(){
            el.setAttribute("material", "color", "#22252a");
        });
    }
});
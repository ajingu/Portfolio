AFRAME.registerComponent("set-text-anim", {

    init: function(){
        console.log("set-text-anim.js is loaded");
        var el = this.el;
        var dateEl = el.getElementsByClassName("date")[0];
        var softwareEl = el.getElementsByClassName("software")[0];
        
        if(dateEl.dataset.setTextAnimation && softwareEl.dataset.setTextAnimation){return;}
        dateEl.dataset.setTextAnimation = true;
        softwareEl.dataset.setTextAnimation = true;

        el.addEventListener("mouseenter", function(){
            dateEl.emit("textOpen");
            softwareEl.emit("textOpen");
        });

        el.addEventListener("mouseleave", function(){
            dateEl.emit("textClose");
            softwareEl.emit("textClose");
        });
    }
});


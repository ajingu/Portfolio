//load event

AFRAME.registerComponent("template-load-complete", {

    init: function(){
        $("#loader-bg").delay(3000).fadeOut(800),

        $("#loader").delay(3000).fadeOut(800).queue(function(){
            var bgm = document.getElementById("bgm");
            bgm.volume = 0.4;
            bgm.play();
        })      
    }
});
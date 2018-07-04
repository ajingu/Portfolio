//load event

AFRAME.registerComponent("template-load-complete", {

    init: function(){
        $("#loader-bg").delay(1000).fadeOut(800),

        $("#loader").delay(700).fadeOut(300).queue(function(){
            var bgm = document.getElementById("bgm");
            bgm.volume = 0.4;
            bgm.play();
        })      
    }
});
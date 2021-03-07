var animeBox = document.getElementById("box");
var animeTxtInBox = document.getElementById("txtInBox");

var scrollPos = 0;

window.addEventListener('scroll', (e)=>{
    var elemPos = (document.body.getBoundingClientRect()).top;
    if ( elemPos < scrollPos){

        animeTxtInBox.style.display = "none";
        animeBox.style.width = "50px";

    }else{
      
        animeTxtInBox.style.display = "block";
        animeBox.style.width = "150px";

    }
	scrollPos = elemPos;
});


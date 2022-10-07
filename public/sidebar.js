
function reportWindowSize() {
    var maxWidth = 768;
    var iWidth = window.innerWidth;
    const sideMenu = document.querySelector("aside");

    if(iWidth > maxWidth){
        try{
            sideMenu.style.display = "block";
        }
        catch(e){
            //Ignore if sideMenu does not exist
            ;
        }
    }
    else{
        try{
            sideMenu.style.display = "none";
        }
        catch(e){
            //Ignore if sideMenu does not exist
            ;
        }
    }
}

window.onresize = reportWindowSize;



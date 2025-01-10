
        


const menuitems=document.getElementById("menuitemes");



menuitems.style.maxHeight="0px";


function showmenu() {
// if menu is close open 
    if( menuitems.style.maxHeight=="0px"){


        menuitems.style.maxHeight="300px";

    }

    // else if its open close it
    else{

        menuitems.style.maxHeight="0px";

    }
}


    


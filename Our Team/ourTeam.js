document.querySelector('#menu').addEventListener('click', function(){

    document.querySelector('.rightPanel').style.display = 'block';
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.imagesPresentation').style.opacity = '0.25';
    document.querySelector('.imagesPresentation').style.transition = 'opacity 0.25s ease-in';

});

document.querySelector('.croce').addEventListener('click', function(){

    document.querySelector('.rightPanel').style.display = 'none';
    document.querySelector('#menu').style.display = 'block';
    document.querySelector('.imagesPresentation').style.opacity = '1';

});


//Image 1 animations
/*
document.querySelector('.image-1').addEventListener('click', function(){

    document.querySelector('.image-2').style.opacity = '0.25';
    document.querySelector('.image-3').style.opacity = '0.25';
    
    document.querySelector('.image-1').style.marginTop = '20%';

    document.querySelector('.image-1').style.transition = 'margin 0.15s ease-in-out';

});

document.querySelector('.image-1').addEventListener('mouseleave', function(){

    document.querySelector('.image-2').style.opacity = '1';
    document.querySelector('.image-3').style.opacity = '1';

    document.querySelector('.image-1').style.marginTop = '23%';

    document.querySelector('.imageBehind-1').style.width = '16%';
    document.querySelector('.imageBehind-1').style.height = '43.5%';

});*/


//Images 2 animations
document.querySelector('.image-2').addEventListener('click', function(){

    document.querySelector('.image-1').style.opacity = '0.25';
    document.querySelector('.image-3').style.opacity = '0.25';
    
    document.querySelector('.image-2').style.marginTop = '20%';

    document.querySelector('.image-2').style.transition = 'margin 0.15s ease-in-out';

});

document.querySelector('.image-2').addEventListener('mouseleave', function(){

    document.querySelector('.image-1').style.opacity = '1';
    document.querySelector('.image-3').style.opacity = '1';

    document.querySelector('.image-2').style.marginTop = '23%';

    document.querySelector('.imageBehind-2').style.width = '16%';
    document.querySelector('.imageBehind-2').style.height = '43.5%';

});



//image 3 animation
document.querySelector('.image-3').addEventListener('click', function(){

    document.querySelector('.image-1').style.opacity = '0.25';
    document.querySelector('.image-2').style.opacity = '0.25';
    
    document.querySelector('.image-3').style.marginTop = '20%';

    document.querySelector('.image-3').style.transition = 'margin 0.15s ease-in-out';

});

document.querySelector('.image-3').addEventListener('mouseleave', function(){

    document.querySelector('.image-1').style.opacity = '1';
    document.querySelector('.image-2').style.opacity = '1';

    document.querySelector('.image-3').style.marginTop = '23%';

    document.querySelector('.imageBehind-3').style.width = '16%';
    document.querySelector('.imageBehind-3').style.height = '43.5%';

});



// Cambio di immagine quando hover 
/*document.querySelector('.image-1').addEventListener('mouseover', function(){

    document.querySelector('.image-1').style.backgroundImage = "url('/OutTeamImages/emile.jpg')";

});

document.querySelector('.image-1').addEventListener('mouseleave', function(){

    document.querySelector('.image-1').style.backgroundImage = "url('/OutTeamImages/emiletop.png')";

});*/



document.querySelector('.image-2').addEventListener('mouseover', function(){

    document.querySelector('.image-2').style.backgroundImage = "url('/OutTeamImages/gabriel.jpg')";

});

document.querySelector('.image-2').addEventListener('mouseleave', function(){

    document.querySelector('.image-2').style.backgroundImage = "url('/OutTeamImages/gabriel_top.png')";

});



document.querySelector('.image-3').addEventListener('mouseover', function(){

    document.querySelector('.image-3').style.backgroundImage = "url('/OutTeamImages/sam.jpg')";

});

document.querySelector('.image-3').addEventListener('mouseleave', function(){

    document.querySelector('.image-3').style.backgroundImage = "url('/OutTeamImages/sam_top.png')";

});


// Mostrare la descrizione corrispondente all'immagine schiacciata
/*document.querySelector('.image-1').addEventListener('click', function(){

    document.querySelector('.emile-personDescription').style.display = 'block';
    document.querySelector('.emile-personDescription').style.zIndex = '20';
    document.querySelector('#emileDescription').style.display = 'block';

});

document.querySelector('.image-1').addEventListener('mouseleave', function(){

    document.querySelector('.emile-personDescription').style.display = 'none';
    document.querySelector('#emileDescription').style.display = 'none ';

});*/


document.querySelector('.image-2').addEventListener('click', function(){

    document.querySelector('.personDescription').style.display = 'block';
    document.querySelector('.personDescription').style.zIndex = '20';
    document.querySelector('#gabrielDescription').style.display = 'block';

});

document.querySelector('.image-2').addEventListener('mouseleave', function(){

    document.querySelector('.personDescription').style.display = 'none';
    document.querySelector('#gabrielDescription').style.display = 'none ';

});


document.querySelector('.image-3').addEventListener('click', function(){

    document.querySelector('.sam-personDescription').style.display = 'block';
    document.querySelector('.sam-personDescription').style.zIndex = '20';
    document.querySelector('#samDescription').style.display = 'block';

});

document.querySelector('.image-3').addEventListener('mouseleave', function(){

    document.querySelector('.sam-personDescription').style.display = 'none';
    document.querySelector('#samDescription').style.display = 'none ';

});






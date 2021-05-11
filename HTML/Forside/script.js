window.onscroll = function(e){
    console.log(e.target.scrollingElement.scrollTop);
    if(e.target.scrollingElement.scrollTop > 0){
        // Add all classes relevant for scrolling
        document.querySelector('.header').classList.add('scroll');
        document.querySelector('.logo').classList.add('hidden');


    } else {
        // Remove classes
        document.querySelector('.header').classList.remove('scroll');
        document.querySelector('.logo').classList.remove('hidden');

    }
    
}
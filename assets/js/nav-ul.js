const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const ul = document.querySelector('nav ul');
    const ulLinks = document.querySelectorAll('nav ul li');

    burger.addEventListener('click', () => {
        ul.classList.toggle('ul-active');

        ulLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `ulLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

burger.classList.toggle('toggle');

    });

    
}

navSlide(); 
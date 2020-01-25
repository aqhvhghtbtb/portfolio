function bindEvents() {
    document.addEventListener("initAnimations",function(){
        console.log('burbur');
        animateElements();
    });

    document.addEventListener('scroll', () => {
        animateElements();
    });
}

function animateElements() {
    const components = document.querySelectorAll('.js-viewport-anim');

    if(!components.length) {
        return;
    }

    // Don't run the rest of the code if every component is already visible
    if(!document.querySelectorAll('js-viewport-anim:not(.is-in-viewport)')) {
        return;
    }

    components.forEach((component) => {
        if (component.getBoundingClientRect().top <= window.innerHeight * 0.9 && component.getBoundingClientRect().top > 0) {
            component.classList.add('is-in-viewport');
            setTimeout(() => {
                component.classList.remove('has-anim');
            }, 1000);
        }
    })
}

document.addEventListener("reactReady",function(){
    console.log('kek');
    bindEvents();
    animateElements();
});

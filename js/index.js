const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img.gallery-img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        img.alt = image.alt

        // const caption = document.createElement('figcaption');
        // caption.textContent = image.getAttribute('data-caption');

        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img)

        if(image.dataset.caption){
            const caption = document.createElement('figcaption')
            caption.textContent = image.dataset.caption
            lightbox.appendChild(caption);
        }
        
})
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
});




const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('div.gallery-img > img')
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

let filterItem = document.querySelector('.imgs-links')
let filterImages = document.querySelectorAll('.gallery-img')

window.addEventListener('load', ()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('img-link')){
            document.querySelector('.filter-active').classList.remove('filter-active');
            selectedItem.target.classList.add('filter-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let changeImages = image.getAttribute('data-name');
                if((changeImages == filterName ) || filterName == 'all'){
                    image.style.display='grid'
                }else{
                    image.style.display='none'
                }
            })
        }
    })
})




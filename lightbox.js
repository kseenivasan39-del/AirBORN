const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.className = 'lightbox';
lightbox.innerHTML = '<span class=""lightbox-close"">&times;</span><img class=""lightbox-content"" id=""lightbox-img""><div id=""lightbox-caption"" class=""lightbox-caption""></div>';
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        if (img) {
            lightboxImg.src = img.src;
            lightboxCaption.textContent = caption ? caption.textContent : '';
            lightbox.classList.add('show');
        }
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
    }
});

lightboxImg.addEventListener('contextmenu', e => e.preventDefault());
lightboxImg.style.pointerEvents = 'auto';

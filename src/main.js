import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { markup}  from "./js/render-functions";
import { fetchImage } from "./js/pixabay-api";
export const galleryButton = document.querySelector('.gallery-button');
export const galleryList = document.querySelector('.gallery-list');
export const loader = document.querySelector('.loader');
const input = document.querySelector('.search-input');
const message = document.querySelector('.message');

let newGallery = new SimpleLightbox('.gallery a', {
                        overlayOpacity: 0.8,
                        captionSelector: 'img',
                        captionDelay: 250,
                        captionPosition: 'bottom',
                        captionsData: "alt",
                        className: 'simple-lightbox',
                    });
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let nowPage = 1;
    message.classList.add('is-hidden');
    if (input.value.trim() === "") {
        searchForm.reset();
        return
    } else {
        loader.classList.remove('is-hidden');
        galleryList.innerHTML = "";        
        galleryButton.classList.add('is-hidden');
        fetchImage(input.value, nowPage)
            .then(response => {
                console.log(fetchImage);
                if (response.length === 0) {
                    input.value = '';
                    iziToast.show({
                        id: null,
                        class: '.izi-toast',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        messageColor: '#fff',
                        messageSize: '14px',
                        messageLineHeight: '',
                        backgroundColor: '#EF4040',
                        theme: 'light',
                        color: '',
                        icon: '',
                        iconText: '',
                        iconColor: '',
                        iconUrl: '',
                        maxWidth: 430,
                        zindex: null,
                        layout: 1,
                        balloon: false,
                        close: true,
                        closeOnEscape: false,
                        closeOnClick: false,
                        displayMode: 0,
                        position: 'topRight',
                        target: '',
                        targetFirst: true,
                        timeout: 3000,
                        rtl: false,
                        animateInside: true,
                        drag: true,
                        pauseOnHover: true,
                        resetOnHover: false,
                        progressBar: true,
                        progressBarColor: '',
                        progressBarEasing: 'linear',
                        overlay: false,
                        overlayClose: false,
                        overlayColor: 'rgba(0, 0, 0, 0.6)',
                        transitionIn: 'fadeInUp',
                        transitionOut: 'fadeOut',
                        transitionInMobile: 'fadeInUp',
                        transitionOutMobile: 'fadeOutDown',
                        buttons: {},
                        inputs: {},
                        onOpening: function () { },
                        onOpened: function () { },
                        onClosing: function () { },
                        onClosed: function () { }
                    });
                } else if (response.length < 15) {
                    message.classList.remove('is-hidden');
                    galleryButton.classList.add('is-hidden');
                    input.value = '';
                    searchForm.reset();
                    galleryList.insertAdjacentHTML('afterbegin', markup(response));
                    newGallery.refresh();
                    newGallery.on('open.simplelightbox');
                    input.value = '';
                } else {
                    message.classList.add('is-hidden');
                    galleryList.insertAdjacentHTML('afterbegin', markup(response));
                    newGallery.refresh();
                    newGallery.on('open.simplelightbox');
                    galleryButton.classList.remove('is-hidden');
                    galleryButton.addEventListener('click', async () => { 
        loader.classList.remove('is-hidden');
                        galleryButton.classList.add('is-hidden');
                        nowPage += 1;
        fetchImage(input.value, nowPage)
            .then(response => {
                console.log(response);
                if (response.length < 15) {
                    message.classList.remove('is-hidden');
                    galleryButton.classList.add('is-hidden');
                    input.value = '';
                    searchForm.reset();
                } else {
                    galleryList.insertAdjacentHTML('beforeend', markup(response));
                    newGallery.refresh();
                    newGallery.on('open.simplelightbox');
                    galleryButton.classList.remove('is-hidden');
                }  
            })
            .catch(error => { console.error() })
        .finally(() => {
                loader.classList.add('is-hidden');
    })
    }

)
                }
                loader.classList.add('is-hidden');
                })
            .catch(error => { console.error() })
            .finally(() => {
                //loader.classList.add('is-hidden');
                //input.value = '';
                //searchForm.reset();
    })
    }   
    loader.classList.add('is-hidden');
                //input.value = '';
               // searchForm.reset();
});
/*galleryButton.addEventListener('click', async () => { 
        loader.classList.remove('is-hidden');
    galleryButton.classList.add('is-hidden');
        fetchImage(input.value, nowPage)
            .then(response => {
                console.log(response);
                if (response.length < 15) {
                    message.classList.remove('is-hidden');
                    galleryButton.classList.add('is-hidden');
                    input.value = '';
                    searchForm.reset();
                } else {
                    galleryList.insertAdjacentHTML('beforeend', markup(response));
                    newGallery.refresh();
                    newGallery.on('open.simplelightbox');
                    galleryButton.classList.remove('is-hidden');
                }  
            })
            .catch(error => { console.error() })
        .finally(() => {
                loader.classList.add('is-hidden');
    })
    }

)*/
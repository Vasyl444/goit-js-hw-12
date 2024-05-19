import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { markup}  from "./js/render-functions";
import { imagesUrl } from "./js/pixabay-api";
import { fetchImage } from "./js/pixabay-api";
import axios from 'axios';
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
let newGallery = new SimpleLightbox('.gallery a', {
                        overlayOpacity: 0.8,
                        captionSelector: 'img',
                        captionDelay: 250,
                        captionPosition: 'bottom',
                        captionsData: "alt",
                        className: 'simple-lightbox',
                    }); 
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        searchForm.reset();
        return
    } else {
        gallery.innerHTML = "";
        loader.classList.remove('is-hidden');

        fetchImage(imagesUrl(input.value))
            .then(value => {
                if (value.total === 0) {
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
                        timeout: 300000,
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
                } else {
                    console.log(value.totalHits);
                    gallery.insertAdjacentHTML('afterbegin', markup(value));
                    newGallery.refresh();
                    newGallery.on('open.simplelightbox');                
                }
            })
            .catch(console.error())
            .finally(() => {
                loader.classList.add('is-hidden');
                input.value = '';
                searchForm.reset();
    })
    }   
}); 
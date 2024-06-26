import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { markup } from './js/render-functions';
import { fetchImage } from './js/pixabay-api';
import { imageQuantity } from './js/pixabay-api';
export const galleryButton = document.querySelector('.gallery-button');
export const galleryList = document.querySelector('.gallery-list');
export const loader = document.querySelector('.loader');
const input = document.querySelector('.search-input');
const message = document.querySelector('.message');
const searchForm = document.querySelector('.search-form');
let newPage = 1;
let rect;
let totalPage;
let newGallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionSelector: 'img',
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  className: 'simple-lightbox',
});
searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  newPage = 1;
  message.classList.add('is-hidden');
  if (input.value.trim() === '') {
    searchForm.reset();
    return;
  } else {
    loader.classList.remove('is-hidden');
    galleryList.innerHTML = '';
    galleryButton.classList.add('is-hidden');
    await fetchImage(input.value, newPage)
      .then(response => {
        totalPage = Math.ceil(response.total / imageQuantity);
        if (response.hits.length === 0) {
          input.value = '';
          iziToast.show({
            id: null,
            class: '.izi-toast',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#fff',
            messageSize: '14px',
            messageLineHeight: '',
            backgroundColor: '#e49b63',
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
            timeout: 4000,
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
            onOpening: function () {},
            onOpened: function () {},
            onClosing: function () {},
            onClosed: function () {},
          });
        } else if (newPage === totalPage) {
          galleryButton.classList.add('is-hidden');
          searchForm.reset();
          galleryList.insertAdjacentHTML('afterbegin', markup(response.hits));
          newGallery.refresh();
          newGallery.on('open.simplelightbox');
          message.classList.remove('is-hidden');
          input.value = '';
        } else {
          message.classList.add('is-hidden');
          galleryList.insertAdjacentHTML('afterbegin', markup(response.hits));
          newGallery.refresh();
          newGallery.on('open.simplelightbox');
          galleryButton.classList.remove('is-hidden');
          const galleryItem = document.querySelector('.gallery-item');
          rect = galleryItem.getBoundingClientRect().height;
          newPage = 1;
        }
      })
      .catch(error => {
        searchForm.reset();
        iziToast.show({
          id: null,
          class: '.izi-toast',
          message: `ERROR: ${error.message}`,
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
          timeout: 4000,
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
          onOpening: function () {},
          onOpened: function () {},
          onClosing: function () {},
          onClosed: function () {},
        });
      });
  }
  loader.classList.add('is-hidden');
});
galleryButton.addEventListener('click', async () => {
  loader.classList.remove('is-hidden');
  galleryButton.classList.add('is-hidden');
  newPage += 1;
  window.scrollBy({
    top: rect * 2,
    left: 0,
    behavior: 'smooth',
  });
  await fetchImage(input.value, newPage)
    .then(response => {
      if (newPage === totalPage) {
        galleryList.insertAdjacentHTML('beforeend', markup(response.hits));
        window.scrollBy({
          top: rect * 2,
          left: 0,
          behavior: 'smooth',
        });
        message.classList.remove('is-hidden');
        galleryButton.classList.add('is-hidden');
        input.value = '';
        searchForm.reset();
      } else {
        galleryList.insertAdjacentHTML('beforeend', markup(response.hits));
        window.scrollBy({
          top: rect * 2,
          left: 0,
          behavior: 'smooth',
        });
        newGallery.refresh();
        newGallery.on('open.simplelightbox');
        galleryButton.classList.remove('is-hidden');
      }
    })
    .catch(error => {
      searchForm.reset();
      iziToast.show({
        id: null,
        class: '.izi-toast',
        message: `ERROR: ${error.message}`,
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
        timeout: 4000,
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
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
      });
    });
  loader.classList.add('is-hidden');
});

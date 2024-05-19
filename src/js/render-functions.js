export const markup = function madeMarkup(images) {
    const imagesArray = images.hits;
    console.log("xxxx", images);
    const galleryItems = [];
    imagesArray.forEach(image => {
        galleryItems.push(`<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
            <div class="wrapper">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
            <div class="title-wrapper">
            <p class="title">Likes<span>${image.likes}</span></p>
            <p class="title">Views<span>${image.views}</span></p>
            <p class="title">Comments<span>${image.comments}</span></p>
            <p class="title">Downloads<span>${image.downloads}</span></p>
            </div>
            </div>
            </a>
            </li>`);
        });
    return galleryItems.join("");
};
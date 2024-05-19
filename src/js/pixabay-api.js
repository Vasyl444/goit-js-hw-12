import axios from 'axios';
export const imagesUrl = function (valueFromInput) {
    const searchParams = new URLSearchParams({
        key: '43830110-6528f7a21182a7b65b70041af',
        q: `${valueFromInput}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    return `https://pixabay.com/api/?${searchParams}`;
};
export function fetchImage(value) {
        return fetch(value)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
    };
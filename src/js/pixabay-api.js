import axios from 'axios';
const imageQuantity = 15;
let totalPage = 0;
export async function fetchImage(valueFromInput, page) {
  let result = [];
  console.log(page);
  const response = await axios.get(`https://pixabay.com/api/?`, {
    params: {
      key: '43830110-6528f7a21182a7b65b70041af',
      q: `${valueFromInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imageQuantity,
      page: page,
    }
    });
  if (response.status === 200) {
      return response.data;
  }
}
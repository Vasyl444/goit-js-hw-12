import axios from 'axios';
//let responsePage = 1;
const imageQuantity = 15;
let totalPage = 0;
export async function fetchImage(valueFromInput, responsePage) {
  let result = [];
  console.log(responsePage);
  const response = await axios.get(`https://pixabay.com/api/?`, {
    params: {
      key: '43830110-6528f7a21182a7b65b70041af',
      q: `${valueFromInput}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imageQuantity,
      page: responsePage,
    }
    });
  if (response.status === 200) {
    totalPage = Math.ceil(response.data.total / imageQuantity);
    
    result = result.concat(response.data.hits);
    if (response.data.hits.length < imageQuantity) {
      //responsePage = 1;
      return result;
    } else {
      responsePage += 1;
      return result;
    }   
  }
}
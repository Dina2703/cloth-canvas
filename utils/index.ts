const axios = require("axios");

const fetchItems = async () => {
  const options = {
    method: "GET",
    url: "https://asos-com1.p.rapidapi.com/products/search",
    params: {
      q: "shearling jacket",
    },
    headers: {
      "X-RapidAPI-Key": "e1bc87c509msh0ec0da472f32515p113508jsnc957ac31fa99",
      "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchItems;

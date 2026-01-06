import axios from "axios";

const keyApiUnsplash = "kKjP48dhHcieMjmCv2Z6dQNGWmCOwyuc6XX8iH-msZ4";

export const fetchPhoto = async (query = "cat", page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: keyApiUnsplash,
    },
  });
  return response.data.results;
};

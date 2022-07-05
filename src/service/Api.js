import axios from 'axios';

const API_KEY = '32154ccfbac7bd65481a7123aa380b2c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data;
};

export const getQueryMovies = async (query, page) => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return res.data;
};

export const getMovieDetails = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return res.data;
};

export const getMovieCast = async id => {
  const res = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const getMovieReviews = async (id, page) => {
  const res = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return res.data;
};

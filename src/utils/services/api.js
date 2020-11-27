import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const baseURL = 'https://app-co-backend-statistic.herokuapp.com';

axios.defaults.baseURL = baseURL;

const getAllStatistic = (page = 1, limit = 20) => {
  return axios.get(`/users/statistic?page=${page - 1}&limit=${limit}`, {
    cancelToken: source.token,
  });
};

const getStatisticById = userId => {
  return axios.get(`/users/statistic/${userId}`);
  // return axios.get(`/users/statistic/${userId}?dateFrom="YYYY-MM-DD"&dateTo="YYYY-MM-DD"`);
};

export { getAllStatistic, getStatisticById };

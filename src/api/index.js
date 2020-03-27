import axios from 'axios';
import {BASE_URL} from './constants';

export const getListsCountries = async () => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/all`,
  }).then(response => response.data);
};

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.tictaclearn.org/api',
});

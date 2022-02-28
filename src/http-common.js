import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL ||
    'https://restaurant-review-server.herokuapp.com/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

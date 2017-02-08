const axios = require('axios');
const https = require('https');

module.exports = (username) => {
  const endpoint = `https://owapi.net/api/v3/u/${username}/heroes?platform=psn`;

  return axios.get(endpoint)
    .then(function (response) {
      return response.data;
    })
    .then((res) => {
      return res;
    })
    .catch(function (error) {
      console.log(error);
    })
}
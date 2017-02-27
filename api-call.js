const axios = require('axios');
const https = require('https');

module.exports = (username, platform) => {
  const endpoint = `https://owapi.net/api/v3/u/${username}/blob?platform=${platform}`;

  return axios.get(endpoint)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}
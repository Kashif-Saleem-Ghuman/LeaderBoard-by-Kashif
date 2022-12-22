import URL from './url.js';

const getScore = async () => fetch(URL)
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

export default getScore;
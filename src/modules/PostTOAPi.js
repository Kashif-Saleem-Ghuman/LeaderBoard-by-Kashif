import URL from './url.js';

const postScore = async (userInput) => fetch(URL, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(userInput),
})
  .then((response) => response.json())
  .then((data) => data.result);

export default postScore;

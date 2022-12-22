import getScore from './getFromAPi.js';

const scoreBoard = document.querySelector('.score-list');

const UI = async () => {
  scoreBoard.innerHTML = '';
  const Arr = await getScore();
  Arr.sort((a, b) => b.score - a.score);
  let id = 1;
  Arr.forEach((el) => {
    scoreBoard.innerHTML += `
    <tr>
         <td>${el.user}:</td>
         <td>${el.score}</td>
   </tr>
    `;
    id += 1; // increment the id
  });
};

export default UI;

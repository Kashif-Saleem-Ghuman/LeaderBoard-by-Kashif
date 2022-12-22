import './style.css';
import Leaderboard from './modules/leaderboard.js';
import UI from './modules/Ui.js';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('.refresh-btn');
const addForm = document.querySelector('form');

// instantiating the leaderboard and UI classes
const leaderboard = new Leaderboard();
const userInterface = new UI();

// declaring an empty game id variable
let gameId;

// using the startGame method from the leaderboard class to create a new game

const initiateGame = () => {
  leaderboard
    .startGame('Term Project')
    .then((res) => res.result.split(' '))
    .then((data) => {
      [gameId] = [data[3]];
    });
};

const getScores = () => {
  leaderboard.getScores(gameId).then((response) => userInterface.addToUI(response.result));
};
const postScore = (e) => {
  e.preventDefault();

  leaderboard.postScore(gameId, nameInput.value, scoreInput.value);
  userInterface.clearInputs();
};

document.addEventListener('DOMContentLoaded', initiateGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);
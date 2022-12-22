import postScore from './modules/PostTOAPi.js';
import UI from './modules/Ui.js';
import './style.css';

const refresh = document.querySelector('.refresh-btn');
const addForm = document.querySelector('form');

UI();

refresh.addEventListener('click', UI);

addForm.onsubmit = (e) => {
  e.preventDefault();
  let nameValue = document.querySelector('#name').value;
  const number = document.querySelector('#score').value;
  nameValue = nameValue.slice(0, 1).toUpperCase() + nameValue.slice(1).toLowerCase();
  postScore({
    user: nameValue,
    score: number,
  });
  addForm.reset();
};

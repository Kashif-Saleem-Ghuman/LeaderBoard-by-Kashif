class UI {
  constructor() {
    this.list = document.querySelector('.score-list');
    this.nameInput = document.querySelector('#name');
    this.scoreInput = document.querySelector('#score');
  }

  addToUI(arr) {
    this.list.innerHTML = '';
    arr.forEach((el) => {
      this.list.innerHTML += `
      <tr>
        <td>${el.user}:</td>
        <td>${el.score}</td>
      </tr>
          `;
    });
  }

  clearInputs() {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  }
}

export default UI;

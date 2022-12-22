class Leaderboard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  async startGame(gameName) {
    const responseStart = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await responseStart.json();
    return responseData;
  }

  async getScores(gameId) {
    const responseStart = await fetch(`${this.url}${gameId}/scores/`);
    const responseData = await responseStart.json();
    return responseData;
  }

  async postScore(gameId, name, score) {
    if (name === '' || score === '') {
      alert('Please provide all information');
    }
    const responseStart = await fetch(`${this.url}${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const responseData = await responseStart.json();
    return responseData;
  }
}

export default Leaderboard;

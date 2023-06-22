import gameWallpapers from './gameWallpapers.jpg';
import './style.css';
import loadScores from './modules/loadScores.js';
import saveNewScore from './modules/saveScores.js';

/* Set a background image to the body */
document.body.style.backgroundImage = `url(${gameWallpapers})`;

loadScores();

const formSaveScore = document.querySelector('#add-score-form');
const btnRefresh = document.querySelector('#btn-refresh');

formSaveScore.addEventListener('submit', (event) => {
  event.preventDefault();
  const gameId = localStorage.getItem('game-id');
  const { name, score } = formSaveScore;
  saveNewScore(name.value, Number(score.value), gameId);
  formSaveScore.reset();
});

btnRefresh.addEventListener('click', () => {
  document.querySelector('#refreshing-message').innerHTML = 'Data scores are reloaded!';
  setTimeout(() => {
    document.querySelector('#refreshing-message').innerHTML = '';
  }, 2000);
  loadScores();
});

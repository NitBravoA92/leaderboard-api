import './style.css';
import loadScores from './modules/loadScores';
import saveNewScore from './modules/saveScores';

loadScores();

const formSaveScore = document.querySelector('#add-score-form');
formSaveScore.addEventListener('submit', (event) => {
  event.preventDefault();
  const gameId = localStorage.getItem('game-id');
  const { name, score } = formSaveScore;
  saveNewScore(name.value, Number(score.value), gameId);
  formSaveScore.reset();
});





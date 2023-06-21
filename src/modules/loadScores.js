import newGameId from './generateGameId';
import getScores from './getScores';
import { listRecentScores } from './showScores';

const loadScores = async () => {
  let gameId = localStorage.getItem('game-id');
  if(!gameId) {
    gameId = await newGameId();
    localStorage.setItem('game-id', gameId);
  }
  const allScores = await getScores(gameId);
  listRecentScores(allScores);
}

export default loadScores;
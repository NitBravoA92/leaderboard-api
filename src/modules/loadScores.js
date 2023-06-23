import newGameId from './generateGameId.js';
import getScores from './getScores.js';
import { listRecentScores } from './showScores.js';

const loadScores = async () => {
  let gameId = localStorage.getItem('game-id') || (await newGameId());
  const allScores = await getScores(gameId);
  listRecentScores(allScores);
};

export default loadScores;
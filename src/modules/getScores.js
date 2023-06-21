const getScores = async(gameId) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const dataScores = await response.json();
    return dataScores.result;
  } catch (error) {
    return error;
  }
}

export default getScores;
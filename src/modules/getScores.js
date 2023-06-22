const getScores = async(gameId) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const dataScores = await response.json();
    return dataScores.result;
}

export default getScores;
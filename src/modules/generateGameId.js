const getGameIdFromMessage = (gameIdDetails) => {
  return gameIdDetails
          .replace('Game with ID: ', '')
          .replace(' added.', '');
}

const newGameId = async () => {
  const dateNow = new Date().toUTCString();
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name: `Revolutionary Game - version of ${dateNow}`
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  };
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', options);
    const data = await response.json();
    return getGameIdFromMessage(data.result);
  } catch (error) {
    return error;
  }
}

export default newGameId;

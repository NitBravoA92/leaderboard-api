import { insertScoreInDOM } from './showScores';

const displaySuccessMessage = (message) => {
  const messageContainer = document.querySelector('#show-form-results');
  messageContainer.textContent = message;
  setTimeout(() => { 
    messageContainer.textContent = '';
  }, 4000);
}

const saveNewScore = async (user, score, gameId) => {
  const data = { user, score };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  };
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, options);
  const finalResult = await response.json();
  insertScoreInDOM(data);
  displaySuccessMessage(finalResult.result);
}

export default saveNewScore;
export const insertScoreInDOM = ({ user, score }) => {
  const liElement = document.createElement('li');
  liElement.textContent = `${user}: ${score}`;
  document.querySelector('#scores-list').appendChild(liElement);
};

export const listRecentScores = (scores) => {
  document.querySelector('#scores-list').innerHTML = '';
  scores.forEach((score) => insertScoreInDOM(score));
};

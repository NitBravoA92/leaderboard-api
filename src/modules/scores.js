const insertScoreInDOM = ({ user, score }) => {
  const liElement = document.createElement('li');
  liElement.textContent = `${user}: ${score}`;
  document.querySelector('#scores-list').appendChild(liElement);
};
const listRecentScores = (scores) => {
  scores.forEach((score) => insertScoreInDOM(score));
};

export default listRecentScores;

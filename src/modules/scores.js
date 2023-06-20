const generateScoreMarkup = ({ user, score }) => `<li>${user}: ${score}</li>`;
const insertScoreInDOM = (scores) => {
  const allLiScores = scores.map(score => generateScoreMarkup(score));
  document.querySelector('#scores-list').innerHTML = allLiScores.join('');
}
const listRecentScores = () => {
  const scores = [
    {
      user: "Louis Parker",
      score: 59,
    },
    {
      user: "Robert Mendez",
      score: 20,
    },
    {
      user: "Carmen Bravo",
      score: 75,
    },
    {
      user: "Patrick Linderman",
      score: 90,
    },
    {
      user: "Annie Smith",
      score: 43,
    },
    {
      user: "James Williams",
      score: 81,
    }
  ];
  insertScoreInDOM(scores);
};

export default listRecentScores;

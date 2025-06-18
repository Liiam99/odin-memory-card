import "../styles/scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score">Score: {score}</div>
      <div className="best-score">Best score: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;

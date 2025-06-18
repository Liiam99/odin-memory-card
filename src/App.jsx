import { useState } from "react";
import CardList from "./components/CardList";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const pokemonNames = [
    "Ditto",
    "Chikorita",
    "Eevee",
    "Jynx",
    "Snorlax",
    "Butterfree",
    "Lucario",
    "Mew",
    "Jigglypuff",
    "Ninetales",
    "Raichu",
    "Arbok",
    "Roselia",
    "Lickitung",
    "Pikachu",
    "Starmie",
  ];

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateScore() {
    setScore(score + 1);

    if (score + 1 > bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  function endGame() {
    setScore(0);
  }

  return (
    <>
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardList
        names={pokemonNames}
        updateScore={updateScore}
        endGame={endGame}
      />
    </>
  );
}

export default App;

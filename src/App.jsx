import { useState } from 'react'
import CardList from './components/CardList';
import './App.css'


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
    "Starmie"
  ];

  return (
    <>
      <h1>Memory Game</h1>
      <CardList names={pokemonNames} />
    </>
  )
}

export default App

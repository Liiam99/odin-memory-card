import { useEffect, useMemo, useState } from "react";
import { shuffle } from "../utils";
import "../styles/cardlist.css";

function CardList({ names, updateScore, endGame }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [imageSources, setImageSources] = useState({});

  const sortedNamesString = useMemo(
    () => names.slice().sort().join(","),
    [names],
  );
  const shuffledNames = names.slice();
  shuffle(shuffledNames);

  useEffect(() => {
    let ignore = false;

    async function fetchImages() {
      const names = sortedNamesString.split(",");
      const imgMapper = {};

      const fetches = names.map((name) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => response.json())
          .then((json) => {
            imgMapper[name] =
              json.sprites.other["official-artwork"].front_default;
          }),
      );

      await Promise.all(fetches);

      if (!ignore) {
        setImageSources(imgMapper);
      }
    }

    fetchImages();

    return () => {
      ignore = true;
    };
  }, [sortedNamesString]);

  function cardClickHandler(e) {
    const name = e.currentTarget.name;

    if (clickedCards.includes(name)) {
      setClickedCards([]);
      endGame();
    } else {
      setClickedCards([...clickedCards, name]);
      updateScore();
    }
  }

  return (
    <div className="card-list">
      {shuffledNames.map((name) => (
        <Card
          key={name}
          name={name}
          imgSrc={imageSources[name]}
          onClick={cardClickHandler}
        />
      ))}
    </div>
  );
}

function Card({ name, imgSrc, onClick }) {
  return (
    <button className="card" name={name} onClick={onClick}>
      <img src={imgSrc} alt={name} />
    </button>
  );
}

export default CardList;

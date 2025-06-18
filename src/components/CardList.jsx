import { useEffect, useState } from "react";
import "../styles/cardlist.css";

function CardList({ names }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [imageSources, setImageSources] = useState({});

  useEffect(() => {
    let ignore = false;

    async function fetchImages() {
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
  }, [names]);

  function cardClickHandler(e) {
    const name = e.target.name;

    if (clickedCards.includes(name)) {
      console.log("HKU");
    } else {
      setClickedCards([...clickedCards, e.target.name]);
    }
  }

  return (
    <div className="card-list">
      {names.map((name) => (
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

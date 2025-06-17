import { useState } from "react"


function CardList({ names }) {
    const [clickedCards, setClickedCards] = useState([]);

    function cardClickHandler(e) {
        const name = e.target.name;

        if (clickedCards.includes(name)) {
            console.log('HKU');
        } else {
            setClickedCards([...clickedCards, e.target.name]);
        }
    }

    return (
        <div className="card-list">
            {names.map(name => <Card key={name} name={name} onClick={cardClickHandler} />)}
        </div>
    )
}


function Card({ name, onClick }) {
    return (
        <button className="card" name={name} onClick={onClick}>
            <span>{name}</span>
        </button>
    )
}

export default CardList

import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/extensions
import Card from "./Card";
// import {shuffle} from 'lodash';
import "./Card.css";
/** Imagenes */
import coal from "../../../public/image/coal.png";
import iron from "../../../public/image/iron.png";
import diamond from "../../../public/image/diamond.jpg";
import emerald from "../../../public/image/emerald.jpg";
import gold from "../../../public/image/gold.jpg";
import redstone from "../../../public/image/redstone.jpg";
import lapis from "../../../public/image/lapis.jpg";
import quartz from "../../../public/image/qua.png";

function CardItem() {
	const Images = [
		{ id: 1, src: coal, stat: false },
		{ id: 2, src: iron, stat: false },
		{ id: 3, src: diamond, stat: false },
		{ id: 4, src: emerald, stat: false },
		{ id: 5, src: gold, stat: false },
		{ id: 6, src: redstone, stat: false },
		{ id: 7, src: lapis, stat: false },
		{ id: 8, src: quartz, stat: false },
	]; // .sort(() => Math.random() - 0.5))

	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [cardOne, setCardOne] = useState(null);
	const [cardTwo, setCardTwo] = useState(null);
	const [disabled, disable] = useState(false);

	// Shuffle
	const shuffleCards = () => {
		const shuffledCards = [...Images, ...Images]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCardOne(null);
		setCardTwo(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	// Card
	const handleCard = (card) => {
		if (cardOne === true) {
			setCardTwo(card);
		} else {
			setCardOne(card);
		}
	};
	// Reset
	const resetTurn = () => {
		setCardOne(null);
		setCardTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		disable(false);
	};
	// Comparar
	useEffect(() => {
		if (cardOne && cardTwo) {
			disable(true);
			if (cardOne.src === cardTwo.src) {
				/** if (foundPairs.length + 2 === cards.length) {
		  setWon(true);
		} */
				setCards((prevCards) =>
					prevCards.map((card) => {
						if (card.src === cardOne.src) {
							return { ...card, stat: true };
						}
						return card;
					})
				);
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [cardOne, cardTwo]);

	// Inicio
	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div className="CardItem py-5">
			<h1 className="text-center text-blue pt-5">Memoria</h1>
			<div className="control pt-5 d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
				<div className="control_left pb-lg-0 pb-5">
					<p>Turnos: {turns}</p>
				</div>
				<div className="control_right">
					<button
						type="button"
						className="p-2 outline-btn"
						onClick={shuffleCards}
					>
						Nueva partida
					</button>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="cardpart py-5">
					{cards.map((card) => (
						<Card
							key={card.id}
							card={card}
							handleCard={handleCard}
							active={card === cardOne || card === cardTwo || card.stat}
							disabled={disabled}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CardItem;

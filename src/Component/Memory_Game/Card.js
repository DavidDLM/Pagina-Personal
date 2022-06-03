import React from "react";
import "./Card.css";
import propTypes from "prop-types";
import cover from "../../../public/image/cover.jpg";

export default function Card({ card, handleCard, active, disabled }) {
	const handleClick = () => {
		if (!disabled) {
			handleCard(card);
		}
	};

	Card.propTypes = {
		card: propTypes.string.isRequired,
		handleCard: propTypes.string.isRequired,
		active: propTypes.bool.isRequired,
		disabled: propTypes.bool.isRequired,
	};

	return (
		<div className="card">
			<div className={active ? "active" : ""}>
				<img className="front" src={card.src} alt="" />
				<div
					role="button"
					className="back"
					onClick={() => { }}
					onKeyDown={handleClick}
					tabIndex={0}
				>
					<img src={cover} alt="" />
				</div>
			</div>
		</div>
	);
}

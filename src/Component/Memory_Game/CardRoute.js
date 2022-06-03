import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import CardItem from "./CardItem";
import background from "../../../public/image/background.jpg";

const CardRoute = () => {
	return (
		<div style={{
			background: 'url(' + background + ')',
			backgroundRepeat: 'repeat'
		}}>
			<Topbar />
			<Navbar />
			<CardItem />
			<Footer />
		</div>
	);
};

export default CardRoute;

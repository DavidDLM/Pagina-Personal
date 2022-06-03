import React from "react";
import "./App.css";
import Topbar from "./Component/Topbar/Topbar";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Story from "./Component/Story/Story";
import background from "../public/image/background.jpg";

function App() {
	return (
		<div className="App" style={{
			background: 'url(' + background + ')',
			backgroundRepeat: 'repeat'
		}}>
			<Topbar />
			<Navbar />
			<Story />
			<Footer />
		</div>
	);
}

export default App;

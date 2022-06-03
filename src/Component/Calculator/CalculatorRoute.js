import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Calculator from "./Calculator";
import background from "../../../public/image/background.jpg";

const CalculatorRoute = () => {
    return (
        <div style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'repeat'
        }}>
            <Topbar />
            <Navbar />
            <Calculator />
            <Footer />
        </div>
    );
};

export default CalculatorRoute;

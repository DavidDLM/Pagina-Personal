import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Roses from "./Roses";
import background from "../../../public/image/background.jpg";
const CSSRoute = () => {
    return (
        <div style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'repeat'
        }}>
            <Topbar />
            <Navbar />
            <Roses />
            <Footer />
        </div>
    );
};

export default CSSRoute;
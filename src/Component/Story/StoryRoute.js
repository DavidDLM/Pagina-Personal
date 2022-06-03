import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Story from "./Story";
import background from "../../../public/image/background.jpg";
const StoryRoute = () => {
    return (
        <div style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'repeat'
        }}>
            <Topbar />
            <Navbar />
            <Story />
            <Footer />
        </div>
    );
};

export default StoryRoute; 
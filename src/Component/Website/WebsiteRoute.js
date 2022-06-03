import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Website from "./Website";
import background from "../../../public/image/website.jpg";

const WebsiteRoute = () => {
    return (
        <div style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'repeat'
        }}>
            <Topbar />
            <Navbar />
            <Website />
            <Footer />
        </div>
    );
};

export default WebsiteRoute;

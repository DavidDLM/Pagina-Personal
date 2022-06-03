import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Chat from "./Chat";
import background from "../../../public/image/background.jpg";

const ChatRoute = () => {
    return (
        <div style={{
            background: 'url(' + background + ')',
            backgroundRepeat: 'repeat'
        }}>
            <Topbar />
            <Navbar />
            <Chat />
            <Footer />
        </div>
    );
};

export default ChatRoute;
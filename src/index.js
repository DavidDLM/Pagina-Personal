import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import CardRoute from "./Component/Memory_Game/CardRoute";
import CSSRoute from "./Component/CSS/CSSRoute";
import ChatRoute from "./Component/Chat/ChatRoute";
import CalculatorRoute from "./Component/Calculator/CalculatorRoute";
import WebsiteRoute from "./Component/Website/WebsiteRoute";
import StoryRoute from "./Component/Story/StoryRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/css" element={<CSSRoute />}></Route>
        <Route path="/card" element={<CardRoute />}></Route>
        <Route path="/chat" element={<ChatRoute />}></Route>
        <Route path="/calc" element={<CalculatorRoute />}></Route>
        <Route path="/web" element={<WebsiteRoute />}></Route>
        <Route path="/story" element={<StoryRoute />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

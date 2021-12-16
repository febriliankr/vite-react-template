import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import About from "./routes/about";
import Home from "./routes/home";
import PrivacyPolicy from "./routes/privacy-policy";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

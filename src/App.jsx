import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginSignup from "./pages/LoginSignup";
import Room from "./components/Room/Room";
// import RoomItem from "./components/RoomItem/RoomItem";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

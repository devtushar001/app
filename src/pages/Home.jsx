import React from "react";
import './Styles/Home.css';
import RoomDisplay from "../components/RoomDisplay/RoomDisplay";
import Hero from "../components/Hero/Hero"
const Home = () => {

   return (
    <div className="homepage">
      {/* < Slider/> */}
      < Hero />
      <RoomDisplay />
    </div>
   );
};

export default Home;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import './Room.css'
import { HostelContext } from "../../Context/HostelContext";
import BookingButton from "../BookingButton/BookingButton";
import Reviews from "../Reviews/Reviews";
import Amenities from "../Amenites/Amenities";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Room = () => {
  const { hostelData } = useContext(HostelContext);
  const { id } = useParams();

  return (
    <div className="room-detail-page">
      {hostelData.map((item) => {
        if (item.id === id) {
          const {
            name,
            type,
            price,
            maxOccupancy,
            amenities,
            description,
            bathroom,
            view,
            location,
            photos,
            reviews,
            reviewCount,
            bookingPolicy,
            checkInTime,
            checkOutTime,
          } = item;

          return (
            <div className="room-container">
               {photos.map((photo, index) => {
                <ul key={index}>
                  <li>{photo}</li>
                </ul>
               })}
            </div>
          );
        }
        
      })}
    </div>
  );
};


export default Room;
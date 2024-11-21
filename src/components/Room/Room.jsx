import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import './Room.css'
import { HostelContext } from "../../Context/HostelContext";

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
            <div key={id}>
              {/* Room Title and Header */}
              <div className="room-header">
                <h1 className="room-title">{name}</h1>
                <h2 className="room-type">{type}</h2>
                <div className="room-price">${price} / night</div>
              </div>

              {/* Image Carousel */}
              <div className="image-carousel">
                <ImageCarousel images={photos} />
              </div>

              {/* Room Details Section */}
              <div className="room-details">
                <div className="room-description">
                  <h3>Description</h3>
                  <p>{description}</p>
                </div>
                <div className="room-info">
                  <h3>Details</h3>
                  <ul>
                    <li><strong>Max Occupancy:</strong> {maxOccupancy}</li>
                    <li><strong>Bathroom:</strong> {bathroom}</li>
                    <li><strong>View:</strong> {view}</li>
                    <li><strong>Location:</strong> {location}</li>
                  </ul>
                </div>
              </div>

              {/* Amenities */}
              <div className="amenities-section">
                <h3>Amenities</h3>
                <Amenities amenities={amenities} />
              </div>

              {/* Additional Information */}
              <div className="additional-info">
                <h3>Additional Info</h3>
                <ul>
                  <li><strong>Check-In:</strong> {checkInTime}</li>
                  <li><strong>Check-Out:</strong> {checkOutTime}</li>
                  <li><strong>Booking Policy:</strong> {bookingPolicy}</li>
                </ul>
              </div>

              {/* Reviews Section */}
              <div className="reviews-section">
                <h3>Reviews</h3>
                <Reviews reviews={reviews} reviewCount={reviewCount} />
              </div>

              {/* Booking Button */}
              <div className="booking-button-container">
                <BookingButton />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};


export default Room;
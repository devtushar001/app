import React, { useContext } from "react";
import './Room.css'
import { Link, useParams } from "react-router-dom";
import { HostelContext } from "../../Context/HostelContext";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Room = () => {
  const { id } = useParams();
  const { hostelData } = useContext(HostelContext);

  return (
    <>
      {hostelData.map((room, index) => {
        if (room.id == id) {
          const { photos, name, type, price, maxOccupancy, size, amenities, reviews, reviewCount, description, bathroom, view, location } = room;
          const [fphoto, sphoto] = photos;
          return (
            <>
              <div className="room">
                <div className="room-images">{<ImageCarousel fphoto={fphoto} sphoto={sphoto} />}</div>
                <div className="room-ratings">
                  <p>Reviews : &#9733;{reviews}</p> <span> Review Count: {reviewCount}</span>
                </div>
                <div className="room-details">
                  <h1>{name}</h1>
                  {/* type
                  price
                  maxOccupancy
                  size */}
                  <div className="room-full-details">
                    <p>Type : {type}</p>
                    <p>Price : {price}</p>
                    <p>Maxoccupancy : {maxOccupancy}</p>
                    <p>Size : {size}</p>
                  </div>
                  <div className="other-details">
                    <ul>
                      <h3>Amenities</h3>
                      {amenities.map((amenity, index) => {
                        return (
                          <li key={index}>{amenity}</li>
                        )
                      })}
                    </ul>
                    <div className="room-description">
                      <h3>Description</h3>
                      <p>{description}</p><br />
                      <hr />
                      <br />
                      <div>
                        <span> <b>Location : </b>{location}</span><br />
                        <span> <b>View : </b>{view}</span><br />
                        <span> <b>Bathroom :</b>{bathroom}</span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="to-booking">
                  <Link to="/bookings">
                  <button className="to-booking-btn"> Book Now</button>
                  </Link>
                  <Link to="/">
                    <button className="room-btn">Other Rooms</button>
                  </Link>
                </div>

              </div>

            </>
          )
        }
      })}
    </>
  )
}
export default Room;